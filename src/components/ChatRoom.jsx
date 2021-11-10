import { useLocation } from "react-router-dom";
import { ChatInput, ChatView } from './index'

const ChatRoom = (props) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    return (
        <>
            <h1>ルームID:{params.get('roomId')}</h1>
            <ChatView roomId={params.get('roomId')} />
            <ChatInput roomId={params.get('roomId')} />
        </>
    )
}

export default ChatRoom;