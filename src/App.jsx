import { useState } from 'react';
import burgerIcon from './assets/burger-bar.png';
function App() {
  const [togglemenu, settoggal] = useState(false);
  const tap = (()=>{
    settoggal(!togglemenu);
  })


  
  return (
    <>
      <div className='h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center justify-between px-16 w-screen'>
        
          <div className='font-bold text-2xl px-16'>
            Instory
          </div>
          <div className='md:hidden' onClick={tap}>
            <img src={burgerIcon} alt="Menu Icon" className="w-6 h-6" />
          </div>

          <ul className={`flex md:flex ${togglemenu ? 'block' : 'hidden'} md:block`}>
            <li className='px-4'><a href="#">Home</a></li>
            <li className='px-4'><a href="#">Api</a></li>
            <li className='px-4'><a href="#">Contact</a></li>
            <li className='px-4'><a href="#">About</a></li>
          </ul>
        </div>

        <div className='h-screen bg-gradient-to-r from-violet-500 to-pink-700'>
            
        </div>

      
    </>
  );
}

export default App;

