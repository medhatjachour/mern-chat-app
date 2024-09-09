import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const http_server = http.createServer(app);

const onlineUsers = {};

const Socket_io_Obj = new Server(http_server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});
Socket_io_Obj.on("connection", (socket) => {
  socket.on("join", (receiverId) => {
    onlineUsers[receiverId] = socket.id;
    console.log("receiverId:",receiverId,"socket:", socket.id);

});
});
export { app, http_server };
