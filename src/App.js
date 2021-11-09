import './App.css';
import{ Home,Todo } from './components/index';
import {Routes, Route } from 'react-router-dom';
// import firebase from './firebase';

function App() {
  return (
    <>
      <h1>コンポーネント</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/todo" element={<Todo />}/>
      </Routes>
    </>
  );
}

export default App;
