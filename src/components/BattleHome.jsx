import { BattleTxt, SoloBattleBtn, MultiBattleBtn, MissionBtn } from './icons/index'

const BattleHome = () => {
    return (
        <main className="battleHome">
            <div className='battleHome__content'>
                <div className='battleTxt'>
                    <BattleTxt />
                </div>
                <div className='battleBtns soloBattleBtn'>
                    <SoloBattleBtn />
                </div>
                <div className='battleBtns multiBattleBtn'>
                    <MultiBattleBtn />
                </div>
                <div className='battleBtns missionBtn'>
                    <MissionBtn />
                </div>
            </div>
        </main>
    )
}

export default BattleHome;