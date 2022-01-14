import { TwoChoiceTitle, TimeIcon, AnswerBtn } from './icons/index'

const TwoChoice = () => {
    return (
        <main className='twoChoice'>
            <div className='twoChoice__content'>
                <div className='twoChoice__content__titleArea'>
                    <TwoChoiceTitle />
                    <p>第1問</p>
                </div>
                <div className='twoChoice__content__quizTxt'>
                    <p>何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している？</p>
                </div>
                <div className="twoChoice__content__quizChoice">
                    <div className='true trueSel'></div>
                    <div className='false'></div>
                </div>
                <div className='timeBar'>
                    <TimeIcon className='timeIcon' />
                    <div className='timeBar__box'>
                        <div className='timeBar__box__num'></div>
                    </div>
                    <p className='timeBar__txt'>12秒</p>
                </div>
                <AnswerBtn className='answerBtn' />
                <div className='gamePlayers'>
                    <div className='gamePlayers__player'>
                        <div className='playerItem'></div>
                        <div className='playerIcon'>
                            <div className='playerIcon__chara'>
                                <div className='userSel'></div>
                            </div>
                            <div className='playerIcon__num'>
                                <p>1</p>
                            </div>
                        </div>
                        <p className='playerName'>おなまえ</p>
                    </div>
                    <div className='gamePlayers__player'>
                        <div className='playerItem'></div>
                        <div className='playerIcon'>
                            <div className='playerIcon__chara'>
                                <div className='userSel'></div>
                            </div>
                            <div className='playerIcon__num'>
                                <p>2</p>
                            </div>
                        </div>
                        <p className='playerName'>おなまえ</p>
                    </div>
                    <div className='gamePlayers__player'>
                        <div className='playerItem'></div>
                        <div className='playerIcon'>
                            <div className='playerIcon__chara'>
                                <div className='userSel'></div>
                            </div>
                            <div className='playerIcon__num'>
                                <p>3</p>
                            </div>
                        </div>
                        <p className='playerName'>おなまえ</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TwoChoice;