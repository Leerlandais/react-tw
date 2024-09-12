import { useState, useEffect } from 'react';

function ToDoList2() {
    const [items, setItems] = useState(['']);
    const [newItem, setNewItem ] = useState('');
    const [error, setError ] = useState('');

    //Simuler la récupération de données avec useEffect
    useEffect(() => {
        setTimeout(() => {
            setItems(['Apprendre React', 'Apprendre Next', 'Apprendre Vue']);
        }, 5000);
    }, []);

    const addItem = () => {
        if (newItem.trim() === '') {
            setError("Vous ne pouvez pas ajouter une tâche vide");
            return;
        }
        setItems([...items, newItem]);
        setNewItem('');
        setError('');
    };
    const removeLastItem = () => {
        if (items.length > 0) {
            setItems(items.slice(0, items.length - 1));
        }
    };

    return (
        <div>
            <ul>
                {items.length < 2 ? <p>chargement des tâches</p> :
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button onClick={addItem}>Ajouter</button>
            <button onClick={removeLastItem}>Enlever</button>
        </div>
    );
}

export default ToDoList2