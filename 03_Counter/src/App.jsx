import { useState } from 'react'
import './App.css'

function App() {
  let[count,setCounter] = useState(15)
  const addValue = () =>
    { 
      setCounter(++count)
      setCounter(++count)
      /* This Will Work, setCounter is also a funciton */
      setCounter((c)=> ++c)
      setCounter((c)=>++c)
      // 

      console.log(counter)
    }
  const subtractValue = () => 
    {
      setCounter(count - 1)
      setCounter(count - 1)
      setCounter(count - 1)
      setCounter(count - 1 ) 
      {/* This will not work as expected because of useState react send request in batches therefor it will treat it as single request and duplicacy of operations */}
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
