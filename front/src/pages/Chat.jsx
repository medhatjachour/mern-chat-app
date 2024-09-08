// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectId } from "../app/features/userDataSlice";
import SideBar from "../components/SideBar";
const Chat = () => {
  const user_id = useSelector(selectId);
console.log(user_id);

  return (
    <div className=" flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-cover rounded-lg flex items-center justify-center w-2/4 h-[calc(100vh-60px)] bg-[url('../public/OIP.jpeg')]">
        <SideBar/>
      </div>
    </div>
  );
};

export default Chat;
