import './scss/index.scss';
import{ Urls, LoadView, Title, NewName, CharaSelect } from './components/index';
import {Routes, Route } from 'react-router-dom';
// import firebase from './firebase';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Urls />} />
        <Route path='/load' element={<LoadView />} />
        <Route path='/title' element={<Title />} />
        <Route path='/name' element={<NewName />} />
        <Route path='/charaselect' element={<CharaSelect />} />
      </Routes>
    </>
  );
}

export default App;
