import { ItemSelTitle, ItemSelTxt, StarIcon, SelectBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase'
import { useEffect, useState } from 'react';

const ItemSelect = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState("");
    const [roomList, setRoomList] = useState();
    const [flag, setFlag] = useState(false);
    useEffect( () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            // ログインしているユーザーのIDを取得
            const userRef = firebase.firestore().collection('users').doc(user.uid)
            setUid(user.uid)

            // 待機ルームを一覧を取得
            const roomRef = firebase.database().ref("Rooms");
            roomRef.on("value", (snapshot) => {
                const rooms = snapshot.val()
                const roomList = [];
                for (let id in rooms) {
                    roomList.push({id, ...rooms[id]})
                };
                setRoomList(roomList)
                roomList.forEach(val => {
                    if ( !val.users ) {
                        setFlag(false);
                    } else {
                        setFlag(true);
                    }
                });
            })

        });
    },[]);

    const nextPage = () => {
        // 入室
        roomList.forEach(val => {
            if ( flag ) {
                if(val.users.length < 4 ) {
                    console.log("app");
                    const joinRef = firebase.database().ref("Rooms").child(val.id);
                    val.users.push(uid);
                    joinRef.set(val);
    
                    // 入室したルームに応じたURLへ飛ばす
                    navigate({
                        pathname: '/matching',
                        search: `?roomId=${val.id}`
                    })
                }
            } else {
                console.log("null");
                const joinRef = firebase.database().ref("Rooms").child(val.id);
                val.users = [uid];
                joinRef.set(val);

                // 入室したルームに応じたURLへ飛ばす
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