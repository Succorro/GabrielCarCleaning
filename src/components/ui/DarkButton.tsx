import React from 'react';
import {Sun, Moon} from 'lucide-react'
const DarkButton = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem('theme', JSON.stringify(!theme));
  };

  return (
    <button 
      className="w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={toggleTheme}
    >
      <div
        className={`w-6 h-6 relative rounded-full transition duration-500 transform p-1 text-white ${
          theme ? 'bg-yellow-500 -translate-x-2' : 'bg-gray-700 translate-x-full'
        }`}
      >
        {theme ? <Sun className='w-5 -translate-x-0.5 -translate-y-1'/> : <Moon className='w-5 -translate-x-0.5 -translate-y-1'/>}
      </div>
    </button>
  );
};

export default DarkButton;