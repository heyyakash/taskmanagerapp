const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

const ChatSchema = new Schema({
    text:{type:String, required:true},
    // timeStamp:{tdefault:new Date()},
    timeStamp:{type:Date,default:new Date()},
    uid:{type:String,required:true}
})

module.exports = mongoose.model('Chat',ChatSchema);