import { TwoChoiceTitle, TimeIcon, AnswerBtn } from './icons/index'
import { GamePlayer } from './index'
import { useEffect, useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import firebase from '../firebase'


const TwoChoice = () => {
    const navigate = useNavigate();

    // ステート管理
    const [trueBtn, setTrueBtn] = useState(false);
    const [falseBtn, setFalseBtn] = useState(false);
    const [users, setUsers] = useState();
    const [time, setTime] = useState(false);
    const [userSel, setUserSel] = useState();
    const [choice, setChoice] = useState();
    const [timeTxt, setTimeTxt] = useState(30)
    const [flag, setFlag] = useState(false)
    const [round, setRound] = useState(0);
    const [ansLength, setAnsLength] = useState();
    const [answerData, setAnswerData] = useState([
        {
            choice: true,
            content: 0
        },
        {
            choice: false,
            content: 1
        },
    ])
    const [quizData, setQuizData] = useState({
        "id": 1,
        "type": "twoChoice",
        "text": "タあああ",
        "answers": [
            {"content": 0, "choice": true},
            {"content": 1, "choice": false}
        ]
    })
    const [roomData, setRoomData] = useState({
        id: "dada",
        round: 1,
        user: ["",  "",  ""]
    })
    const [nowText, setNowText] = useState("");

    // URL関連
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // 初期問題データ+ルームデータ所得
    useLayoutEffect(() => {
        const promisedF = []
        promisedF.push(
            new Promise((resolve) => {
                const userRef = firebase.database().ref("Rooms").child(params.get('roomId')).child("users")
                userRef.on("value", (snapshot) => {
                    let users = []
                    snapshot.val().forEach(val => {
                        let userData = {
                            id: "",
                            choice: "null"
                        }
                        userData.id = val;
                        users.push(userData)
                    });
                    setUsers(users);

                    const answerRef = firebase.database().ref("Rooms").child(params.get('roomId')).child("answers")
                    answerRef.on("value", (snapshot) => {
                        const ansLength = snapshot.val()
                        setAnsLength(ansLength)
                        const newData = []
                        if (ansLength.length === 3) {
                            ansLength.forEach(val => {
                                console.log(val.user);
                                users.forEach(uidVal => {
                                    let newDataO = uidVal
                                    if (val.user === uidVal.id) {
                                        console.log(`${val.user} + ${uidVal.id}`);  
                                        if (val.choice) {
                                            newData.choice = true
                                        } else {
                                            newData.choice = false
                                        }
                                        newData.push(newDataO);
                                    }
                                })
                                
                                console.log("success");
                            });
                            setUsers(newData);
                        }
                        resolve();
                    })
                })
            })
        )
        Promise.all(promisedF)
        .then(() => {
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
                    setAnswerData(snapshot.val()[round-1].answers)
                    setRound(round+1)
                })
                if ( round === 3 ) {
                    navigate({
                        pathname: '/answer',
                        search: `?roomId=${params.get('roomId')}`
                    })
                }
                timer();
            })
        })
    },[])

    const styleFunc = () => {
        
    }

    // ラウンドをカウントする
    const countFunc = () => {
        const roundRef = firebase.database().ref("Rooms").child(params.get('roomId')).child("round")
        roundRef.set(round);
    }

    // タイマー処理
    const timer = () => {
        let time = 30;
        const timeBar = document.getElementById('timeBar');
        const interval = setInterval(() => {
            time -=1;
            setTimeTxt(time);
            timeBar.style.width = "4%"
            if (time === 0) {;
                clearInterval(interval);
                setTime(true);
            }
        }, 1000);
    }

    // タイマー終了後答え合わせ
    useEffect(() => {
        answerData.forEach(val => {
            console.log(userSel);
            if (userSel === val.content) {
                setChoice(val.choice)
                setFlag(true);
            }
        });
    },[time])

    // 答え送信
    useEffect(() => {
        if ( flag ) {
            countFunc()
            choiceFunc()
        }
    },[flag])

    const choiceFunc = () => {
        const promised = [];
        let uid = ""
        promised.push(
            new Promise ((resolve)=>{
                firebase.auth().onAuthStateChanged(async (user) => {
                    uid = user.uid
                    let answerNum = null;
                    const answerRef = firebase.database().ref("Rooms").child(params.get('roomId')).child('answers')
                    answerRef.on("value", (snapshot) => {
                        console.log(snapshot.val());
                        const newData =  {
                                user: `${user.uid}`,
                                choice: choice
                            }
                        answerNum = snapshot.val();
                        answerNum.push(newData)
                    })
                    answerRef.set(answerNum)
                    resolve()
                })
            })
        )
        Promise.all(promised)
        .then(() => {
            console.log("test");
            window.location.reload();
        })
    }

    // マルボタン
    const trueBtnFunc = (e) => {
        if ( !trueBtn ) {
            const truebtn = document.querySelector('.true');
            const falsebtn = document.querySelector('.false');
            falsebtn.classList.remove("falseSel")
            truebtn.classList.add("trueSel");
            setTrueBtn(true);
            setFalseBtn(false);
            setUserSel(0);
        }
    }

    // バツボタン
    const falseBtnFunc = (e) => {
        if ( !falseBtn ) {
            const falsebtn = document.querySelector('.false');
            const truebtn = document.querySelector('.true');
            falsebtn.classList.add("falseSel")
            truebtn.classList.remove("trueSel");
            setFalseBtn(true);
            setTrueBtn(false);
            setUserSel(1);
        }
    }

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
                    <div className='true' onClick={trueBtnFunc}></div>
                    <div className='false' onClick={falseBtnFunc}></div>
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
                    {users ? users.map((user, index) => (< GamePlayer user={user} key={index} />)) : ""}
                </div>
            </div>
        </main>
    )
}

export default TwoChoice;