import './App.css';
import{ Home, Todo, Chats, ChatRoom } from './components/index';
import {Routes, Route } from 'react-router-dom';
// import firebase from './firebase';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/todo" element={<Todo />}/>
          <Route path="/chats" element={<Chats />}/>
          <Route path="/chatroom" element={<ChatRoom />}/>
      </Routes>
    </>
  );
}

export default App;
