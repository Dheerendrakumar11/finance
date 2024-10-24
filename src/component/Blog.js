import React, { useState } from 'react';

function BasicButtonExample() {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div 
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Dropdown button
      </button>

      {/* Dropdown menu */}
      {show && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#/action-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Action
            </a>
            <a href="#/action-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Another action
            </a>
            <a href="#/action-3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Something else
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasicButtonExample;
