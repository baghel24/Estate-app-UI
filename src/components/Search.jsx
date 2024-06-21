import React from 'react'

const Search = () => {
  return (
    <div className="relative flex items-center justify-center bg-n-8 h-[8rem] mx-[14rem] px-9  px-6 py-8 rounded-lg ">
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
        
        <button type="button" className="my-0 font-sans border bg-n-6 text-n-1 px-8 py-3 rounded-lg hover:bg-n-7/70 transition-colors duration-200 md:w-auto w-full">
        <img src="src\assets\icons8-search-50.png" alt="search Icon" height={20} width={100} />
        </button>
    </form>
</div>

  )
}

export default Search
