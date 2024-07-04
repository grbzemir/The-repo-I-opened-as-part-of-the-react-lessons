import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'

function Todo({ todo, onRemoveTodo }) {

    const { id, content } = todo;

    const removeToDo = () => {

        onRemoveTodo(id);

    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid lightgrey',
            padding: '10px',
            marginTop: '10px'
        }}>
            <div>
                {todo.content}
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onclick={removeToDo} />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}


export default TodoList