var express = require('express');
const { userSignup, userLogin, getUserList, getUserById } = require('../controller/auth');
var router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/userlist', getUserList);
router.get('/getDataById/:id', getUserById);


module.exports = router;
