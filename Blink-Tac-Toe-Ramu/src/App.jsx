import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-2xl text-red-500 text-bold">
      Blink Tac Toe 
    </h1>
  )
}

export default App
