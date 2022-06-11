const Login = require('../Schema/LoginSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const {validationResult} = require('express-validator');

const createUser = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        const {firstname,lastname,username,password} = req.body
        const existingUser = await Login.findOne({username})
        if(existingUser) return res.status(401).json({color:'red',msg:"User already exists"});
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);
        
        const userCreation = await Login.create(
            {   
                firstname,
                lastname,
                username,
                password:hashedPass
            }
        )
        res.status(200).json({color:"green",msg:"User Created Successfully"});
    }
    catch(err){
        res.status(500).json({err})
    }
}

const loginUser = async(req,res)=>{
    const success=false;
    try{
        if(req.body.password){
            const searchUser = await Login.findOne({username:req.body.username})
            if(!searchUser){
                return res.status(403).json({color:"red",msg:"user does not exist"})
            }
            const hash = searchUser.password
            const match = await bcrypt.compare(req.body.password,hash)
            if(!match) return res.status(401).json({msg:"Wrong Password"})
            const data = {
                user:{
                    id:searchUser._id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_SECRET);
            res.status(200).json({authToken,success:true}); 
            return;
        }
        res.status(500).json({color:"red",msg:"Enter Password"});
        
    }
    catch(err){
        res.status(500).json({color:"red",err:"Some Error occuerd"})
    }
}

const getUser = async(req,res)=>{
    try{
        const {uid} = req.body
        const payload = await Login.findOne({_id:uid}).select('-password');
        res.status(200).json({payload})
    }
    catch(err){
        res.status(404).json({msg:"user not found"})
    }
    
}

module.exports = {loginUser,createUser,getUser}