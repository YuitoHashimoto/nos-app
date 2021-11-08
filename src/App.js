import './App.css';
import{ Home } from './components/index';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>初期</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<h1>あああ</h1>}/>
      </Routes>
    </>
  );
}

export default App;
