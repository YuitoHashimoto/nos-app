import { RoomView, GoodsIcon, RoomCustomBtn } from './icons/index'
import { HomeHead, HomeFoot } from './index'

const RoomCustom = () => {
     return (
         <main className='roomCustom'>
             <HomeHead />
             <GoodsIcon className='goodsIcon' />
            <div className='roomCustom__content'>
                <div className='roomCustom__content__room'>
                    <RoomView />
                </div>
            </div>
            <div className='roomCustom__custom'>
                <RoomCustomBtn />
            </div>
             <HomeFoot />
         </main>
     )
}

export default RoomCustom;