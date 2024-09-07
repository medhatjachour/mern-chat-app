// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ChangeId } from "../app/features/userDataSlice";
const Login = ({openSignUp}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res =  await axios.post("http://localhost:5000/chat/user/login", {username, password});
     
      if(res.data.msg === "success"){
        console.log(res);
        window.localStorage.setItem("chat-token", res.data.token);
        dispatch(ChangeId(res.data.user._id))
        navigate('/chat')
        
      }
    } catch (error) {
      // alert(error.msg)
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name:</label>
          <input className="w-full px-3 py-2 border" type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label  className="block text-gray-700"  htmlFor="password">Password:</label>
          <input  className="w-full px-3 py-2 border" type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="mb-4 flex items-center justify-between ">
          <label htmlFor="remember me"  className="inline-flex items-center">
            <input type="checkbox"  className=""/>
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a className="text-red-800" href="">forgot password</a>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-700 text-white py-2">Login</button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700"> Dont have an account?  </span>
        <button className="text-blue-500  " onClick={openSignUp}> Sign Up</button>
      </div>
    </div>
  );
};
Login.propTypes = {
  openSignUp: PropTypes.any,
};

export default Login;
