const Chat = require("../Schema/ChatSchema");

const sendChat = async(req,res) => {
    try{
        const chat = req.body;
        await Chat.create(chat);
        res.status(200).json({msg:"Chat Created",success:true})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const getChat = async(req,res) => {
    try{
        const chat = await Chat.find({})
        res.status(200).json(chat)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {sendChat,getChat}