// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import PropTypes from "prop-types";
import axios from "axios";
const Register = ({ openLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [UserImage, setUserImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("image", UserImage);
    try {
     const res =  await axios.post("http://localhost:5000/chat/user/register", formData);
     
      if(res.data.msg === "success"){

        openLogin()
      }
    } catch (error) {
      // alert(error.msg)
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700" htmlFor="upload Image">
            Upload Image:
          </label>
          <input
            className="p-2 border block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-900 cursor-pointer"
            type="file"
            placeholder="enter password"
            onChange={(e) => setUserImage(e.target.files[0])}
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-700 text-white py-2">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700"> Already have an account? </span>
        <button className="text-blue-500  " onClick={openLogin}>
          {" "}
          LogIn
        </button>
      </div>
    </div>
  );
};
Register.propTypes = {
  openLogin: PropTypes.any,
};

export default Register;
