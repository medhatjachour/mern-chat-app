import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    // array of the users participating in the conversation
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
