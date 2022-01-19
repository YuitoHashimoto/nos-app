import { QuizTypeTitle, BlackStarIcon, StarIcon } from './icons/index'
import { UserBox } from './index'
import firebase from '../firebase'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const MatchingView = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState();
    const [userName, setUserName] = useState();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // 初回処理
    useEffect( () => {
        const userRef = firebase.database().ref("Rooms").child(params.get('roomId'))
        userRef.on('value', (snapshot) => {
            const users = snapshot.val()
            const userList = []
            const userNames = []
            const promised = []
            users.users.forEach(val => {
                userList.push(val)
            });
            userList.forEach(val => {
                promised.push(
                    new Promise ((resolve) => {
                        const nameRef = firebase.firestore().collection('users').doc(val);
                        nameRef.get().then((doc) => {
                            userNames.push(doc.data().name)
                            resolve()
                        });
                    })
                )
            })

            Promise.all(promised)
            .then(() => {
                setUserName(userNames);
            })
            setUserList(userList)
        })
    },[]);

    useEffect(() => {
        const userCount = userName;
        if ( userCount ) {
            if ( userCount.length === 3 ) {
                setTimeout(() => {
                    // 入室したルームに応じたURLへ飛ばす
                    navigate({
                        pathname: '/quizstart',
                        search: `?roomId=${params.get('roomId')}`
                    })

                }, 3000);
            }
        }
    })

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
                        {userName ? userName.map((user, index) => (< UserBox user={user} key={index} />)) : ""}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MatchingView;