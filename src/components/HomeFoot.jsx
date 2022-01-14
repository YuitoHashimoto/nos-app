import { HomeBtn, MypageBtn, RoomBtn, GachaBtn, FriendBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';


const HomeFoot = () => {
    const navigate = useNavigate();

    const nextHome = () => {
        navigate({
            pathname: '/home'
        })
    }
    const nextMypage = () => {
        navigate({
            pathname: '/mypage'
        })
    }

    const nextRoom = () => {
        navigate({
            pathname: '/roomcustom'
        })
    }

    // const nextGacha = () => {
    //     navigate({
    //         pathname: '/home'
    //     })
    // }

    // const nextFriend = () => {
    //     navigate({
    //         pathname: '/home'
    //     })
    // }


    return (
        <div className="homeFoot">
            <HomeBtn onClick={nextHome} />
            <MypageBtn onClick={nextMypage} />
            <RoomBtn onClick={nextRoom} />
            <GachaBtn onClick={nextHome} />
            <FriendBtn onClick={nextHome} />
        </div>
    )
}

export default HomeFoot;