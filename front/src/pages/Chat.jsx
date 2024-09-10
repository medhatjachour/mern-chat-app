// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectId } from "../app/features/userDataSlice";
import SideBar from "../components/SideBar";
import ChatForm from "../components/ChatForm";
const Chat = ({socket}) => {
  const user_id = useSelector(selectId);
  console.log(user_id);
  const [chatInit, setChatInit] = useState(false);
  const [chat, setChat] = useState([]);
  const [ReceiverId, setReceiverId] = useState();
 
  useEffect(() => {
    socket.on("newMessage", (message) =>{
      setChat(state=>[...state,{sender: message.sender, content:message.content}])
    })
   
  }, [socket]);


  return (
    <div className=" flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-cover rounded-lg flex w-2/4 h-[calc(100vh-60px)] bg-[url('../public/OIP.jpeg')]">
        <SideBar setChat = {setChat} setChatInit = {setChatInit}  socket={socket} setReceiverId={setReceiverId}/>
        <div className="w-3/4 bg-white flex flex-col bg-opacity-5 relative">
          {chatInit ? (
            <div>
              <div className="overflow-y-auto mb-20">
                {chat&& chat?.map((chats,index)=>(
                  <div key={index} className={`flex px-4 ${chats.sender === user_id?"justify-end":"justify-start" }`}>
                    <div className={`p-2 my-2 rounded-sm ${chats.sender === user_id?"bg-blue-500 text-white" :"bg-white" }`}>
                      {chats.content}
                    </div>
                  </div>
                ))}
              </div>

             <ChatForm ReceiverId={ReceiverId} setChat = {setChat} chat={chat}/>
            </div>
          ) : (
            <div className="flex text-3xl justify-center items-center h-full">
              <p> welcome</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Chat.propTypes = {
  socket: PropTypes.any,
};
export default Chat;
