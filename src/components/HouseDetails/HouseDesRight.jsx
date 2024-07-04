import React from 'react';

const HouseDesRight = () => {
  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <div className="relative mx-auto mt-3 flex border-2 rounded-xl items-center justify-center text-center shadow-xl max-w-2xl">
        <div className="w-1/3 border-r-2 p-2 flex items-center justify-center">
          <img src="src/assets/icons8-heart-48.png" alt="Favorite" className="w-7" />  
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
