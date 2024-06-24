import React from 'react'

const Search = () => {
  return (
    <div className="relative flex items-center justify-center hover:border-double hover:border-4 hover:border-n-6/30 bg-n-8 h-[8rem] mx-[14rem] px-9  px-6 py-8 rounded-lg shadow-xl hover:shadow-green-200 ">
    <form className="flex flex-col md:flex-row md:space-x-[4rem] space-y-4 md:space-y-0 w-full">
        {/* Location Input with Image Icon */}
        <div className="flex items-center relative w-full">
            <span className="absolute left-3">
                <img src="src\assets\icons8-location-64.png" alt="Location Icon" className="h-5 w-5" /> {/* Update with your icon path */}
            </span>
            <input
                id="location"
                type="text"
                name="location"
                placeholder="City Location"
                className="w-full pl-11 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
            />
        </div>
        
        {/* Min Price Input with Image Icon */}
        <div className="flex items-center relative w-full">
            <span className="absolute left-3">
                <img src="src/assets/icons8-price-50.png" alt="Min Price Icon" className="h-5 w-5" /> {/* Update with your icon path */}
            </span>
            <input
                id="minprice"
                type="number"
                name="minprice"
                min={0}
                max={100000000}
                placeholder="Min Price"
                className="w-full pl-11 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
            />
        </div>
        
        {/* Max Price Input with Image Icon */}
        <div className="flex items-center relative w-full">
            <span className="absolute left-3">
                <img src="src/assets/icons8-price-50.png" alt="Max Price Icon" className="h-5 w-5" /> {/* Update with your icon path */}
            </span>
            <input
                id="maxprice"
                type="number"
                name="maxprice"
                min={0}
                max={100000000}
                placeholder="Max Price"
                className="w-full pl-11 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
            />
        </div>
        
        <button className="relative bg-white text-gray-800 py-4 px-10 flex items-center justify-center text-lg font-semibold gap-2 rounded-lg 
         shadow-lg cursor-pointer overflow-hidden group hover:bg-n-6 hover:skew-x-12 duration-300	">
      <span className="relative flex items-center justify-center z-10">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"
            className="fill-current  group-hover:text-white "
          />
        </svg>
      </span>
      {/* Add button text if needed */}
      {/* <span className="relative z-10">Back</span> */}
      <div className="absolute inset-0 bg-n-6 transform translate-x-full translate-y-full rounded-lg transition-transform duration-600 ease-in-out group-hover:translate-x-1/5 group-hover:translate-y-1/5"></div>
    </button>
    </form>
</div>

  )
}

export default Search
