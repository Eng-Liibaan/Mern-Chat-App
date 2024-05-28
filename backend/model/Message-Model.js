const mongoose = require('mongoose')

const { Schema, model } = mongoose

const MessageSchema = new Schema({
    SendID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    ReceiveID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    Message: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = model('Message', MessageSchema)