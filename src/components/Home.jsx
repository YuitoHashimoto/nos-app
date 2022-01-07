import { RoomView, GoodsIcon, PresentIcon, BattleBtn } from './icons/index'
import { HomeHead, HomeFoot } from './index'

const Home = () => {
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
                <BattleBtn />
            </div>
            <HomeFoot />
        </main>
    )
}

export default Home;