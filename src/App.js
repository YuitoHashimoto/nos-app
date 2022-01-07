import './scss/index.scss';
import{
  // テスト用
   Urls,
  //  キャラカスタム
   LoadView,Title, NewName, CharaSelect, CharaComp,
  // 各種ページ
   Home, RoomCustom, Mypage
} from './components/index';
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
        <Route path='/characomp' element={<CharaComp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/roomcustom' element={<RoomCustom />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App;
