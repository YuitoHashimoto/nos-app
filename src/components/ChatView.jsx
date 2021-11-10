import { useState, useEffect } from 'react';
import firebase from '../firebase'
import { ChatContent } from './index';

const ChatView = (props) => {
    const [chatList, setChatList] = useState();
    const roomId = props.roomId;

    useEffect(() => {
        const chatsRef = firebase.database().ref('Chats').child(roomId)
        chatsRef.on('value', (snapshot) => {
            const chats = snapshot.val()
            const chatList = []
            for (let id in chats) {
                chatList.push(chats[id])
            }
            setChatList(chatList)
        })

    }, [roomId])

    return (
        <>
            {chatList ? chatList.map((chat, index) => (< ChatContent chat={chat} key={index} />)) : ""}
        </>
    )
}

export default ChatView;