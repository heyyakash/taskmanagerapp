const express = require("express");
const router = express.Router();
const {sendChat} = require('../Controllers/ChatController');

router.route('/sendchat').post(sendChat)


module.exports=router;