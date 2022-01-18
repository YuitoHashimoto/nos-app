import { ItemSelTitle, ItemSelTxt, StarIcon, SelectBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase'
import { useEffect, useState } from 'react';

const ItemSelect = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState("");
    const [roomList, setRoomList] = useState();

    useEffect( () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            const userRef = firebase.firestore().collection('users').doc(user.uid)
            setUid(user.uid)

            const roomRef = firebase.database().ref("Rooms");
            roomRef.on("value", (snapshot) => {
                const rooms = snapshot.val()
                const roomList = [];
                for (let id in rooms) {
                    roomList.push({id, ...rooms[id]})
                };
                setRoomList(roomList)
            })

        });
    },[]);

    const nextPage = () => {
        roomList.forEach(val => {
            if ( val.users.length < 3 ) {
                const joinRef = firebase.database().ref("Rooms").child(val.id);
                val.users.push(uid);
                joinRef.set(val);

                navigate({
                    pathname: '/matching',
                    search: `?roomId=${val.id}`
                })
            }
        });
    }


    return ( 
        <main className="itemSelect">
            <div className="itemSelect__content">
                <div className="itemSelect__content__titleArea">
                    <ItemSelTitle />
                    <ItemSelTxt className='itemSelTxt' />
                </div>
                <div className="itemSelect__content__selectArea">
                    <div className='backOverlay'></div>
                    <div className='selectBox'>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                        <div className='selectBox__content'>
                            <div className='selectBox__content__img'></div>
                            <div className='selectBox__content__txt'>
                                <div className='selectBox__content__txt__rareTxt'>
                                    <StarIcon />
                                    <p>5</p>
                                </div>
                                <p className='selectBox__content__txt__itemTxt'>チェキ</p>
                            </div>
                        </div>
                    </div>
                    <SelectBtn className='selectBtn' onClick={nextPage} />
                </div>
            </div>
        </main>
    )
}

export default ItemSelect;