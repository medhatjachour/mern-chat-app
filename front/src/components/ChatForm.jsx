// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectId } from "../app/features/userDataSlice";
import PropTypes from "prop-types";

import axios from "axios";

const ChatForm = ({ ReceiverId ,setChat,chat}) => {
  const [message, setMessage] = useState("");
  const user_id = useSelector(selectId);

  const sendMessage = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/chat/messages/send/" + ReceiverId
      );
      setChat([...chat,{content: message,sender:user_id}])
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4  absolute bottom-0 right-0 left-0 bg-white flex items-center justify-center bg-opacity-10 ">
      <form action="" onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="type your message .. "
          className="w-full p-2 rounded-l-lg"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r-lg">
          send
        </button>
      </form>
    </div>
  );
};

ChatForm.propTypes = {
  ReceiverId: PropTypes.any,
  setChat: PropTypes.any,
  chat: PropTypes.any,
  
  
};
export default ChatForm;
