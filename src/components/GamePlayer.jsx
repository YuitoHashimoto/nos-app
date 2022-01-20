import { useEffect, useState, useLayoutEffect } from 'react';
import firebase from '../firebase'

const GamePlayer = (props) => {
    const [name, setName] = useState();
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        const nameRef = firebase.firestore().collection('users').doc(props.user.id);
        nameRef.get().then((doc) => {
            setName(doc.data().name)
        });
    },[])

    useEffect(() => {
        if (flag) {
            if (props.user.choice === true) {
                const playerBox = document.querySelector('.gamePlayers__player')
                const playerIcon = document.querySelector('.userSel')
                playerIcon.classList.add('userSelTrue');
                setFlag(false);
            } else if (props.user.choice === false) {
                const playerBox = document.querySelector('.gamePlayers__player')
                const playerIcon = document.querySelector('.userSel')
                playerBox.classList.add('userSelFalseBox');
                playerIcon.classList.add('userSelFalse');

            }
        }
    })

    return (
        <div className={`gamePlayers__player margin${props.user.id}`}>
            <div className='playerItem'></div>
            <div className='playerIcon'>
                <div className='playerIcon__chara'>
                    <div className={`userSel ${props.user.id}`}></div>
                </div>
                <div className='playerIcon__num'>
                    <p>1</p>
                </div>
            </div>
            <p className='playerName'>{name}</p>
        </div>

    )
}

export default GamePlayer;