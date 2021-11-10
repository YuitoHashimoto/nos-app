import { ChatCreate,ChatList } from "./index";

const Chats = () => {
    return (
        <>
            <h1>チャット</h1>
            <ChatCreate />
            <ChatList />
        </>
    )
}

export default Chats;