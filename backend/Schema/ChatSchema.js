const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

const ChatSchema = new Schema({
    text:{type:String, required:true},
    timeStamp:{type:Date,default:new Date()},
    uid:{type:String,required:true},
    username:{type:String,required:true}
})

module.exports = mongoose.model('chats',ChatSchema);