import { SoloTitle, SoloTitleTxt, ReiwaBtn, HeiwaBtn, SyouwaBtn  } from './icons/index'
import { useNavigate } from 'react-router-dom';

const GenerationSelect = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/rareselect'
        })
    }

    return (
        <main className="genSelect">
            <div className='genSelect__content'>
                <div className='genSelect__content__titleArea'>
                    <SoloTitle />
                    <SoloTitleTxt className='soloTitleTxt' />
                </div>
                <div className='genSelect__content__btnArea'>
                    <ReiwaBtn onClick={nextPage} />
                    <HeiwaBtn className='heiwaBtn' onClick={nextPage} />
                    <SyouwaBtn className='syouwaBtn' onClick={nextPage} />
                </div>
            </div>
        </main>
    )
}

export default GenerationSelect;