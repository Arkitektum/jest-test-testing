import { useEffect, useState } from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => setTodos(json));
    }, []);

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.completed}</p>
                </div>
            ))}
        </>
    );
}

export default ToDoList;
