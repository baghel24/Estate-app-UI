import React from 'react';
import { priceicon, location1icon } from '../assets';

const Search = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-n-8 h-auto md:h-[8rem] mx-4 md:mx-[5rem] lg:mx-[16rem] p-5 md:px-9 py-8 
    rounded-lg shadow-xl hover:shadow-green-200  hover:border-green-300/50">
      <form className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 w-full">
        
        {/* Location Input with Image Icon */}
        <div className="flex items-center relative w-full md:w-auto">
          <span className="absolute left-3">
            <img src={location1icon} alt="Location Icon" className="h-5 w-5" />
          </span>
          <input
            id="location"
            type="text"
            name="location"
            placeholder="City Location"
            className="peer w-full md:w-[25rem] h-[2.5rem] pl-11 pr-4 outline-none text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
          />
        </div>
        
        {/* Min Price Input with Image Icon */}
        <div className="flex items-center relative w-full md:w-auto">
          <span className="absolute left-3">
            <img src={priceicon} alt="Min Price Icon" className="h-5 w-5" />
          </span>
          <input
            id="minprice"
            type="number"
            name="minprice"
            min={0}
            max={100000000}
            placeholder="Min Price"
            className="peer w-full md:w-[12rem] h-[2.5rem] pl-11 pr-4 outline-none text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
          />
        </div>
        
        {/* Max Price Input with Image Icon */}
        <div className="flex items-center relative w-full md:w-auto">
          <span className="absolute left-3">
            <img src={priceicon} alt="Max Price Icon" className="h-5 w-5" />
          </span>
          <input
            id="maxprice"
            type="number"
            name="maxprice"
            min={0}
            max={100000000}
            placeholder="Max Price"
            className="peer w-full md:w-[12rem] h-[2.5rem] pl-11 pr-4 outline-none text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
          />
        </div>
        
        {/* Search Button */}
        <button className="relative bg-white text-gray-800 py-3 md:py-4 px-6 md:px-10 flex items-center 
        justify-center text-lg font-semibold border-2 gap-2 overflow-hidden rounded-full shadow-lg transition-transform
         duration-500 hover:scale-110 hover:bg-gradient-to-b from-green-400 to-n-6 hover:text-n-1">
          <span className="relative flex items-center justify-center z-10">
            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"
                className="fill-current"
              />
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}

export default Search;
