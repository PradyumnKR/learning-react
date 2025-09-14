import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]= useState(5)

  //let counter = 5
  const addValue = () =>{
    //counter = counter+1
    if(counter<20){
      setCounter(counter+1)
    }
    
  }
  const removeValue = () =>{
    //ounter = counter-1
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>First React App</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value (+) </button>
      <br />
      <button onClick={removeValue}>Remove Value (-) </button>

      
   </>
  )
}

export default App
