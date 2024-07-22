import './App.css'
import Card from './Components/Card'

function App() {

  let myObj = {
     username: "Tarun",
    age:21
  }

  let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='text-black bg-green-400 p-4 rounded-xl' >Tarun Parashar </h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://imgs.search.brave.com/9s8BrZhj1bfnHCgQNPmIbiM-KBtvssgMNEzInsaV8RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY2L2Uy/LzFjLzY2ZTIxY2Mx/NmMxNzZjYmFkN2Jm/ZDI1YWM4NTgwZjcz/LmpwZw" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

  <Card Obj={myObj} Arr={myArr} bttn="click mes" />
    </>
  )
}

export default App
