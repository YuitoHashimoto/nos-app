import { QuizTypeTitle, StartTxt } from './icons/index'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import firebase from '../firebase';

const QuizStart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            setTimeout(() => {
                // 入室したルームに応じたURLへ飛ばす
                navigate({
                    pathname: '/twochoice',
                    search: `?roomId=${params.get('roomId')}&round=${params.get('round')}&?uid=${user.uid}`
                })
            }, 3000);
        });
    },[])

    return (
        <main className='quizStart'>
            <div className='quizStart__content'>
                <QuizTypeTitle />
                <StartTxt />
            </div>
        </main>
    )
}

export default QuizStart;