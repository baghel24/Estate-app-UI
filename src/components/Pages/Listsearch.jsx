import React, { useState } from 'react';
import { location1icon } from '../../assets';

const Listsearch = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <section>
      <button
        onClick={toggleSidebar}
        className="bg-gradient-to-r from-green-500 to-n-6 mt-4 text-white py-2 px-4 rounded-lg mb-2 md:hidden"
      >
        Filters
      </button>

      <div className={`relative bg-n-7 h-auto px-2 py-1 rounded-lg shadow-md hover:shadow-green-200 ${showSidebar ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col md:flex-row items-center relative w-full gap-2">
          <div className='items-center relative w-full'>
            <span className="absolute left-3">
              <img src={location1icon} alt="Location Icon" className="h-4 w-4 mt-[.6rem]" />
            </span>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="City Location"
              className="peer w-full md:w-[30rem] pl-10 py-1.5 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8"
            />
          </div>
          <div className='items-center relative w-full'>
            <select name="type" id="type" 
              className="peer w-full py-1.5 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8">
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className='w-full'>
            <select name="propertyType" id="propertyType" placeholder="Property Type"
              className="peer w-full py-1.5 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8">
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="townhouse">Townhouse</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className='items-center relative w-full'>
            <select name="condition" id="condition" className="peer w-full py-1.5 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8">
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="under-construction">Under Construction</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>
          <div className="items-center relative w-full">
            <input
              id="maxprice"
              type="number"
              name="maxprice"
              min={0}
              max={100000000}
              placeholder="Max Price"
              className="peer w-full py-1.5 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8"
            />
          </div>
          <div className="items-center relative w-full">
            <input
              id="bedrooms"
              type="number"
              name="bedrooms"
              min={0}
              max={20}
              placeholder="Beds"
              className="peer w-full py-1.5 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8"
            />
          </div>
          <button className="relative h-[3.5rem] bg-white text-gray-800 py-1.5 px-10 flex items-center justify-center text-lg font-semibold rounded-lg shadow-lg cursor-pointer overflow-hidden group hover:bg-gradient-to-r from-green-500 to-n-6 hover:scale-105 transition-all duration-600">
            <span className="relative flex items-center justify-center z-10">
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"
                  className="fill-current group-hover:text-white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Listsearch;
