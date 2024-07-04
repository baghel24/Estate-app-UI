import React from 'react';

const Stats = () => {
  return (
    <div id='stats' className='my-12 md:my-[7rem] flex flex-col md:flex-row w-full'>
      {/* First child div (Image) */}
      <div 
        className='flex-1 mx-7 md:mx-[5rem] mb-6 md:mb-0 md:p-4 p-28 bg-cover bg-center rounded-2xl shadow-2xl'
        style={{ backgroundImage: `url(${'src/assets/11.png'})` }}
      >
      </div>
      
      {/* Second child div (Content) */}
      <div className='flex-1 mx-7 md:mx-[5rem]'>
        <h1 className='text-2xl md:text-4xl font-bold text-n-6 mb-4 md:mb-6'>
          We Help You To Find Your Dream Home
        </h1>
        <p className='text-base md:text-lg font-bold text-n-6/90 mb-4'>
          From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.
        </p>
        <div className='max-w-[35rem] my-8 md:my-[2rem] flex justify-center md:justify-start gap-6 md:gap-8 flex-wrap'>
          {/* Stat 1 */}
          <div className='flex flex-col items-center justify-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] border-4 rounded-full bg-gradient-to-t from-n-8 to-n-1 shadow-xl hover:border-n-8 transition duration-500'>
            <h1 className='text-2xl md:text-3xl font-bold'>10+</h1>
            <p className='text-center'>Years of experience</p>
          </div>
          {/* Stat 2 */}
          <div className='flex flex-col items-center justify-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] border-4 rounded-full bg-gradient-to-t from-n-8 to-n-1 shadow-xl hover:border-n-8 transition duration-500'>
            <h1 className='text-2xl md:text-3xl font-bold'>1200+</h1>
            <p className='text-center'>Ready homes</p>
          </div>
          {/* Stat 3 */}
          <div className='flex flex-col items-center justify-center w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] border-4 rounded-full bg-gradient-to-t from-n-8 to-n-1 shadow-xl hover:border-n-8 transition duration-500'>
            <h1 className='text-2xl md:text-3xl font-bold'>500+</h1>
            <p className='text-center'>Ongoing Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
