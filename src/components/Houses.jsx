import React from 'react'
import { houseCardDetails } from '../constants'


const Houses = () => {
  return (
    <div className='py-8'>
      <div className='text-center'>
        <h1 className='h2 font-bold text-n-6'>Our Popular Residences</h1>
        <p className='font-bold text-n-6'>Most recommended sites</p>
      </div>

      <div className='mt-14 flex mx-[5rem] flex-row gap-7 '>
      
        {houseCardDetails.map((house) =>(
          <div key={house.id} className='flex-1  bg-gradient-to-t from-n-7 to-n-9 text-n-6 rounded-xl  shadow-2xl overflow-hidden'>
            <div className=' bg-cover bg-center h-[14rem] hover:scale-105 duration-300'
            style={{ backgroundImage: `url(${house.houseImage})` }}>
          </div>
          <div className="relative group p-2 max-w-sm mx-auto">
            <div className="px-3 py-4 text-xl font-bold flex gap-2" >
              <img src= {house.locationIcon} alt="icon" className='w-6 h-6' />
              {house.location}
            </div>
            <div className="flex justify-between mx-4 text-md font-bold mb-4">
              <div className='flex gap-2'>
                <img src={house.roomsIcon} alt="icon" className='w-6 h-6' />
                {house.rooms} Rooms</div>
              <div className='flex gap-2'>
                <img src={house.sizeIcon} alt="" className='w-6 h-6' />
                {house.Size} sq ft</div>
            </div>
            <div className="px-6 py-2 text-xl font-bold flex justify-end gap-2">
              <img src={house.priceIcon} alt="" className='w-5 h-6' />
              {house.price} </div>
            <button className="absolute opacity-0  bg-gradient-to-r from-green-400 to-n-6 group-hover:opacity-100 bottom-2 left-4 text-white py-1 px-4 rounded-lg transition-opacity duration-300 ease-in-out  ">
              View Details
            </button>
          </div>
        </div>
        ))}

      </div>

      <div className='flex justify-center'>

        <div class="w-full h-40 flex items-center justify-center cursor-pointer  ">
          <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-n-6  transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 bg-n-7 border-2  group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ease-in-out  bg-gradient-to-r from-green-400 to-n-6 group-hover:h-full"
            ></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5 text-n-6"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5 text-n-1"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <span
              class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
            >Explore More</span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Houses
