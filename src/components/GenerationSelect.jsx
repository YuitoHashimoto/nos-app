import { SoloTitle, SoloTitleTxt, ReiwaBtn, HeiwaBtn, SyouwaBtn  } from './icons/index'


const GenerationSelect = () => {
    return (
        <main className="genSelect">
            <div className='genSelect__content'>
                <div className='genSelect__content__titleArea'>
                    <SoloTitle />
                    <SoloTitleTxt className='soloTitleTxt' />
                </div>
                <div className='genSelect__content__btnArea'>
                    <ReiwaBtn />
                    <HeiwaBtn className='heiwaBtn' />
                    <SyouwaBtn className='syouwaBtn' />
                </div>
            </div>
        </main>
    )
}

export default GenerationSelect;