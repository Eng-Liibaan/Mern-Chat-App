const message = require('../model/Message-Model')
const Conversation = require('../model/Conversation-Model')
const GetMessage = async (req, res) => {
    let Getmessage = await Conversation.findById(req.params.id).populate(["Message","Participants"])
    res.send(Getmessage)
}

const SendMessage = async (req, res) => {
    let { Message } = req.body;
    let SendID = req.user
    const { id: ReceiveID } = req.params
    const NewMessage = new message({ Message, SendID, ReceiveID })
    let NewConversation = new Conversation({ Participants: [SendID, ReceiveID], Message: NewMessage._id })
    let info = await Promise.all([NewConversation.save(), NewMessage.save()])
    res.send({ status: "Success", message: "Successfully Send Message", info })

}
module.exports = { GetMessage, SendMessage }