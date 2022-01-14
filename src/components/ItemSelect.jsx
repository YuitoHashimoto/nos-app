import { ItemSelTitle, ItemSelTxt, StarIcon, SelectBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';


const ItemSelect = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/matching'
        })
    }


    return ( 
        <main className="itemSelect">
            <div className="itemSelect__content">
                <div className="itemSelect__content__titleArea">
                    <ItemSelTitle />
                    <ItemSelTxt className='itemSelTxt' />
                </div>
                <div className="itemSelect__content__selectArea">
                    <div className='backOverlay'></div>
                    <div className='selectBox'>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                    </div>
                    <SelectBtn className='selectBtn' onClick={nextPage} />
                </div>
            </div>
        </main>
    )
}

export default ItemSelect;