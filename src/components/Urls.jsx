import { Link } from 'react-router-dom';

const Urls = () => {
    return (
        <div className='urls'>
            <Link to="/load">Load</Link>
            <Link to="/title">Title</Link>
            <Link to="/name">Name</Link>
            <Link to="/charaselect">CharaSelect</Link>
            <Link to="/characomp">CharaComp</Link>
            <Link to="/home">Home</Link>
            <Link to="/roomcustom">RoomCustom</Link>
            <Link to="/mypage">Mypage</Link>
            <Link to="/battlehome">BattleHome</Link>
            <Link to="/genselect">GenerationSelect</Link>
            <Link to="/rareselect">RareSelect</Link>
            <Link to="/itemselect">ItemSelect</Link>
            <Link to="/matching">MatchingView</Link>
        </div>
    )
}

export default Urls;