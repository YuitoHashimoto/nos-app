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
            </div>
            <HomeFoot />
        </main>
    )
}

export default Mypage;