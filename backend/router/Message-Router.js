const express = require('express');
const { GetMessage ,SendMessage} = require('../controller/Message-controller');
const { VerifyToken } = require('../middleware/Verify-Token');

const router = express.Router();

router.get('/:id',VerifyToken,GetMessage).post('/send/:id',VerifyToken,SendMessage)

module.exports = router;