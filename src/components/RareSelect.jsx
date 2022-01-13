import { RareSelTxt, Rare5, Rare4, Rare3, Rare1, RareRandom  } from './icons/index'


const RareSelect = () => {
    return (
        <main className="rareSelect">
            <div className="rareSelect__content">
                <div className="rareSelect__content__titleArea">
                    <RareSelTxt className='rareSelTxt' />
                </div>
                <div className="rareSelect__content__btnArea">
                    <Rare5 />
                    <Rare4 className='rareBtnMargin' />
                    <Rare3 className='rareBtnMargin' />
                    <Rare1 className='rareBtnMargin' />
                    <RareRandom className='rareBtnMargin' />
                </div>
            </div>
        </main>
    )
}

export default RareSelect;