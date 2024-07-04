import React, { useState } from 'react';
import { cards } from '../constants';

const Rating = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Define the number of visible cards for different screen sizes
  const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalSlides = Math.ceil(cards.length / visibleCards);

  // Function to handle navigation
  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      setCurrentCard((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    } else if (direction === 'next') {
      setCurrentCard((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className='py-8 px-4 md:px-[5rem] bg-n-7'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl font-bold text-n-6'>What People Say</h1>
        <h1 className='text-2xl md:text-4xl font-bold text-n-6'>About Dwello</h1>
      </div>

      <div className='mt-12 overflow-hidden'>
        {/* Card Container */}
        <div
          className='flex transition-transform duration-300'
          style={{
            transform: `translateX(-${currentCard * 100 / visibleCards}%)`,
            width: `${cards.length * 100 / visibleCards}%`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className='flex-1 min-w-[calc(100%/1)] sm:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] 
              bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden mx-2 
               transition-transform duration-300 hover:shadow-2xl hover:shadow-n-9'
            >
              <div className='bg-cover bg-center h-[14rem] md:h-[14rem] w-full md:w-[40rem]
               transition-transform duration-300' style={{ backgroundImage: `url(${card.image})` }}></div>
              <div className='flex mt-5 px-6 items-center'>
                <div className='bg-cover rounded-full w-[3rem] h-[3rem]' style={{ backgroundImage: `url(${card.profile})` }}></div>
                <div className='mx-3'>
                  <h1 className='font-bold text-md'>{card.name}</h1>
                  <h2 className='text-sm'>{card.location}</h2>
                </div>
                <div className='bg-n-1 flex px-1 text-center h-6 w-14 gap-2 rounded-sm'>
                  <img src="src/assets/icons8-rating-30.png" alt="icon" className='rounded-full w-[1.2rem] h-[1.2rem]' />
                  {card.rating}
                </div>
              </div>
              <p className='text-sm px-6 mt-2 mb-4 h-16 '>{card.review}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='my-11 flex justify-center gap-4'>
        <button
          onClick={() => handleNavigation('prev')}
          className="flex items-center bg-n-6 text-white gap-1 px-3 py-2 cursor-pointer font-semibold rounded-md bg-gradient-to-r from-green-400 to-n-6 duration-300 hover:gap-2 hover:-translate-x-3"
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L5 12M5 12L11 18M5 12H19"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => handleNavigation('next')}
          className="flex items-center bg-n-6 text-white gap-1 px-3 py-2 cursor-pointer font-semibold rounded-md bg-gradient-to-r from-green-400 to-n-6 duration-300 hover:gap-2 hover:translate-x-3"
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 6L19 12M19 12L13 18M19 12H5"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Rating;
