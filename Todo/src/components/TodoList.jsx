import React from 'react'
import Todo from './Todo'

function TodoList({ todo, onRemoveTodo }) {
    return (
        <div style={{ width: '100%', marginTop: '50px' }}>

            {
                todo && todo.map((todo) =>
                (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
                ))
            }

        </div>
    )
}

export default TodoList
