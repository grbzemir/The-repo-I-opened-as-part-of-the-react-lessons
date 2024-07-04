import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'

export default function TodoList(todo) {

    const { id, content } = todo;


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid lightgrey',
            padding: '10px',
            marginTop: '6px'
        }}>
            <div>
                {todo.content}
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />
                <FaEdit className='todo-icons' />
            </div>
        </div>
    )
}
