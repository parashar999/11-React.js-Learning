import { useState } from 'react'
import './App.css'

function App() {
  let[count,setCounter] = useState(15)
  const addValue = () =>
    { 
      count++
      setCounter(count)
      console.log(counter)
    }
  const subtractValue = () => 
    {
      count--
      setCounter(count)
      console.log(counter)
    }

  return (
    <>
     <h1> Tarun Sharma </h1>
     <h2> Counter value : {count} </h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br/>
     <button onClick={subtractValue}>Remove Value</button>
    </>
  )
}

export default App
