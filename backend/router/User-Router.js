const express = require('express');
const { GetUser } = require('../controller/User-controller');
const { VerifyToken } = require('../middleware/Verify-Token');
const router = express.Router();
router.get('/',VerifyToken,GetUser)
module.exports = router;