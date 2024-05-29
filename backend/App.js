const { MongodbConnection } = require("./config/DatabaseConnection");
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const server = express()
server.use(cookieParser())
server.use(express.json())
server.use(cors())
// const AuthRouter = require('./router/Auth-Router')
// const UserRouter = require('./router/User-Router')
const MessageRouter = require('./router/Message-Router')
// server.use('/api/auth', AuthRouter)
server.use('/api/message', MessageRouter)
// server.use('/api/users', UserRouter)

const path = require('path')
server.use(express.static(path.join(__dirname,"../frontend/dist")))
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html")) 

})


MongodbConnection()
server.listen(process.env.Port || 3000, () => console.log("Server Running Port 3000"))