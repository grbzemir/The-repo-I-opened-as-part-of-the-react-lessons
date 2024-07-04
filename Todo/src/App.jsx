import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {

  const [todo, setTodo] = useState([]);

  const createTodo = (newTodo) => {
    setTodo([...todo, newTodo])
  }

  const removeTodo = (todoId) => {

    setTodo([...todo.filter((todo) => todo.id !== todoId)]);


  }


  console.log(todo);

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todo={todo} onRemoveTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App
