import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (

    <section id='home'
      className=' bg-cover bg-center flex flex-col md:flex-row items-center justify-center  min-h-screen overflow-hidden '
      style={{ backgroundImage: `url(${'src/assets/1.png'})` }}>

      <div className='  flex flex-col md:mx-[5rem] my-[7rem] md:my-[7rem] w-full md:w-[50%] space-y-3'>
        <div className='text-n-6 mx-5 md:mx-0 font text-4xl md:text-5xl font-bold'>
          <h1>Find Your</h1>
          <h1>Dream Home</h1>
        </div>
        <div className='text-base md:text-lg text-n-6/90 mx-5 md:mx-0'>
          <p className='max-w-xl text-n-6/70 '>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
          </p>
        </div>

      <Link to={'/listpage'}>
      <button  type='button' 
     className="my-6 md:my-14 border-2 relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-3 md:py-3 px-6 md:px-8 font-semibold 
     rounded-3xl mx-5 md:mx-0 shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12"
   ><span className="relative z-10">Get Started</span>
      </button>
      </Link>

      </div>
      <div className='flex justify-center '>
        <img src="src\assets\Luxurious (1).png" alt="" 
        className='w-[10rem]]'
         />
      </div>
      
    </section>
    
  )
}

export default Home
