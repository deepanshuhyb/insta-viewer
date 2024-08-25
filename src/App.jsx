import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 flex justify-between items-center px-4 md:px-8">
        {/* Logo/Brand */}
        <div className="text-white font-bold text-xl">
          InstaStory
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">About</a>
          <a href="#" className="text-white hover:text-gray-200">API</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h1 className="text-2xl">Welcome to InstaStory</h1>
        {/* <p>This is a sample responsive navbar built with Tailwind CSS.</p> */}
      </div>
    </>
  );
}

export default App;
