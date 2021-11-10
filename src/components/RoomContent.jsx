import { useNavigate } from 'react-router-dom';

const RoomContent = (props) => {
    const navigate = useNavigate();

    const nextChatRoom = () => {
        navigate({
            pathname: '/chatroom',
            search: `?roomId=${props.room.id}`
        })
    }

    return (
        <>
            <h2>{props.room.roomName}</h2>
                <button onClick={nextChatRoom}>入室</button>
        </>
    )
}

export default RoomContent;