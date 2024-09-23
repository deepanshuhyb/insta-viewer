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
  const apiCall = (()=>{

  })
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
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  } 
}
  
  return (
    <>
      <div className='h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between px-16 w-screen max-w-full'>
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
        <div className='flex flex-col h-dvh bg-gradient-to-r from-violet-500 to-pink-700'>
            <div className='flex justify-center'>
                <form>
                  <label htmlFor=""><p className='flex justify-center font-sans-serif antialiased text-black text-2xl py-2 '>Enter UserName:</p>
                    <div className='rounded-full h-12 w-96 bg-white flex items-center justify-center'>
                      <input className=' h-8 w-80 outline-none' type="text" name="" id="" value={name} onChange={function demo(e){
                        return userInput(e);
                      }} />
                  <button type="submit" ><img src={searchBtn} alt="" className='h-8' onClick={Fetchdata}/></button>
                  
                    </div>
                  </label>
                </form>
            </div>
          <div id='resultArea' className='flex justify-around pt-16'>
            <button type="button" className=''>Stories</button>
            <button type="button" className=''>Profile Picture</button>

          </div>
              <video className='h-80 w-76' autoPlay={true} src="https://scontent.cdninstagram.com/o1/v/t16/f2/m69/AQMWOVKRkomleMF0-YuchikXSEHo5iRZOcAtbzJ2SJovnNMNTro70aLierNmbccsfqNZE_7IoxTcsBCrTxvZgp4-.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uU1RPUlkuQzMuMTA4MC5kYXNoX2Jhc2VsaW5lXzEwODBwX3YxIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&strext=1&vs=d888b9600dc235be&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HREZhUFFmMDNMX3RFd2tLQUl2T3JqVnBlcjVIYnBSMUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFYnllQnRmcU1IWUhpTUhBT3hQU2c0cF9vWi1icGt3QUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJraS2fPM0YwHFQIoAkMzLBdALgAAAAAAABgWZGFzaF9iYXNlbGluZV8xMDgwcF92MREAdegHAA&ccb=9-4&oh=00_AYC3NWHvtdiZKRaIM7Vc8USvaffhYI6Z6kCP2dbogEEtfA&oe=66F34663&_nc_sid=1d576d"></video>
        </div>
    </>
  );
}

export default App;