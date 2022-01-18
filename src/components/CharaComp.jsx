import { SelectBtn, CancelBtn } from './icons/index'

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import firebase from '../firebase';


const CharaComp = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");

    useEffect( () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            const userRef = firebase.firestore().collection('users').doc(user.uid)
            userRef.get().then((doc) => {
                setUserName(doc.data().name)
            });
        });
    },[]);

    const nextPage = () => {
        navigate({
            pathname: '/home'
        })
    }

    const backPage = () => {
        navigate({
            pathname: '/name'
        })
    }

     return (
         <main className={'charaComp'}>
            <div className={'charaComp__box'}>
                <p className='charaComp__box__txt'>決定する?</p>
                <div className={'charaComp__box__chara'}>
                    <div className={'charaComp__box__chara__content'}>
                        <p>{userName}</p>
                    </div>
                </div>
            </div>
            <div className={'btnArea'}>
                <SelectBtn onClick={nextPage} />
                <CancelBtn onClick={backPage} />
            </div>
         </main>
     )
}

export default CharaComp;