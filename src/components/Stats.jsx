import React from 'react';

const Stats = () => {
  return (
    <div className=' my-[7rem] flex flex-row w-full'>
      <div className='flex-1 mx-[5rem] bg-blue-100 p-4'>
        {/* First child div */}
        sdfghjklcvbeubwkc
      </div>
    
      <div className=' mx-[5rem] flex-1 p-4'>
        {/* Second child div */}
        <h1 className='h2 font-bold text-n-6'>We Help You To Find Your Dream Home</h1>
        <p className='my-[3rem] body-1 max-w-xl  font-bold text-n-6/90 '>
        From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
        <div className='max-w-[35rem] my-[3rem] relative flex text-n-6 grid grid-cols-3 '>
        <div className='px-2'>
            <h1 className='h2 font-bold'>10+</h1>
            <p>Years of experience</p>
        </div>
        <div className='px-2'>
        <h1 className='h2 font-bold'>1200+</h1>
        <p>Ready homes</p>
        </div>
        <div className='px-2'>
        <h1 className='h2 font-bold'>500+</h1>
        <p>Ongoing Projects </p>
        </div>
    </div> 
      </div>

      
    </div>
  );
}

export default Stats;
