const Login = require('../Schema/LoginSchema.js');
const Task = require('../Schema/TasksSchema');

const getAll = async(req,res) => {
    try{
        if(req.body.type !== "admin"){
            return res.status(401).json({msg:"unauthorized"});
        }
        const data = await Login.find({});
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
    
}

const getSpecificUser = async(req,res)=>{
    try{
        if(req.body.type !== "admin"){
            return res.status(401).json({msg:"unauthorized"});
        }
        const {id}  = req.headers;
        const data = await Task.find({uid:id});
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {getAll,getSpecificUser}