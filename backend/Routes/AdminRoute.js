const express = require('express');
const router = express.Router();
const {getAll,getSpecificUser} = require('../Controllers/AdminController');
const fetchuser = require('../Middleware/fetchuser');

router.route('/getall').get(fetchuser,getAll);
router.route('/getspecific').get(fetchuser,getSpecificUser)

module.exports = router;
