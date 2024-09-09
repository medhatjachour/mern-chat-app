// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SideBar = ({ setChat, setChatInit,socket,setReceiverId }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const fetchedUsers = await axios.get(
          "http://localhost:5000/chat/users/users",
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "chat-token"
              )}`,
            },
          }
        );
        setUsers(fetchedUsers.data.users);
        console.log(fetchedUsers);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    fetchedData();
  }, []);
  const startChat = (id)=>{
    socket.emit('join',id)
    setChatInit(true);
    setReceiverId(id)
  }
  return (
    <div className=" w-1/4 bg-black p-4 bg-opacity-80 relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 border rounded-xl"
      />
      {users?.length > 0 ? (
        <div className="space-y-4 mb-4">
          {users?.map((user, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-2 hover:bg-gray-300 cursor-pointer"
              onClick={ () => startChat(user._id)}
            >
              <img
                src={user.image}
                alt={user.username}
                className=" w-10 h-10 rounded-full border"
              />
              <span className="text-white text-sm font-bold">
                {user.username}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-white ">no users</p>
        </div>
      )}
      <button className=" bottom-4 right-4 left-4 rounded hover:bg-blue-600 bg-blue-400 text-white mt-4 absolute">
        LogOut
      </button>
    </div>
  );
};
SideBar.propTypes = {
  setChat: PropTypes.any,
  setChatInit: PropTypes.any,
  socket: PropTypes.any,
  setReceiverId: PropTypes.any,
  
};

export default SideBar;
