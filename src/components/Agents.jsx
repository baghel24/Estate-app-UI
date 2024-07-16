import React from 'react';

import { agentCards } from '../constants';

const Agents = () => {
  return (
    <section
      id="agents"
      className="bg-no-repeat items-center justify-center  overflow-hidden"
    >
      <div className="text-center mb-8">
        <h1 className="text-xl lg:text-4xl font-bold text-n-6">Most Preferred Agents</h1>
        <p className="mt-4 text-base md:text-lg max-w-xl mx-auto font-bold text-n-6/90">
          These are some of the best rated Agents
        </p>
      </div>

      {/* Agent Cards */}
      <div className='flex py-10 mx-4 px-4 md:flex-row  md:px-[5rem] gap-4 flex-wrap'>
      {agentCards.map((agent) => (
       
      <div key={agent.id}  className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-[20remrem] w-[17rem] rounded-2xl shadow-2xl hover:duration-700">
      <div className="w-[17rem] h-[21rem] bg-n-7 text-gray-800">
        
        <div className="flex px-3 items-center gap-2 bg-gradient-to-r from-green-400 to-n-6">
          <div className="mt-4">
            <img src={agent.imageSrc} alt={`${agent.name}`} className="bg-cover rounded-t-lg w-[4rem] h-[4rem]" />
          </div>
          <div>
            <h1 className="text-lg text-n-7 font-bold">{agent.name}</h1>
            <p className="text-sm text-n-7/70">Preferred agent</p>
          </div>
        </div>
        <div className="px-3 mt-3 ">
          <h1 className="font-bold">{agent.group}</h1>
          <div className="flex  rounded-lg justify-between">
            <div className="border-r-2 border-n-6/70 px-9">
              <span className="text-lg font-bold">Since</span>
              <p className="text-sm">{agent.since}</p>
            </div>
            <div className="px-8">
              <span className="text-lg font-bold">Served</span>
              <p className="text-sm">{agent.served}+</p>
            </div>
          </div>
        </div>
        <div className="flex border-2 border-n-6/90 mx-1 mt-5 rounded-lg py-1">
          <div className="border-r-2 border-n-6/70 px-2">
            <span className="text-2xl font-bold">{agent.forSale}+</span>
            <p className="text-sm">Properties for sale</p>
          </div>
          <div className="px-3.5">
            <span className="text-2xl font-bold">{agent.forRent}+</span>
            <p className="text-sm">Properties for rent</p>
          </div>
        </div>
      </div>

      <div className="absolute bg-n-8 -bottom-[9rem] w-[17rem] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-n-6 font-bold text-sm">Rating: 
        <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-400 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  </div>
        </span>
        <span className="text-n-6 font-bold text-xl">Operating in:</span>
        <p className="text-neutral-800">{agent.operatingIn}</p>
        <p className="text-neutral-800"><b>Sale Price Range:</b> {agent.saleRange}</p>
        <p className="text-neutral-800"><b>Rent Price Range:</b> {agent.rentRange}</p>
      </div>
    </div> ))}
        {/* Add more <AgentCard /> components here if needed */}
      </div>
    </section>
  );
};

export default Agents;
