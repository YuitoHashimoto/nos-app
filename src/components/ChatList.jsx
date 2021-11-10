import { useState, useEffect } from "react";
import firebase from '../firebase';
import { RoomContent } from './index';

const ChatList = () => {
    const [roomList, setRoomList] = useState();

    useEffect(() => {
        const chatsRef = firebase.database().ref('Chats')
        chatsRef.on('value', (snapshot) => {
            const chats = snapshot.val()
            const roomList = []
            for (let id in chats) {
                roomList.push({id, ...chats[id]})
            }
            setRoomList(roomList)
        })
    }, [])

    return (
        <>
            {roomList ? roomList.map((room, index) => (< RoomContent room={room} key={index} />)) : ""}
        </>
    )
}

export default ChatList;