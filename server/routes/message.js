import express from "express";
import Conversation from "../model/Conversation.js";
import verifyUser from "../middleware/verifyUser.js";
import Message from "../model/Message.js";
import { getReceiverSocketId,Socket_io_Obj } from "../socket/socket.js";
const router = express.Router();


router.get("/read/:receiverId",verifyUser,async (req, res, next) => {
  try {
    const { receiverId } = req.params;
    const senderId = req.user._id;
    const conversation=await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if(!conversation){
      res.status(404).json({message: "Not found"})
    }
    const messages = await Message.find({conversationId: conversation._id}).sort({createdAt: 1})
    return res.status(200).json(messages)
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error})
  }
})

router.post("/send/:receiverId", verifyUser, async (req, res) => {
  try {
    const { receiverId } = req.params;

    const senderId = req.user._id;
    const { content } = req.body;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
      await conversation.save();
      const ReceiverSocketId = getReceiverSocketId(receiverId)

      if(ReceiverSocketId){
        Socket_io_Obj.to(ReceiverSocketId).emit('newMessage',newMessage)
      }
      
    }
    const newMessage = new Message({
      conversationId: conversation._id,
      sender: senderId,
      content: content,
      createdAt: new Date(),
    });
    await newMessage.save();
    return res.json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "can't send the message" });
  }
});

export default router;
