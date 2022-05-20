const express = require('express')
const router = express.Router()
const {createUser, loginUser,getUser} = require('../Controllers/LoginController')
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');


router.route('/login').post(loginUser);
router.route('/getuser').get(fetchuser,getUser);
router.route('/createuser')
    .post([
        body('username','Length of username must be at least 5 characters').isLength({min:5}),
        body('password','Length of password must be atleast 5 characters').isLength({min:6})],
        createUser);


module.exports = router;