import React from 'react'
import { Link } from 'react-router-dom';
import { homebg,homeherohouse } from '../assets';

const Home = () => {
 
  return (

    <section id='home'
      className=' bg-cover bg-center flex flex-col md:flex-row items-center justify-center  min-h-screen overflow-hidden '
      style={{ backgroundImage: `url(${homebg})` }}>

      <div className='  flex flex-col md:mx-[5rem] my-[7rem] md:my-[7rem] w-full md:w-[50%] space-y-3'>
        <div className='text-n-6 mx-5 md:mx-0 font text-4xl md:text-5xl font-bold animate-flip-down'>
          <h1>Find Your</h1>
          <h1>Dream Home</h1>
        </div>
        <div className='text-base md:text-lg text-n-6/90 mx-5 md:mx-0 animate-flip-down'>
          <p className='max-w-xl text-n-6/70 '>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
          </p>
        </div>

      <Link to={'/listpage'}>
      <button  type='button' 
     className=" flex gap-3 my-6 md:my-14 border-2 relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-3 md:py-3 px-6 md:px-8 font-semibold 
     rounded-3xl mx-5 md:mx-0 shadow-xl transform animate-fade-up transition-all duration-500 tracking-widest  duration-300 tracking-widest hover:gap-5 hover:translate-x-3"
   >
<span className="relative z-10">Get Started</span>
<svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
      </button>
      </Link>


      </div>
      <div className='flex justify-center'>
          <img
            src={homeherohouse}
            alt="house image"
            className='w-[70rem] md:mt-0 mt-[-5rem] md:mb-0 mb-4'
          />
        </div>

      
    </section>
    
  )
}

export default Home
