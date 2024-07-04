import React from 'react'
import '../App.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }


    const createTodo = () => {

        if (!newTodo) return;

        const request =
        {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo,
        }

        onCreateTodo(request);
        clearInput();

    }
    return (
        <div className='todo-create'>
            <input onChange={(e) => setNewTodo(e.target.value)} className='todo-input' placeholder="Enter a todo" />
            <button value={newTodo} onClick={createTodo} className='todo-create-button'>Todo Create</button>

        </div>
    )
}

export default TodoCreate
