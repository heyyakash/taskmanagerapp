const express = require('express');
const router = express.Router();
const {getAll} = require('../Controllers/AdminController');
const fetchuser = require('../Middleware/fetchuser');

router.route('/getall').get(fetchuser,getAll)

module.exports = router;
