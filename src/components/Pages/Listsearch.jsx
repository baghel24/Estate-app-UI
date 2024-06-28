import React from 'react'

const Listsearch = () => {
  return (
    <div>
      <div>
      <h1 className='h4  text-n-6 font-bold'>Search Results for</h1>


      {/* Content Section */}
      <div className='relative bg-n-7 h-auto px-6 py-3 rounded-lg shadow-md hover:shadow-green-200'>
        <div className="flex items-center relative w-full mb-3">
          <span className="absolute left-3">
            <img src="src/assets/icons8-location-64.png" alt="Location Icon" className="h-5 w-5" />
          </span>
          <input
            id="location"
            type="text"
            name="location"
            placeholder="City Location"
            className="w-full pl-11 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
          />
        </div>

        <div className='relative flex mt-3 gap-5'>
          <div className='items-center relative w-full mb-3'>
            <label htmlFor="type">Type</label>
            <select name="type" id="type" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6">
              <option value="buy">Buy</option>
              <option value="Rent">Rent</option>
              <option value="sell">Sell</option>
            </select>
          </div>

          <div className='items-center relative w-full mb-3'>
            <label htmlFor="category">Category</label>
            <select name="category" id="category" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6">
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
            </select>
          </div>
          <div className='items-center relative w-full mb-3'>
            <label htmlFor="condition">Condition</label>
            <select name="condition" id="condition" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6">
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>
          <div className=" items-center relative w-full mb-3">
          <label htmlFor="category">Min Price</label>
            <input
              id="minprice"
              type="number"
              name="minprice"
              min={0}
              max={100000000}
              placeholder=""
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
            />
          </div>

          <div className=" items-center relative w-full mb-3">
          <label htmlFor="category">Max Price</label>
            
            <input
              id="maxprice"
              type="number"
              name="maxprice"
              min={0}
              max={100000000}
              placeholder=""
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
            />
          </div>
          <div className=" items-center relative w-full mb-3">
          <label htmlFor="category">Bedrooms</label>
            
            <input
              id="maxprice"
              type="number"
              name="maxprice"
              min={0}
              max={20}
              placeholder=""
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-n-6"
            />
          </div>
          <button className="relative h-[4rem] bg-white text-gray-800 py-3 px-10 flex items-center justify-center text-lg font-semibold rounded-lg 
         shadow-lg cursor-pointer overflow-hidden group hover:bg-n-6  duration-300	">
      <span className="relative flex items-center justify-center z-10">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"
            className="fill-current  group-hover:text-white "
          />
        </svg>
      </span>
      </button>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Listsearch
