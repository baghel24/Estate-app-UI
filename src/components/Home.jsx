import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
 
  return (

    <section id='home'
      className='flex  bg-cover bg-center '
      style={{ backgroundImage: `url(${'src/assets/1.png'})` }}>

      <div className='mx-[5rem] my-[7rem] w-[50%]'>
        <div className='h1 text-n-6 font'>
          <h1>Find Your</h1>
          <h1>Dream Home</h1>
        </div>
        <div className='text-lg text-n-6/90'>
          <p className='body-1 max-w-xl  text-n-6/70 '>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
          </p>
        </div>

      <Link to={'/listpage'}>
      <button  type='button' className="my-14 border-2 relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-4 px-8 font-semibold 
        rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
        <span className="relative z-10">Get Started</span>
      </button>
      </Link>

      </div>
      <div className='drop-shadow-2xl bg-cover bg-center'>
        <img src="src\assets\Luxurious (1).png" alt="" className='w-[10rem]]' />
      </div>
      
    </section>
    
  )
}

export default Home
