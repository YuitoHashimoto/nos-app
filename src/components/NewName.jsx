import { SelectBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';

import { useState } from "react";
import firebase from '../firebase'

const NewName = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")

    const nameSub = (e) => {
        setUserName(e.target.value)
    }

    const nextPage = () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            const userRef = firebase.firestore().collection('users').doc(user.uid)
            await userRef.set({
                name: userName
            })
        });
        navigate({
            pathname: '/charaselect'
        })
    }

    return (
        <main className={'newName'}>
            <div className={'newName__box'}>
                <p className={'newName__box__txt'}>ゲームで使用する<br />名前を決めよう</p>
                <input onChange={nameSub} type="text" className={'newName__box__input'} placeholder="名前を入力(8文字まで)" maxLength="8"/>
            </div>
            <div className={'btnArea'}>
                <SelectBtn onClick={nextPage} />
            </div>
        </main>
    )
}

export default NewName;