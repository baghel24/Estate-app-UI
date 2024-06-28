import React from 'react';

const Stats = () => {
  return (
    <div id='stats' className=' my-[7rem] flex flex-row w-full'>
      <div className='flex-1 mx-[5rem] p-4 bg-cover bg-center rounded-2xl shadow-2xl'
      style={{ backgroundImage: `url(${'src/assets/11.png'})` }}>
      </div>
    
      <div className=' mx-[5rem] flex-1 '>
        {/* Second child div */}
        <h1 className='h2 font-bold text-n-6 mb-3'>We Help You To Find Your Dream Home</h1>
        <p className=' body-1 max-w-xl  font-bold text-n-6/90  '>
        From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
        <div className='max-w-[35rem] my-[2rem] relative flex  text-n-6 grid grid-cols-3 '>
        <div className=' px-2 w-[10rem] h-[10rem]  border-4 rounded-full bg-gradient-to-t from-n-8 to-n-1  shadow-xl shadow-n-6  hover:border-n-8'>
            <h1 className='mt-9 h3 font-bold  text-center'>10+</h1>
            <p className='text-center '>Years of experience</p>
        </div>
        <div className=' mt-11 px-2 w-[10rem] h-[10rem]  border-4 rounded-full bg-gradient-to-t from-n-8 to-n-1 shadow-xl shadow-n-6  hover:border-n-8 duration-500'>
        <h1 className='h3 mt-9 font-bold  text-center '>1200+</h1>
        <p className='text-center '>Ready homes</p>
        </div>
        <div className='px-2 w-[10rem] h-[10rem]  border-4 rounded-full bg-gradient-to-t from-n-8 to-n-1  shadow-xl shadow-n-6  hover:border-n-8'>
        <h1 className='h3 mt-9 font-bold text-center '>500+</h1>
        <p className='text-center '>Ongoing Projects </p>
        </div>
    </div> 
      </div>

      
    </div>
  );
}

export default Stats;
