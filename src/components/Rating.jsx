import React, { useState } from 'react';
import { cards } from '../constants';
const Rating = () => {

  const [currentCard, setCurrentCard] = useState(0);
  /// Calculate the number of slides based on cards and the number of visible cards
  const visibleCards = 3;
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
    <div className='py-8 bg-n-7'>
      <div className='text-center'>
        <h1 className='h2 font-bold text-n-6'>What People Say</h1>
        <h1 className='h2 font-bold text-n-6'>About Dwello</h1>
      </div>

      <div className='mt-16 flex mx-[5rem]  '>
        {/* Card Container */}
        <div
          className='flex transition-transform duration-300'
          style={{ transform: `translateX(-${currentCard * 100 / visibleCards}%)`, width: `${cards.length * 100 / visibleCards}%` }}
        >
          {cards.map((card, index) => (
            <div key={index} className='flex-1 bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden mx-2 min-w-[calc(100%/4)] hover:scale-110 hover:shadow-2xl '>
              <div className='bg-cover bg-center h-[14rem]' style={{ backgroundImage: `url(${card.image})` }}></div>
              <div className='flex mt-5 px-6'>
                <div className='bg-cover rounded-full w-[3rem] h-[3rem]' style={{ backgroundImage: `url(${card.profile})` }}></div>
                <div className='mx-3'>
                  <h1 className='font-bold text-md'>{card.name}</h1>
                  <h2 className='text-sm '>{card.location}</h2>
                </div>
                <div className='bg-n-1 flex px-1   text-center h-6 w-14 gap-2 rounded-sm'>
                  <img src="src/assets/icons8-rating-30.png" alt="icon" className='rounded-full w-[1.2rem] h-[1.2rem]' />
                  {card.rating}
                </div>
              </div>
              <p className='text-sm px-6 mt-2 mb-4'>{card.review}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='my-11 flex justify-center gap-8'>
        <button
          onClick={() => handleNavigation('prev')}
          className="flex items-center bg-n-6 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 
            font-semibold  rounded-md bg-gradient-to-r from-green-400 to-n-6 duration-300 hover:gap-2 hover:-translate-x-5"
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
          className="flex items-center bg-n-6 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md 
     bg-gradient-to-r from-green-400 to-n-6 duration-300 hover:gap-2 hover:translate-x-5"
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
