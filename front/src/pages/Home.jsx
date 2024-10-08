// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from "react";
import Model from "../components/Model";
import Register from "./../components/Register";
import Login from "./../components/Login";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isModelOpened, setModelOpened] = useState(false);
  const [isLogIn, setLogIn] = useState(true);
  const navigate = useNavigate()

  const openSignUp = () =>{
    setModelOpened(true)
    setLogIn(false);
  }
  const openLogin = () =>{
    setModelOpened(true)
    setLogIn(true);
  }


  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/chat/user/verify",{headers:{
          "Authorization":`Bearer ${window.localStorage.getItem('chat-token')}`
        }});
        console.log(res.data.msg);
      if (res.data.msg === "success"){
        navigate('/chat')
      }else{
        navigate('/')
      }
      } catch (error) {
        console.log(error);
      }
    }
    
    verifyUser()
  }, []);
  return (  
    <div className=" flex items-center justify-center h-screen bg-gray-100 ">
      <div className="bg-cover rounded-lg flex items-center justify-center w-2/4 h-[calc(100vh-60px)] bg-[url('../public/OIP.jpeg')]">
        <div className="text-center">
          <h2 className="text-4xl py-3 bg-opacity-75 font-bold text-gray-700 rounded-lg">
            welcome
          </h2>
          <button
            className="capitalize p-3 hover:bg-blue-400 rounded-lg bg-blue-300 text-white text-3xl"
            onClick={() => setModelOpened(true)}
          >
            login/register
          </button>
        </div>{" "}
      </div>
      <Model isModelOpened={isModelOpened} setModelOpened={setModelOpened}>
        {isLogIn ? <Login openSignUp ={openSignUp} /> : <Register openLogin={openLogin}/>}
        
      </Model>
    </div>
  );
};

export default Home;
