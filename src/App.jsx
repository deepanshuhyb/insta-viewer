import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-16 bg-gradient-to-r from-red-500 to-blue-800 p-3.5 md:pl-28 pr-28 lg:pl-56 flex justify-between'>
      <div>
        <h1 className='text-white text-xl font-bold '>Insta Story</h1>
      </div>
      <div className='px-6'></div>
      <div className='text-white text-xl font-bold flex '>
        <a href=""><h1 className='px-8'>Home</h1></a>
        <a href=""><h1 className='px-8'>Contact</h1></a>
        <a href=""><h1 className='px-8'>API</h1></a>
      </div>
    </div>
    </>
  )
}

export default App