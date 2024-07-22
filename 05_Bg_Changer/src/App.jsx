import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
        <div className="w-[100vw] h-[100vh] duration-200" style={{backgroundColor: color}}  >

          <div className='fixed flex justify-center bottom-12 inset-x-0 px-2' > 
            
          <div className="relative w-full bg-white">
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          onClick={()=>setColor("red")} > 
    
            Red
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            onClick={()=> {setColor("Blue") , console.log(color)}} >
            Blue
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
            onClick={()=>setColor("orange")}>
            Orange
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

          </div>

    </>
  )
}

export default App
