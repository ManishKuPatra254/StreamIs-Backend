var express = require('express');
const { userSignup, userLogin, getUserList, getUserById, updateData, deleteUsers, bulkDelete } = require('../controller/auth');
var router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/userlist', getUserList);
router.get('/getDataById/:id', getUserById);
router.put('/update-user/', updateData)
router.post('/deleteUsers', bulkDelete)

module.exports = router;
