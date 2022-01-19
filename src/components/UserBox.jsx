import { StarIcon } from './icons/index'

const UserBox = (props) => {
    return (
    <div className='player'>
        <div className='overlayBack'></div>
        <div className='player__chara'></div>
        <div className='player__stats'>
            <p className='player__stats__name'>{props.user}</p>
            <div className='player__stats__item'>
                <div className='itemIcon'></div>
                <div className='itemTxt'>
                    <div className='itemTxt__rank'>
                        <StarIcon />
                        <p>5</p>
                    </div>
                    <p className='itemTxt__itemName'>ラムネ棒</p>
                </div>
            </div>
        </div>
    </div>

    )
}
export default UserBox;