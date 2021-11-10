import { useState } from "react";
import firebase from '../firebase'

const ChatCreate = () => {
    const [roomName, setroomName] = useState("");

    const nameChange = (e) => {
        setroomName(e.target.value)
    }

    const createRoom = () => {
        const roomRef = firebase.database().ref("Chats")
        const room = {
            roomName,
            users: ["test","yuito"]
        }
        roomRef.push(room)
    }

    return (
        <>
            <input type="text" onChange={nameChange} value={roomName} />
            <button onClick={createRoom}>チャットルーム作成</button>
        </>
    )
}

export default ChatCreate;