import { useState } from "react";
import firebase from '../firebase'

const ChatInput = (props) => {
    const [chat, setChat] = useState("");

    const chatSub = (e) => {
        setChat(e.target.value)
    }

    const createRoom = () => {
        const roomRef = firebase.database().ref("Chats").child(props.roomId)
        const chatData = {
            content: chat,
            user: "test"
        }
        roomRef.push(chatData)
    }

    return (
        <>
            <input type="text" onChange={chatSub} value={chat} />
            <button onClick={createRoom}>送信</button>
        </>
    )
}

export default ChatInput;