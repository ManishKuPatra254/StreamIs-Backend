var express = require('express');
const { userSignup, userLogin, getUserList, getUserById, updateData, deleteUsers } = require('../controller/auth');
var router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/userlist', getUserList);
router.get('/getDataById/:id', getUserById);
router.put('/update-user/', updateData)

router.delete('/deleteUsers', deleteUsers)

module.exports = router;
