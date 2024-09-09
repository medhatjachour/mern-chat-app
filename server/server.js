import express from 'express';
import cors from 'cors';
import Connect from './db/connection.js';

import AuthRouter from './routes/auth.js';
import useRouter from './routes/user.js'
import { http_server,app } from './socket/socket.js';
// const app = express();

app.use(cors())
app.use(express.json())
app.use("/chat/user",AuthRouter)
app.use("/chat/users",useRouter)

http_server.listen(process.env.PORT,()=>{
    Connect()
    
})