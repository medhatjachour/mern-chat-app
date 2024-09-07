// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux';
import { selectId } from '../app/features/userDataSlice';
const Chat = () => {
  const user_id = useSelector(selectId);
  console.log(user_id);
  
  return (
    <div>Chat {user_id}</div>
  )
}

export default Chat