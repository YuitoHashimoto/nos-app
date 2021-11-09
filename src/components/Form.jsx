import { useState } from "react";
import firebase from '../firebase';

const Form = () => {
    const [title, setTitle] = useState('')

    const handleChange = (e)=> {
        setTitle(e.target.value)
    }
    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        console.log(todoRef);
        const todo = {
            title,
            complete: false
        }
        todoRef.push(todo)
    }
    return (
        <>
            <input type="text" onChange={handleChange} value={title}/>
            <button onClick={createTodo}>Add</button>
        </>
    )
}

export default Form; 