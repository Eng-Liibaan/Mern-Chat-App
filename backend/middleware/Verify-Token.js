const jwt = require('jsonwebtoken')

exports.VerifyToken = (req, res, next) => {
    let token = req.headers.cookie && req.headers.cookie.split('=')[1]
    if (!token) return res.json("Cookie Not Found")
    jwt.verify(token, process.env.token, (err, decode) => {
        if (err) return res.json("Invalid Token")
        req.user = decode.id
        next()
    })
}