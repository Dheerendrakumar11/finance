import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import { client } from '../sanityClient';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // const [activeDropdown, setActiveDropdown] = useState(null); // For dropdowns

  // const handleDropdown = (index) => {
  //   setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown
  // };
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   // GROQ query to fetch all posts
  //   client
  //     .fetch(`*[_type == "blog"]`)
  //     .then((data) => setPosts(data))
  //     .catch(console.error);
  // }, []);

  return (
    <>
    <nav className=" bg-emerald-600 w-full fixed top-0 z-50">
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
            <button className="focus:outline-none block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium ">HOME</button>

          
          </li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">BUSINESS</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">FINANCE</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">LIFESTYLE</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">NEWS</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">VIDEOS</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">INVESTING</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">BANKING</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">TECHNOLOGY</li>
          <li className="block text-white hover:bg-white hover:text-black rounded-md px-3 py-2 text-base font-medium">INSURANCE</li>
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
     {/* ////////////////////////main contect///////////////////////////////////////// */}
   
     <div className=' container w-full h-full bg-gray-100 p-2 pt-10 mt-5 top-0 z-50'>
     
     <div class="flex justify-center my-4">
      
     <p className="text-xl font-bold text-black-600">LATEST NEWS</p>
    
    </div>

    <div class="container flex justify-center gap-20 overflow-x-auto py-4 no-scrollbar">
      
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px]  flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out ">
          <div className='w-[200px], h-[100px] '>

          <img src='img1.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
          </div>
            
          <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        
        </div>  
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0  flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima3.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
            
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima6.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
  <p class="text-black font-bold font-serif p-1">This is a description of the news.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima7.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima8.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima9.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
    </div>



    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <div class="flex justify-center my-4">
    <p className="text-xl font-bold text-black-600">BUSINESS</p>
    </div>
    <div class="container flex justify-center gap-20 overflow-x-auto py-4 no-scrollbar">
      
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px]  flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out ">
          <div className='w-[200px], h-[100px] '>

          <img src='ima9.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
          </div>
            
          <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        
        </div>  
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0  flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima8.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
            
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima7.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
  <p class="text-black font-bold font-serif p-1">This is a description of the news.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima6.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima5.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima11.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
    </div>


    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <div class="flex justify-center my-4">
    <p className="text-xl font-bold text-black-600">FINANCE</p>
    </div>
    <div class="container flex justify-center gap-20 overflow-x-auto py-4 no-scrollbar">
      
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px]  flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out ">
        <div className='w-[200px], h-[100px] '>

        <img src='img1.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
        </div>
          
        <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      
      </div>  
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0  flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img2.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
          
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img3.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

<p class="text-black font-bold font-serif p-1">This is a description of the news.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
  </div>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <div class="flex justify-center my-4">
    <p className="text-xl font-bold text-black-600">TECHNOLOGY</p>
    </div>
    <div class="container flex justify-center gap-20 overflow-x-auto py-4 no-scrollbar">
      
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px]  flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out ">
        <div className='w-[200px], h-[100px] '>

        <img src='img1.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
        </div>
          
        <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      
      </div>  
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0  flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img2.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
          
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img3.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

<p class="text-black font-bold font-serif p-1">This is a description of the news.</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
      <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
      <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>

 <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
      </div>
  </div>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <div class="flex justify-center my-4">
    <p className="text-xl font-bold text-black-600">LIFESTYLE</p>
    </div>
    <div class="container flex justify-center gap-20 overflow-x-auto py-4 no-scrollbar">
      
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px]  flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out ">
          <div className='w-[200px], h-[100px] '>

          <img src='img1.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
          </div>
            
          <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        
        </div>  
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0  flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img2.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
            
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img3.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
  <p class="text-black font-bold font-serif p-1">This is a description of the news.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div>
    </div>

     


     </div>

     </>
  );
}
