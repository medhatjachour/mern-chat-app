import Chat from "./pages/Chat";
import Home from "./pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat socket={socket}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
