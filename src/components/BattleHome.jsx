import { BattleTxt, SoloBattleBtn, MultiBattleBtn, MissionBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';


const BattleHome = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/genselect'
        })
    }


    return (
        <main className="battleHome">
            <div className='battleHome__content'>
                <div className='battleTxt'>
                    <BattleTxt />
                </div>
                <div className='battleBtns soloBattleBtn'>
                    <SoloBattleBtn onClick={nextPage} />
                </div>
                <div className='battleBtns multiBattleBtn'>
                    <MultiBattleBtn onClick={nextPage} />
                </div>
                <div className='battleBtns missionBtn'>
                    <MissionBtn onClick={nextPage} />
                </div>
            </div>
        </main>
    )
}

export default BattleHome;