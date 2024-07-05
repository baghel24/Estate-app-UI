import React from 'react';

const HouseDesRight = () => {
  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <div className="relative mx-auto mt-3 flex border-2 rounded-xl items-center justify-center text-center shadow-xl max-w-2xl">
        <div className="w-1/3 border-r-2 p-2 flex items-center justify-center">
        <label className="relative block text-2xl cursor-pointer select-none transition-transform duration-100">
      <input type="checkbox" className="absolute opacity-0 h-0 w-0 cursor-pointer" defaultChecked />
      <div className=" checkmark w-8 h-8 transition-transform duration-100 animate-dislike_effect flex items-center justify-center">
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <rect fill="none" height="256" width="256"></rect>
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            className="fill-none stroke-black stroke-[20px] transition-all duration-100"
          ></path>
        </svg>
      </div>
    </label> 
          <span className="hidden md:inline ml-2">Favorite</span>
        </div>
        <div className="w-1/3 border-r-2 p-2 flex items-center justify-center">
          <img src="src/assets/icons8-question-30.png" alt="Ask an Agent" className="w-7" />
          <span className="hidden md:inline ml-2">Ask an Agent</span>
        </div>
        <div className="w-1/3 p-2 flex items-center justify-center">
          <img src="src/assets/icons8-share-50.png" alt="Share" className="w-7" />
          <span className="hidden md:inline ml-2">Share</span>
        </div>
      </div>

      <div className="border-2 mx-auto mt-4 h-auto rounded-lg max-w-2xl bg-white p-4 lg:p-6">
        <h1 className="text-3xl font-bold text-center mt-3">Tour This Home</h1>

      <div>
        Date
      </div>
        <div className="flex justify-between my-6 gap-1">
        <button type="button" className="w-1/2 hover:bg-gradient-to-r from-green-400 to-n-6 hover:text-white py-2 font-semibold rounded-xl 
          shadow-sm transform transition-all duration-500 border-2 border-n-6/70 hover:border-none"><span className="inline-block mr-1">🏠</span> In Person
          </button>
          <button type="button" className="w-1/2 hover:bg-gradient-to-r from-green-400 to-n-6 hover:text-white py-2 font-semibold rounded-xl 
          shadow-sm transform transition-all duration-500  border-2 border-n-6/70 hover:border-none">
            <span className="inline-block mr-1">📱</span> Via Video Call
          </button>
        </div>

        <div className="text-center mb-4 border-2 rounded-lg p-1 mx-6">
          <div className="text-sm text-gray-500 mb-2">Time</div>
          <div className="text-2xl font-bold">4:30 PM</div>
        </div>

        <div className="mx-14">
          <button type="button" className="w-full bg-gradient-to-r from-green-400 to-n-6 text-white py-2 font-semibold rounded-xl 
          shadow-xl transform transition-all duration-500">
            SCHEDULE TOUR
          </button>
        </div>
      </div>

      <div className="border-2 mt-5 h-[45rem] rounded-lg max-w-2xl bg-gray-100 mx-auto p-4 lg:p-6">
        <h2 className="text-2xl font-bold text-center">Map</h2>
        {/* Placeholder for map */}
        <div className="h-full bg-gray-200 flex items-center justify-center">
          Map goes here
        </div>
      </div>
    </div>
  );
}

export default HouseDesRight;
