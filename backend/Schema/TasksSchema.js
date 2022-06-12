const mongoose = require("mongoose")
const {Schema} = mongoose

const taskSchema = new Schema({
    uid:{type:String, required:true},
    task:{type:String,required:true},
    note:String,
    date:{type:String,default:(new Date()).toISOString().split('T')[0]},
    status:{type:String,default:"New"}
})

module.exports = mongoose.model('Task',taskSchema);