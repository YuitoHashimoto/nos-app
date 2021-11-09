import firebase from '../firebase'

const TodoContent = (props) => {
    const deleateTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(props.todo.id)
        todoRef.remove()
    }
    const completeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(props.todo.id)
        todoRef.update({
            complete: !props.todo.complete
        })
    }

    return (
        <>
            <h2>{props.todo.title}</h2>
            <button onClick={deleateTodo}>削除</button>
            <button onClick={completeTodo}>完了</button>
        </>
    )
}

export default TodoContent;