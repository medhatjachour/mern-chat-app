# Chat App with React, Redux, Socket.io, Node.js, and MongoDB

This repository contains a chat application built using modern web technologies. Users can join chat rooms, exchange messages in real-time, and enjoy a seamless communication experience.
<!-- ## Live Preview https://car-eco.vercel.app/Listing-details/27 -->

<!-- ![alt text](https://github.com/medhatjachour/car-eco/blob/main/sample/1.png?raw=true) -->


## Features

- **Real-time Messaging:**
  -  Users can send and receive messages instantly.
  
- **Multiple Chat Rooms:**
  -  Create or join different chat rooms.

- **User Authentication:**
  - Secure your app with JWT token-based authentication.

- **Persistent Data:**
  -  Store chat history in MongoDB.

## Technologies Used
- ## Frontend
-  **React**: A popular JavaScript library for building user interfaces.
-  **Redux**: State management for predictable application behavior.
-  **React** Router DOM: Handle routing within the app.
-  **Socket.io Client**: Real-time communication between client and server.
- ## Backend
-  **Node.js**: Server-side JavaScript runtime..
-  **Express**: Web application framework for Node.js.
-  **Mongoose** MongoDB object modeling for Node.js.
-  **MongoDB**: NoSQL database for storing chat data
-  **Socket.io Client**:  Real-time communication library.
## Getting Started

1. **Clone the Repository:**
```bash
git clone https://github.com/medhatjachour/mern-chat-app.git
cd mern-chat-app
```

2. **Install Dependencies:**
```bash
cd front
npm install 
npm run dev

```
```bash
cd ..
cd server
npm install 
npm start
```

3. **Set Up Firebase:**
- Configure Environment Variables: Create a .env file in the server directory with the following variables:
```bash
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```


## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
