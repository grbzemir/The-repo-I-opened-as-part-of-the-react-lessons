import { useState } from 'react'

import './App.css'
import Login from './Login'
import { users } from './Login'
import Hello from './Hello'

function App() {

  console.log(users)

  return (

    <div>

      {/* <Login /> */}
      <Hello />

    </div>

  )
}

export default App
