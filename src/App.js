import './scss/index.scss';
import{ LoadView } from './components/index';
import {Routes, Route } from 'react-router-dom';
// import firebase from './firebase';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoadView />} />
      </Routes>
    </>
  );
}

export default App;
