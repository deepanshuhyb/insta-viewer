import { useState, useEffect, useCallback } from 'react'
import burgerIcon from './assets/burger-bar.png'
import searchBtn from './assets/search-btn.svg'
import { getURL } from './api'
import GetRez from './components/GetRez'

function App () {
  const [togglemenu, settoggal] = useState(false)
  const [name, setName] = useState('')
  const [res, setres] = useState([])

  const tap = () => {
    settoggal(!togglemenu)
  }

  const userInput = e => {
    // e.preventDefault();
    setName(e.target.value)
    // console.log(name);
  }

  const options = {
    method: 'GET',
    headers: {
      // 'x-rapidapi-key': '8033dbe000msheb96a535a1c94b8p1103afjsn84f5ad2a2730',
      // 'x-rapidapi-key': '774e572a4amsh48abd3f8b1ed240p12e268jsn0e7d16756ea5',
      'x-rapidapi-key': '6b210280c3msh29cc27189c6e5bcp1d3dc7jsn7f93bad2dd1b',
      'x-rapidapi-host': 'instagram-viewer.p.rapidapi.com'
    }
  }
  // res.map(l => console.log(l))

  const Fetchdata = async e => {
    e.preventDefault()

    try {
      const response = await fetch(getURL(name), options)
      const results = await response.json()
      console.log(results)
      if(results?.stories.isArray()){
        setres(results.stories.result)
      }else{
        setres([])
      }
      // console.log(res)
      // res.map(l => console.log(l))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className=''>
        <div
          className={`h-16 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between md:px-16 w-screen max-w-full ${
            togglemenu ? 'px-1' : 'px-16'
          }`}
        >
          <div
            className={`font-bold text-2xl md:px-16 ${
              togglemenu ? 'px-0' : 'px-2'
            }`}
          >
            Instory
          </div>
          <div className='md:hidden' onClick={tap}>
            <img src={burgerIcon} alt='Menu Icon' className='w-6 h-6' />
          </div>
          <ul
            className={`flex md:flex ${
              togglemenu ? 'block' : 'hidden'
            } md:block`}
          >
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}>
              <a href='#'>Home</a>
            </li>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}>
              <a href='#'>Api</a>
            </li>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}>
              <a href='#'>Contact</a>
            </li>
            <li className={`${togglemenu ? 'px-1' : 'px-4'}`}>
              <a href='#'>About</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col h-auto bg-gradient-to-r from-pink-400 to-violet-400'>
          <div className='flex justify-center'>
            <form onSubmit={Fetchdata}>
              <label htmlFor=''>
                <p className='font-serif flex justify-center font-sans-serif text-zinc-900 antialiased drop-shadow-2xl md:text-2xl py-2'>
                  Enter UserName:
                </p>
                <div className='rounded-full md:h-12 md:w-96 bg-white flex items-center justify-center w-48 border-4 hover:border-slate-700'>
                  <input
                    className=' h-8 md:w-80 outline-none w-32'
                    type='text'
                    name=''
                    id=''
                    value={name}
                    onChange={function demo (e) {
                      return userInput(e)
                    }}
                  />
                  <button type='submit'>
                    <img
                      src={searchBtn}
                      alt=''
                      className='md:h-8 h-6'
                      onClick={Fetchdata}
                    />
                  </button>
                </div>
              </label>
            </form>
          </div>
          <div
            id='resultArea'
            className='flex flex-col items-center pt-16 min-h-screen'
          >
            <h1 className=''>Stories for {name}</h1>
            <div className='px-16'>
              <GetRez links={res} />
            </div>
          </div>
        </div>
        <footer className='h-16 bg-black flex justify-center'>
                    <h4 className='text-white pt-8 flex gap-x-4'>
                      Made by deepanshu.
                      <a href="https://github.com/deepanshuhyb" target='_blank'>
                        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="" className=' rounded-full h-8 w-8' />
                      </a>
                    </h4>
        </footer>
      </div>
    </>
  )
}

export default App
