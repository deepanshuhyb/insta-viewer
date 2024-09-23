import { useState } from 'react';
import burgerIcon from './assets/burger-bar.png';
import searchBtn from './assets/search-btn.svg';
import { getURL } from './api';
function App() {
  const [togglemenu, settoggal] = useState(false);
  const tap = (()=>{
    settoggal(!togglemenu);
  })
  const [name, setName] = useState('');
  const userInput = (e)=>{
    setName(e.target.value);
    // console.log(name);
  }
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8033dbe000msheb96a535a1c94b8p1103afjsn84f5ad2a2730',
		'x-rapidapi-host': 'instagram-viewer.p.rapidapi.com'
	}
};

const Fetchdata = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(getURL(name), options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  } 
}
  
  return (
    <>
        <div className={`h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between md:px-16 w-screen max-w-full ${togglemenu ? 'px-1' : 'px-16'}`}>
         <div className={`font-bold text-2xl px-16 ${togglemenu ? 'px-0' : 'px-2'}`}>
            Instory
          </div>
          <div className='md:hidden' onClick={tap}>
            <img src={burgerIcon} alt="Menu Icon" className="w-6 h-6" />
          </div>
          <ul className={`flex md:flex ${togglemenu ? 'block' : 'hidden'} md:block`}>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}><a href="#">Home</a></li>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}><a href="#">Api</a></li>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}><a href="#">Contact</a></li>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}><a href="#">About</a></li>
          </ul>
        </div>
        <div className='flex flex-col h-dvh bg-gradient-to-r from-violet-500 to-pink-700'>
            <div className='flex justify-center'>
                <form>
                  <label htmlFor=""><p className='flex justify-center font-sans-serif antialiased text-black text-2xl py-2 '>Enter UserName:</p>
                    <div className='rounded-full h-12 md:w-96 bg-white flex items-center justify-center w-48'>
                      <input className=' h-8 md:w-80 outline-none w-32' type="text" name="" id="" value={name} onChange={function demo(e){
                        return userInput(e);
                      }} />
                  <button type="submit" ><img src={searchBtn} alt="" className='h-8' onClick={Fetchdata}/></button>
                  
                    </div>
                  </label>
                </form>
            </div>
          <div id='resultArea' className='flex justify-around pt-16'>
            <button type="button" className=''>Stories</button>
              <div>
                      
              </div>
            <button type="button" className=''>Profile Picture</button>

          </div>
        </div>
    </>
  );
}

export default App;