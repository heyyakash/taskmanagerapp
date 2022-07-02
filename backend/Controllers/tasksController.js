const res = require("express/lib/response")
const Task= require('../Schema/TasksSchema.js')

const createTask = async(req,res)=>{
    try{
        const body={
            uid:req.body.uid,
            task:req.body.task,
            note:req.body.note,
            status:req.body.status,
            date:req.body.date,
        }
        body.user = req.user
        const creation = await Task.create(body)
        res.status(200).json({msg:"Task Added Successfully"})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const getTask = async(req,res)=>{
    try{
        const {uid} = req.body
        const payload = await Task.find({uid})
        res.status(200).json({payload})
    }
    catch(err){
        res.status(500).json({err})
    }
}
const deleteTask = async(req,res)=>{
    try{
        const {id} = req.params
        const del = await Task.findOneAndDelete({_id:id})
        res.status(200).json({msg:"Successfully deleted"});
    }
    catch(err){
        res.status(500).json({err})
    }
}

const updateTask = async(req,res)=>{
    try{
        const {id} = req.params 
        const update =await Task.findOneAndUpdate({_id:id},req.body,{new:false} )
        res.status(200).json({msg:"Successfully Updated"})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

module.exports = {createTask,getTask,deleteTask,updateTask}