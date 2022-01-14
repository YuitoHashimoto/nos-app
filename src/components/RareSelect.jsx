import { RareSelTxt, Rare5, Rare4, Rare3, Rare1, RareRandom  } from './icons/index'
import { useNavigate } from 'react-router-dom';

const RareSelect = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/itemselect'
        })
    }

    return (
        <main className="rareSelect">
            <div className="rareSelect__content">
                <div className="rareSelect__content__titleArea">
                    <RareSelTxt className='rareSelTxt' />
                </div>
                <div className="rareSelect__content__btnArea">
                    <Rare5 onClick={nextPage} />
                    <Rare4 className='rareBtnMargin' onClick={nextPage} />
                    <Rare3 className='rareBtnMargin' onClick={nextPage} />
                    <Rare1 className='rareBtnMargin' onClick={nextPage} />
                    <RareRandom className='rareBtnMargin' onClick={nextPage} />
                </div>
            </div>
        </main>
    )
}

export default RareSelect;