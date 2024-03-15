import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)  
  // gives up a return  value as a array with first element being a variable for useState and second element being a function for useState which executes javaScript code when executed 

  //function to add value onclick
  const addValue = () =>{
    if (counter > 19) {
      setCounter(counter = counter + 0);
    } else {
      setCounter(counter++);
    }
  }
  
  //function to remove value onclick
  const removeValue = () =>{
    if (counter < 1) {
      setCounter(counter = counter - 0);
    } else {
      setCounter(counter--);
    }
      }
// return a html element for the page 
  return (
    <>
      <h1>First project</h1>
      <h2>counter value {counter}</h2>
      <button
      onClick={addValue}>Add value {counter}</button> 
       {/* {varname} can help to use variables and functions when needed */}
      <button
      onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
