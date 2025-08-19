import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Divyansh",
    age:"21"
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="react" btnText="click me"/>
      <Card username="React2" />
    </>
  )
}

export default App
