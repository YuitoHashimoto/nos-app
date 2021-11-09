import { useEffect, useState } from 'react';
import firebase from '../firebase';
import { TodoContent } from './index';


const TodoList = () => {
    const [todoList, setTodoList] = useState();

    useEffect(() => {
        const todoRef = firebase.database().ref("Todo");
        todoRef.on("value", (snapshot) => {
            const todos = snapshot.val()
            const todoList = [];
            for (let id in todos) {
                todoList.push({id, ...todos[id]})
            }
            setTodoList(todoList)
        })
    }, [])

    return (
        <>
            {todoList ? todoList.map((todo, index) => (<TodoContent todo={todo} key={index} />)) : ""} 
        </>
    )
}

export default TodoList;