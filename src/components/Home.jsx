import { RoomView, GoodsIcon, PresentIcon, BattleBtn } from './icons/index'
import { HomeHead, HomeFoot } from './index'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/battlehome'
        })
    }


    return (
        <main className='home'>
            <HomeHead />
            <div className='home__content'>
                <div className='home__content__room'>
                    <RoomView />
                </div>
                <div className='home__content__icons'>
                    <GoodsIcon className='goodsIcon' />
                    <PresentIcon className='presentIcon' />
                </div>
            </div>
            <div className='home__battle'>
                <BattleBtn onClick={nextPage} />
            </div>
            <HomeFoot />
        </main>
    )
}

export default Home;