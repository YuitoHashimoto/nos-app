import { QuizTypeTitle, BlackStarIcon, StarIcon } from './icons/index'


const MatchingView = () => {
    return (
        <main className='matchingView'>
            <div className='matchingView__content'>
                <div className='matchingView__content__titleArea'>
                    <QuizTypeTitle className='quizTypeTitle' />
                    <div className='itemRank'>
                        <p className='itemRank__txt'>アイテムランク</p>
                        <div className='itemRank__rank'>
                            <BlackStarIcon />
                            <p>5のみ</p>
                        </div>
                    </div>
                    <p className='matchingTxt'>対戦相手を待機中・・・</p>
                </div>
                <div className='matchingView__content__playersArea'>
                    <p className='playerNum'>3/3</p>
                    <div className='matchingView__content__playersArea__box'>
                        <div className='player'>
                            <div className='overlayBack'></div>
                            <div className='player__chara'></div>
                            <div className='player__stats'>
                                <p className='player__stats__name'>ヤマハ音楽教室</p>
                                <div className='player__stats__item'>
                                    <div className='itemIcon'></div>
                                    <div className='itemTxt'>
                                        <div className='itemTxt__rank'>
                                            <StarIcon />
                                            <p>5</p>
                                        </div>
                                        <p className='itemTxt__itemName'>ラムネ棒</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='player'>
                            <div className='overlayBack'></div>
                            <div className='player__chara'></div>
                            <div className='player__stats'>
                                <p className='player__stats__name'>ヤマハ音楽教室</p>
                                <div className='player__stats__item'>
                                    <div className='itemIcon'></div>
                                    <div className='itemTxt'>
                                        <div className='itemTxt__rank'>
                                            <StarIcon />
                                            <p>5</p>
                                        </div>
                                        <p className='itemTxt__itemName'>ラムネ棒</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='player'>
                            <div className='overlayBack'></div>
                            <div className='player__chara'></div>
                            <div className='player__stats'>
                                <p className='player__stats__name'>ヤマハ音楽教室</p>
                                <div className='player__stats__item'>
                                    <div className='itemIcon'></div>
                                    <div className='itemTxt'>
                                        <div className='itemTxt__rank'>
                                            <StarIcon />
                                            <p>5</p>
                                        </div>
                                        <p className='itemTxt__itemName'>ラムネ棒</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MatchingView;