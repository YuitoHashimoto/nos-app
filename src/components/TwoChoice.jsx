import { TwoChoiceTitle, TimeIcon, AnswerBtn } from './icons/index'
import QuizData from '../QuizData.json'
import { useEffect, useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import firebase from '../firebase'


const TwoChoice = () => {
    // ステート管理
    const [quizData, setQuizData] = useState({
        "id": 1,
        "type": "twoChoice",
        "text": "タピオカティーが初めて流行ったのは、1990年代である。",
        "answers": [
            {"content": 0, "choice": true},
            {"content": 1, "choice": false}
        ]
    })
    const [roomData, setRoomData] = useState({
        id: "dada",
        round: 1,
        user: ["", "", ""]
    })
    const [nowText, setNowText] = useState("");
    const [timeTxt, setTimeTxt] = useState(30)

    // URL関連
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // 初期問題データ+ルームデータ所得
    useLayoutEffect(() => {
        const promised = [];
        let round = 0;
        promised.push(
            new Promise((resolve) => {
                const roomRef = firebase.database().ref("Rooms").child(params.get('roomId'));
                roomRef.on("value", (snapshot) => {
                    setRoomData(snapshot.val());
                    round = snapshot.val().round;
                    resolve();
                })
            })
        )
        Promise.all(promised)
        .then(() => {
            const quizRef = firebase.database().ref("QuizData").child("quiz")
            quizRef.on("value", (snapshot) => {
                setQuizData(snapshot.val()[round-1]);
            })
            timer();
        })
    },[])

    const timer = () => {
        let time = 30;
        const timeBar = document.getElementById('timeBar');

        const interval = setInterval(() => {
            time -=1;
            setTimeTxt(time);
            timeBar.style.width = "4%"
            if (time === 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    console.log(roomData);
    console.log(quizData);

    return (
        <main className='twoChoice'>
            <div className='twoChoice__content'>
                <div className='twoChoice__content__titleArea'>
                    <TwoChoiceTitle />
                    <p>第{roomData.round}問</p>
                </div>
                <div className='twoChoice__content__quizTxt'>
                    <p>{quizData.text}</p>
                </div>
                <div className="twoChoice__content__quizChoice">
                    <div className='true trueSel'></div>
                    <div className='false'></div>
                </div>
                <div className='timeBar'>
                    <TimeIcon className='timeIcon' />
                    <div className='timeBar__box'>
                        <div className='timeBar__box__num' id='timeBar'></div>
                    </div>
                    <p className='timeBar__txt'>{timeTxt}秒</p>
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