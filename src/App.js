import './scss/index.scss';
import{
  // テスト用
  Urls,
  //  キャラカスタム
  LoadView,Title, NewName, CharaSelect, CharaComp,
  // 各種ページ
  Home, RoomCustom, Mypage, BattleHome,
  //  クイズバトル
  GenerationSelect, RareSelect, ItemSelect, MatchingView
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
        <Route path='/battlehome' element={<BattleHome />} />
        <Route path='/genselect' element={<GenerationSelect />} />
        <Route path='/rareselect' element={<RareSelect />} />
        <Route path='/itemselect' element={<ItemSelect />} />
        <Route path='/matching' element={<MatchingView />} />
      </Routes>
    </>
  );
}

export default App;
