const express = require("express");
const router = express.Router();
const {sendChat,getChat} = require('../Controllers/ChatController');

router.route('/sendchat').post(sendChat).get(getChat);


module.exports=router;