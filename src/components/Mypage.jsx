import { PenIcon, ChangeSelect } from './icons/index'
import { HomeHead, HomeFoot } from './index'

const Mypage = () => {
    return (
        <main className='mypage'>
            <HomeHead />
            <div className='mypage__content'>
                <h1>マイページ</h1>
                <div className='mypage__content__stats'>
                    <div className='overlay'></div>
                    <h2>戦績</h2>
                    <div className='mypage__content__stats__box'>
                        <div className='victoryNum statsCircle'>
                            <p>0</p>
                            <h3>勝利数</h3>
                        </div>
                        <div className='loseNum statsCircle'>
                            <p>10</p>
                            <h3>敗北数</h3>
                        </div>
                        <div className='titleNum statsCircle'>
                            <p>2</p>
                            <h3>称号数</h3>
                        </div>
                        <div className='statsTxt'>
                            <p>対戦数 <span>10</span></p>
                            <p>最多連勝数 <span>0</span></p>
                            <p>正解率 <span>0%</span></p>
                        </div>
                    </div>
                </div>
                <div className='mypage__content__changeName'>
                    <label htmlFor="changeName">
                        <p>プレイヤー名変更</p>
                        <PenIcon className='penIcon'/>
                    </label>
                    <input type="text" id='changeName' value={"アホボケカス"}/>
                </div>
                <div className='mypage__content__changeIcon'>
                    <label htmlFor="changeIcon">
                        <p>アイコン画像変更</p>
                        <PenIcon className='penIcon'/>
                    </label>
                    <div className='changeIconView'></div>
                    <div className='changeSelect'>
                        <ChangeSelect className='changeSelectSvg'/>
                    </div>
                </div>
                <div className='mypage__content__changeTitle'>
                    <label htmlFor="changeTitle">
                        <p>称号の変更</p>
                        <PenIcon className='penIcon'/>
                    </label>
                    <input type="text" id='changeTitle' value={"世界一の剣豪"}/>
                    <div className='changeSelect'>
                        <ChangeSelect className='changeSelectSvg'/>
                    </div>
                </div>
                <div className='mypage__content__changeChara'>
                    <label htmlFor="changeChara">
                        <p>キャラクターの変更</p>
                        <PenIcon className='penIcon'/>
                    </label>
                    <div className='changeCharaView'></div>
                    <div className='changeSelect'>
                        <ChangeSelect className='changeSelectSvg'/>
                    </div>
                </div>
                <div className='mypage__content__changeProfile'>
                    <label htmlFor="changeProfile">
                        <p>プロフィール帳の変更</p>
                        <PenIcon className='penIcon'/>
                    </label>
                    <textarea id='changeProfile'>アホボケカスアホボケカスアホボケカスアホ
                    アホボケカスアホボケカスアホボケカスアホ
                    アホボケカスアホボケカスアホボケカス
                    </textarea>
                    <div className='changeSelect'>
                        <ChangeSelect className='changeSelectSvg'/>
                    </div>
                </div>
            </div>
            <HomeFoot />
        </main>
    )
}

export default Mypage;