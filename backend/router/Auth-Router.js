const express = require('express');
const { SignUp, Login, Logout } = require('../controller/Auth-controller');
const router = express.Router();
router.post('/signup',SignUp).post('/login',Login).post('/logout',Logout)

module.exports = router;