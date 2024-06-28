import React from 'react';
import Listsearch from './Listsearch';
import HouseDes from '../HouseDetails/HouseDes';

const ListPage = () => {
  return (
    <div className='mx-[5rem] mb-6'>
      {/* Search component */}
      <Listsearch />
      
      <div className='flex mt-5 relative gap-3'>
        
        {/* Left Section */}
        <div className='w-[50%] h-[calc(100vh-8rem)] overflow-y-auto hide-scrollbar'>
          <div className='space-y-2'>
            {/* Villa Card 1 */}
            <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
              <div className='bg-cover bg-center w-[20rem] h-[12rem] hover:scale-105 duration-300'
                style={{ backgroundImage: `url('/src/assets/4.png')` }}>
              </div>
              <div className="relative group p-2 mx-2">
                <h1 className='text-xl font-bold'>Great 5BHK Villa at New York</h1>
                <p className='text-md'>Small details about villa</p>
                <div className="text-xl font-bold flex gap-2 mb-3 mt-4">
                  <img src="/src/assets/icons8-location-64 (1).png" alt="Location Icon" className='w-6 h-6' />
                  Location
                </div>
                <div className="flex justify-between text-md font-bold mb-3">
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-door-50.png" alt="Rooms Icon" className='w-6 h-6' />
                    5 rooms
                  </div>
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-measurement-32.png" alt="Measurement Icon" className='w-6 h-6' />
                    7,000 sq ft
                  </div>
                </div>
                <div className="text-xl font-bold flex gap-2">
                  <img src="/src/assets/icons8-dollar-24.png" alt="Price Icon" className='w-5 h-6' />
                  Price
                </div>
              </div>
            </div>

            {/* Villa Card 2 */}
            <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
              <div className='bg-cover bg-center w-[20rem] h-[12rem] hover:scale-105 duration-300'
                style={{ backgroundImage: `url('/src/assets/2.png')` }}>
              </div>
              <div className="relative group p-2 mx-2">
                <h1 className='text-xl font-bold'>Great 5BHK Villa at New York</h1>
                <p className='text-md'>Small details about villa</p>
                <div className="text-xl font-bold flex gap-2 mb-3 mt-4">
                  <img src="/src/assets/icons8-location-64 (1).png" alt="Location Icon" className='w-6 h-6' />
                  Location
                </div>
                <div className="flex justify-between text-md font-bold mb-3">
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-door-50.png" alt="Rooms Icon" className='w-6 h-6' />
                    5 rooms
                  </div>
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-measurement-32.png" alt="Measurement Icon" className='w-6 h-6' />
                    7,000 sq ft
                  </div>
                </div>
                <div className="text-xl font-bold flex gap-2">
                  <img src="/src/assets/icons8-dollar-24.png" alt="Price Icon" className='w-5 h-6' />
                  Price
                </div>
              </div>
            </div>

            {/* Villa Card 3 */}
            <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
              <div className='bg-cover bg-center w-[20rem] h-[12rem] hover:scale-105 duration-300'
                style={{ backgroundImage: `url('/src/assets/6.png')` }}>
              </div>
              <div className="relative group p-2 mx-2">
                <h1 className='text-xl font-bold'>Great 5BHK Villa at New York</h1>
                <p className='text-md'>Small details about villa</p>
                <div className="text-xl font-bold flex gap-2 mb-3 mt-4">
                  <img src="/src/assets/icons8-location-64 (1).png" alt="Location Icon" className='w-6 h-6' />
                  Location
                </div>
                <div className="flex justify-between text-md font-bold mb-3">
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-door-50.png" alt="Rooms Icon" className='w-6 h-6' />
                    5 rooms
                  </div>
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-measurement-32.png" alt="Measurement Icon" className='w-6 h-6' />
                    7,000 sq ft
                  </div>
                </div>
                <div className="text-xl font-bold flex gap-2">
                  <img src="/src/assets/icons8-dollar-24.png" alt="Price Icon" className='w-5 h-6' />
                  Price
                </div>
              </div>
            </div>

            {/* Villa Card 4 */}
            <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
              <div className='bg-cover bg-center w-[20rem] h-[12rem] hover:scale-105 duration-300'
                style={{ backgroundImage: `url('/src/assets/5.png')` }}>
              </div>
              <div className="relative group p-2 mx-2">
                <h1 className='text-xl font-bold'>Great 5BHK Villa at New York</h1>
                <p className='text-md'>Small details about villa</p>
                <div className="text-xl font-bold flex gap-2 mb-3 mt-4">
                  <img src="/src/assets/icons8-location-64 (1).png" alt="Location Icon" className='w-6 h-6' />
                  Location
                </div>
                <div className="flex justify-between text-md font-bold mb-3">
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-door-50.png" alt="Rooms Icon" className='w-6 h-6' />
                    5 rooms
                  </div>
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-measurement-32.png" alt="Measurement Icon" className='w-6 h-6' />
                    7,000 sq ft
                  </div>
                </div>
                <div className="text-xl font-bold flex gap-2">
                  <img src="/src/assets/icons8-dollar-24.png" alt="Price Icon" className='w-5 h-6' />
                  Price
                </div>
              </div>
            </div>

            {/* Villa Card 5 */}
            <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
              <div className='bg-cover bg-center w-[20rem] h-[12rem] hover:scale-105 duration-300'
                style={{ backgroundImage: `url('/src/assets/8.png')` }}>
              </div>
              <div className="relative group p-2 mx-2">
                <h1 className='text-xl font-bold'>Great 5BHK Villa at New York</h1>
                <p className='text-md'>Small details about villa</p>
                <div className="text-xl font-bold flex gap-2 mb-3 mt-4">
                  <img src="/src/assets/icons8-location-64 (1).png" alt="Location Icon" className='w-6 h-6' />
                  Location
                </div>
                <div className="flex justify-between text-md font-bold mb-3">
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-door-50.png" alt="Rooms Icon" className='w-6 h-6' />
                    5 rooms
                  </div>
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-measurement-32.png" alt="Measurement Icon" className='w-6 h-6' />
                    7,000 sq ft
                  </div>
                </div>
                <div className="text-xl font-bold flex gap-2">
                  <img src="/src/assets/icons8-dollar-24.png" alt="Price Icon" className='w-5 h-6' />
                  Price
                </div>
              </div>
            </div>

            {/* Villa Card 6 */}
            <div className='flex hover:bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
              <div className='bg-cover bg-center w-[20rem] h-[12rem] hover:scale-105 duration-300'
                style={{ backgroundImage: `url('/src/assets/7.png')` }}>
              </div>
              <div className="relative group p-2 mx-2">
                <h1 className='text-xl font-bold'>Great 5BHK Villa at New York</h1>
                <p className='text-md'>Small details about villa</p>
                <div className="text-xl font-bold flex gap-2 mb-3 mt-4">
                  <img src="/src/assets/icons8-location-64 (1).png" alt="Location Icon" className='w-6 h-6' />
                  Location
                </div>
                <div className="flex justify-between text-md font-bold mb-3">
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-door-50.png" alt="Rooms Icon" className='w-6 h-6' />
                    5 rooms
                  </div>
                  <div className='flex gap-2'>
                    <img src="/src/assets/icons8-measurement-32.png" alt="Measurement Icon" className='w-6 h-6' />
                    7,000 sq ft
                  </div>
                </div>
                <div className="text-xl font-bold flex gap-2">
                  <img src="/src/assets/icons8-dollar-24.png" alt="Price Icon" className='w-5 h-6' />
                  Price
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className='w-[50%] h-[calc(100vh-8rem)]  overflow-y-auto right-0 bg-n-8 rounded-md drop-shadow-2xl  p-4 hide-scrollbar'>
          <HouseDes />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
