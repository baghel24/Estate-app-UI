import React from 'react'
import { Link } from 'react-router-dom';
import { homebg, homeherohouse } from '../assets';

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


        <div className='py-6 md:py-10 space-y-8'>
{/* search bar */}
        <div className="flex shadow-xl mx-5 md:mx-0 md:w-[23rem] mb-14">
    <div className="rounded-lg bg-gradient-to-r from-green-400 to-n-6 p-2">
      <div className="flex">
        <div className="flex md:w-20 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 items-center border border-gray-100 justify-center rounded-tl-2xl rounded-bl-2xl border-r border-gray-200  p-5">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-700 transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Location"
          className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 max-w-[25rem] pl-2 text-base font-semibold outline-0"
        />
        <input
          type="button"
          value="Search"
          className="bg-n-8 p-2 rounded-tr-2xl rounded-br-2xl text-n-6 font-bold hover:bg-white transition-colors"
        />
      </div>
    </div>
  </div>
  <Link to={'/listpage'}>
    <button
      type='button'
      className="flex gap-3 border-2 relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-3 md:py-3 px-6 md:px-8 font-semibold rounded-3xl mx-5 md:mx-0 shadow-xl transform animate-fade-up transition-all duration-500 tracking-widest hover:gap-5 hover:translate-x-3"
    >
      <span className="relative z-10">Get Started</span>
      <svg
        className="w-5 h-5"
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
        />
      </svg>
    </button>
  </Link>
  
  
</div>
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
