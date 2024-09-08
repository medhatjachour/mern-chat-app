// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SideBar = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    console.log(users)
    useEffect(() => {
       const fetchedData = async()=>{  
        try {
            const fetchedUsers = await axios.get('http://localhost:5000/chat/users/users',{headers:{
              "Authorization":`Bearer ${window.localStorage.getItem('chat-token')}`
            }});
            setUsers(fetchedUsers.data.users)
            console.log(fetchedUsers);
            
        } catch (error) {
        console.log(error);
        navigate('/')    
        }
       }
       fetchedData()
    }, []);
  return (
    <div>
        <input type="text" placeholder="Search"/>
    </div>
  )
}

export default SideBar