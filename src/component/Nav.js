import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useNavigate()

  const newsNevigatehandle =()=>{
    router('/news')
  }
  const homeNevigatehandle =()=>{
    router('/home')
  }
  const videoNevigatehandle =()=>{
    router('/video')
  }
  return (
    <div> <nav className=" bg-emerald-600 w-full fixed top-0 z-50">
    <div className="flex items-center justify-center h-16 px-4">
      {/* Hamburger Menu for mobile */}
      <div className="md:hidden absolute left-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navbar links for desktop (Centered) */}
      <ul className="hidden md:flex space-x-6 text-white font-medium">
      <li className="relative group hover:text-gray-300">
          <button className="focus:outline-none block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium " onClick={homeNevigatehandle}>HOME</button>

        
        </li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">BUSINESS</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">FINANCE</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">LIFESTYLE</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={newsNevigatehandle}>NEWS</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer" onClick={videoNevigatehandle}>VIDEOS</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">INVESTING</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">BANKING</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">TECHNOLOGY</li>
        <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium cursor-pointer">INSURANCE</li>
      </ul>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <ul className="md:hidden bg-[#ccdee0] text-white space-y-4 ">
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">HOME</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">BUSINESS</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">FINANCE</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">LIFESTYLE</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">NEWS</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">VIDEOS</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">INVESTING</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">BANKING</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">TECHNOLOGY</li>
        <li className=" text-black hover:text-blue-500 transition-colors duration-300 ease-in-out">INSURANCE</li>
      </ul>
    )}
  </nav>
  <Outlet/>
  </div>
  )
}
