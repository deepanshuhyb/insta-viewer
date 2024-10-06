import { useState, useEffect, useCallback } from 'react';
import burgerIcon from './assets/burger-bar.png';
import searchBtn from './assets/search-btn.svg';
import { getURL } from './api';
function App() {
  const [togglemenu, settoggal] = useState(false);
  const [name, setName] = useState('');
  const [pfp, setPfp] = useState("");

  
  const tap = (()=>{
    settoggal(!togglemenu);
  })


  const userInput = (e)=>{
    // e.preventDefault();
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
    setName('');
    try {
      const response = await fetch(getURL(name), options);
      const results = await response.json();
      console.log(results);
      setPfp(results.stories.result[0].video_versions[0].url);
      // setPfp(res)
      console.log(pfp);
    } catch (error) {
      console.error(error);
    } 
  } 
  
const showStories = () =>{
  
}

  function createDiv() {
  }

  
  return (
    <>
        <div className={`h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between md:px-16 w-screen max-w-full ${togglemenu ? 'px-1' : 'px-16'}`}>
         <div className={`font-bold text-2xl md:px-16 ${togglemenu ? 'px-0' : 'px-2'}`}>
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
                  <label htmlFor=""><p className='flex justify-center font-sans-serif antialiased text-black md:text-2xl py-2'>Enter UserName:</p>
                    <div className='rounded-full md:h-12 md:w-96 bg-white flex items-center justify-center w-48'>
                      <input className=' h-8 md:w-80 outline-none w-32' type="text" name="" id="" value={name} onChange={function demo(e){
                        return userInput(e);
                      }} />
                  <button type="submit" onSubmit={Fetchdata} ><img src={searchBtn} alt="" className='md:h-8 h-6' onClick={Fetchdata}/></button>
                    </div>
                  </label>
                </form>
            </div>
          <div id='resultArea' className='flex flex-col items-center pt-16'>
            
              <h1 className=''>Stories</h1>
                <div className='py-6 '>
                  <video src={`${pfp}`} className='w-60 h-fit md:w-90' controls>

                  </video>
                </div>

          </div>
        </div>
    </>
  );
}

export default App;