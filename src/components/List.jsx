
import { useState, useEffect } from 'react';
import Button from "./Button";
function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("todo")) {
            const storedTodo = localStorage.getItem(key);
            try {
                const todo = JSON.parse(storedTodo);
                const id = parseInt(key.replace("todo", ""), 10);
                if (todo && todo.text !== undefined) {
                    initialTodos.push({ id, text: todo.text });
                }
            } catch (e) {
                console.error("Error parsing todo from localStorage:", e);
            }
        }
    }
        return initialTodos.sort((a, b) => a.id - b.id);
}

function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos);
    const [text, setText] = useState('');

    function handleRem(id) {
        setTodos(todos.filter(item => item.id !== id));
        localStorage.removeItem("todo" + id);
    }

    useEffect(() => {
        if (text) {
            const nextId = todos.length > 0 ? todos[0].id + 1 : 0;
            localStorage.setItem("todo" + nextId, JSON.stringify({ text }));
        }
    }, [text]);

    return (
        <div className="text-center pt-12">
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button btnName="Add" onClick={() => {
                setText('');
                setTodos([{ id: todos.length, text }, ...todos]);
            }}></ Button>
            <ul>
                {todos.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <Button btnName="Remove" onClick={() => handleRem(item.id)}></Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
