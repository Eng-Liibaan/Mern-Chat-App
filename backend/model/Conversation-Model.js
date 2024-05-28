const mongoose = require('mongoose')

const { Schema, model } = mongoose

const ConversationSchema = new Schema({
    Participants: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }],
    Message: [{
        type: String,
        required: true,
        ref: "Message",
        default: []
    }]
}, { timestamps: true })

module.exports = model('Conversation', ConversationSchema)