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

module.exports = {sendChat}