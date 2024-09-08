import { useState, useEffect } from "react";
import Button from "../components/Button";

function Todo() {
    const [todos, setTodos] = useState(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        return storedTodos || [];
    });

    const [task, setTask] = useState('');

    useEffect(() => {
        if (todos.length > 0 || localStorage.getItem('todos')) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <>
            <div className="text-center pt-48 pb-8">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button btnName="Add" bgColor="bg-blue-500" onClick={handleAddTodo} />
            </div>
            <div>
            <ul className="text-center text-4xl pb-4">
                {todos.map((todo, index) => (
                    <div className="mx-auto flex justify-center items-center">
                    <li className="flex justify-around w-auto" key={index}>
                        {todo}
                    </li>
                    <Button btnName="X" bgColor="bg-red-400" onClick={() => handleRemoveTodo(index)} />
                    </div>
                ))}
            </ul>
            </div>
        </>
    );
}

export default Todo;
