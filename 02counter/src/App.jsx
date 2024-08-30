import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)
  //let counter=5

  const addValue= () => {
    setCounter(counter+1)
  }

  
  const subValue= () => {
    setCounter(counter-1)
  }

  return (
    <>
     <h1>React Tutorial</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={subValue}>Subtract value</button>
    </>
  )
}

export default App
