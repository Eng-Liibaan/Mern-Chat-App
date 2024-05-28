require('dotenv').config()
const mongoose=require('mongoose')
exports.MongodbConnection=()=>{
   mongoose.connect(process.env.mongodb).then(()=>console.log("Successfully Mongodb Connected !"))
}