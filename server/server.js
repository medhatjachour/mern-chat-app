import express from 'express';
import cors from 'cors';
import { http_server,app } from './socket/socket.js';


import Connect from './db/connection.js';

import AuthRouter from './routes/auth.js';
import useRouter from './routes/user.js';
import messageRouter from './routes/message.js'
// const app = express();

app.use(cors())
app.use(express.json())
app.use("/chat/user",AuthRouter)
app.use("/chat/users",useRouter)
app.use("/chat/message",messageRouter)

http_server.listen(process.env.PORT,()=>{
    Connect()
    
})