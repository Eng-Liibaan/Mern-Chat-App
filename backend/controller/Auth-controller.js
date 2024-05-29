const GenerateToken = require('../Generate-Token/Generate-Token');
const User = require('../model/User-Model')
const bcrypt = require('bcryptjs')
const SignUp = async (req, res) => {
    let { FullName, Gender, Email, Password } = req.body;
    
    // ProfileGirl = `https://avator.iran.liara.run/public/boy/?Email=${Email}`
    // ProfileBoy = `https://avator.iran.liara.run/public/boy/?Email=${Email}`
    let salt = await bcrypt.genSalt(10)
    let HashPass = await bcrypt.hash(Password, salt)
    let CreateNewUser = await User({ FullName, Gender, Email, Password })
    let UserExist = await User.findOne({ Email })
    if (UserExist) return res.json("User Already Exist")
    await CreateNewUser.save()
    res.status(201).json({ status: "success", message: "Successfully Insert New User", CreateNewUser })
}
const Login = async (req, res) => {
    let { Email, Password } = req.body;
    let UserExist = await User.findOne({ Email })
    if (!UserExist) return res.json("Email or Password InCorrect")
    // const PassowrdIsCorrect = await bcrypt.compare(Password, UserExist.Password)
    // if (!PassowrdIsCorrect) return res.json("Email or Password InCorrect")
    await GenerateToken(UserExist, res)
}
const Logout = async (req, res) => {
    console.log('welcome Logout')
}


module.exports = { SignUp, Login, Logout }