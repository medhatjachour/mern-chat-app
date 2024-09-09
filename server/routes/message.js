import express from "express";
import Conversation from "../model/Conversation.js";
import verifyUser from "../middleware/verifyUser.js";
import Message from "../model/Message.js";
const router = express.Router();

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
