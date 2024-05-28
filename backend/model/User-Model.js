const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = new Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    ProfilePic: {
        type: String,
        reqiured: false,
        default: ""
    }
},{timestamps:true})

module.exports = model('User', UserSchema)