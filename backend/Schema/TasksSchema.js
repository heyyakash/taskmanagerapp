const mongoose = require("mongoose")
const {Schema} = mongoose

const taskSchema = new Schema({
    uid:{type:String, required:true},
    task:String,
    status:{type:String,default:"New"}
})

module.exports = mongoose.model('Task',taskSchema);