import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
if (counter > 19) {
  setCounter(counter = counter + 0);
} else {
  setCounter(counter++);
}
  }

  const removeValue = () =>{
    if (counter < 1) {
      setCounter(counter = counter + 0);
    } else {
      setCounter(counter--);
    }
      }

  return (
    <>
      <h1>First project</h1>
      <h2>counter value {counter}</h2>
      <button
      onClick={addValue}>Add value {counter}</button>
      <button
      onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
