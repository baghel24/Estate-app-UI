import React from 'react';
import Listsearch from './Listsearch';
import { houseCardDetails } from '../../constants';
import { Link } from 'react-router-dom';
import HouseShortDes from '../HouseDetails/HouseShortDes';

const ListPage = () => {
  return (
    <div className='mx-4 md:mx-[5rem] mb-6'>
      {/* Search component */}
      <Listsearch />
      
      <div className='flex flex-col md:flex-row mt-5 relative gap-3'>
        
        {/* Left Section */}
        <div className='w-full md:w-[50%] h-[calc(100vh-8rem)] overflow-y-auto hide-scrollbar '>
          <div className='space-y-4 '> {/* Added space-y-4 for gap between cards */}
            {houseCardDetails.map((house) => (
              <Link to="" key={house.id}>
                <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden '>
                  <div className='bg-cover bg-center w-[20rem] md:h-[10.5rem] hover:scale-105 duration-300'
                    style={{ backgroundImage: `url(${house.houseImage})` }}>
                  </div>
                  <div className="relative group p-2 mx-2">
                    <h1 className='text-lg font-bold'>{house.houseName}</h1>
                    <div className="text-md font-bold flex gap-2 mb-3 mt-4 text-n-6/60">
                      <img src={house.locationIcon} alt="Location Icon" className='w-4 h-4 mt-[.1rem]' />
                      {house.location}
                    </div>
                    <div className="flex justify-between text-sm font-bold gap-20 mt-5">
                      <div className='flex gap-2'>
                        <img src={house.roomsIcon} alt="Rooms Icon" className='w-4 h-4 mt-[.1rem]' />
                        {house.rooms} Rooms
                      </div>
                      <div className='flex gap-2'>
                        <img src={house.sizeIcon} alt="Measurement Icon" className='w-4 h-4 mt-[.1rem]' />
                        {house.Size} sq ft
                      </div>
                    </div>
                    <div className="text-md font-bold flex gap-1 mt-5">
                      $ {house.price}
                    </div>
                  </div>
                  {/* <Link to="" key={house.id}>
                  <button type='button' className="  mt-14 relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white  font-semibold 
        rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 ">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button></Link> */}
                </div>
                
              </Link>
            ))}
          </div>         
        </div>

        {/* Right Section */}
        <div className='hidden md:block w-full md:w-[50%] h-[calc(100vh-8rem)] overflow-y-auto right-0 bg-n-8 rounded-md drop-shadow-2xl p-4 py-8 hide-scrollbar'>
          <HouseShortDes />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
