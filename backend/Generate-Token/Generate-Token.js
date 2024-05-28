const jwt = require('jsonwebtoken')
require('dotenv').config()
const GenerateToken = (User, res) => {
    let token = jwt.sign({ id: User._id }, process.env.token)
    const { Password, ...Others } = User._doc
    res.cookie("token", token, {
        httpOnly: true,
        path: '/',
        expires: new Date("2024/5/29"),
        SameSite: "Liibaan"
    })
    res.json({ status: "Success", message: "Successfully Logged In", ...Others, token, })

}
module.exports = GenerateToken