import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import { client } from '../sanityClient';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // const [activeDropdown, setActiveDropdown] = useState(null); // For dropdowns

  // const handleDropdown = (index) => {
  //   setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown
  // };
  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(() => {
    // GROQ query to fetch all posts
    client
      .fetch(`*[_type == "post"]{
        title,
        slug,
        publishedAt,
        mainImage{
        asset->{
        _id,
        url}
        }
        }`)
      .then((data) => setPosts(data))
      .catch(err=>console.error(err));
  }, []);

  // const router = useNavigate()

  // const newsNevigatehandle =()=>{
  //   router('/news')
  // }

  return (
    <>
   

    
     {/* ////////////////////////main contect///////////////////////////////////////// */}
   
     <div className='container-fluid max-w-full h-full bg-gray-100 p-2 pt-10 mt-5 top-0 z-50'>
     
     <div class="flex justify-center  my-4">
      
     <p className="text-xl font-bold text-black-600">LATEST NEWS</p>
    
    </div>

    <div class="container flex justify-center gap-20 overflow-x-auto max-w-full py-4 p-5 no-scrollbar">
      {
        posts.map((post, index)=>(
          <div class="bg-white rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.9)] transition duration-300 ease-in-out ">
          <div className='w-[200px], h-[100px] '>

          <img src={post.mainImage.asset.url} alt='Descriptive alt text' className="h-[150px] w-full" />
          </div>
            <p>{post.body}</p>
          <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  {post.title}
</p>
          {/* <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  {post.body}
</p> */}
        
        </div> 

        ))
      }
      
        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px]  flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out ">
          <div className='w-[200px], h-[100px] '>

          <img src='img1.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
          </div>
            
          <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        
        </div>  */}




        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0  flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima3.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
            
        </div> */}
        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima6.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
  <p class="text-black font-bold font-serif p-1">This is a description of the news.</p>
        </div> */}
        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima7.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div> */}
        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima8.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div> */}
        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='ima9.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div> */}
        {/* <div class="bg-white shadow-md rounded-lg h-[250px] w-[250px] flex-shrink-0 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
        <div className='w-[200px], h-[100px]'>

<img src='img4.jpg' alt='Descriptive alt text' className="h-[150px] w-full" />
</div>
  
   <p class="text-gray-900 font-semibold font-serif text-sm leading-5 px-4 py-2 line-clamp-3">
  The latest updates on the ongoing event have taken a surprising turn. Sources indicate that new developments are unfolding rapidly, with more details to be revealed soon. Stay tuned for continuous coverage.
</p>
        </div> */}
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

