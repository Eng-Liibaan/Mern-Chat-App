const User = require('../model/User-Model')
const GetUser = async (req, res) => {
    let Getuser = await User.find({_id:{$ne:req.user}}).select('-Password')
    res.json(Getuser)
}
module.exports = { GetUser }