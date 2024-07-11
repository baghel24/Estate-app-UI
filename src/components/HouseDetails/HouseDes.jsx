import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Houses from "../Houses"
import HouseDesRight from './HouseDesRight';
import { HouseRatingBar, Landmark,houseCardDetails } from '../../constants';
import HouseShortDes from './HouseShortDes';

// import HouseDetails from '../Pages/HouseDetails';
const HouseDes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    "src/assets/5.png",
    "src/assets/2.png",
    "src/assets/8.png",
    "src/assets/3.png",
    "src/assets/4.png",
    "src/assets/6.png",
    "src/assets/7.png",
  ];

  // Function to handle the previous slide
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  // Function to handle the next slide
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  // Remove the transition flag after the animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Adjust this duration to match the CSS transition duration

    return () => clearTimeout(timer);
  }, [activeIndex]);


  // State to track whether the full text is shown
  const [showMore, setShowMore] = useState(false);

  // Function to toggle the state
  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  // Full text to be shown or hidden
  const fullText = "Bhandup West is a developing affordable suburb in Western Mumbai with mix of residential and commercial properties. Some of the key areas in the locality include Bhandup Complex, Azad Nagar, Lokmanya Nagar, Sarvodaya Nagar. The neighbourhood localities of Bhadup West are Powai & Vihar Lake, Mulund West, Tata Nagar, Bhandup East and Vikhroli. Accel Group, Lodha Group, Kalpataru Group are some of the key developers of the locality developing projects such as Accel Belvedere, Kalpataru Crest, Celestial Tower, Lodha Imperia, etc.";

  // Truncated text to show when the full text is hidden
  const truncatedText = fullText.slice(0, 100) + '...'; // Adjust the number of characters as needed
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === houseCardDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? houseCardDetails.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section >
        <div className='flex gap-12'>
        <div className='w-[58.5%]'>
          <HouseShortDes/>
          <div className='border-2 mt-5 px-6'>
            <h1 className=' py-3 h5 font-bold'>More Deatails</h1>
            <div className=' text-xl py-5 text-n-6 space-y-4'>
              <div className=' flex '>
                <h1 className='w-[40%] text-n-6/70'>Price Breakdown</h1>
                <span className='w-full font-bold'>₹1 Cr | ₹3,000</span>
              </div>
              <div className=' flex'>
                <h1 className='w-[40%] text-n-6/70'>Address</h1>
                <span className='w-full font-bold'>Srishti Oasis New Rajaram Wadi Bhandup West Mumbai Maharashtra 400078, Bhandup West, Mumbai
                  <br></br>- Central Mumbai, Maharashtra</span></div>
              <div className=' flex   '>
                <h1 className='w-[40%] text-n-6/70'>Landmark</h1>
                <span className='w-full font-bold'>Air Fabric Duct India</span></div>
              <div className=' flex g'>
                <h1 className='w-[40%] text-n-6/70'>Flooring</h1>
                <span className='w-full font-bold'>Vitrified, Wooden</span></div>
              <div className=' flex '>
                <h1 className='w-[40%] text-n-6/70'>Developer</h1>
                <span className='w-full font-bold'>Kv Group</span></div>
              <div className=' flex '>
                <h1 className='w-[40%] text-n-6/70'>Additional Rooms</h1>
                <span className='w-full font-bold'>1 Store Room</span></div>
              <div className=' flex '>
                <h1 className='w-[40%] text-n-6/70'>Parking</h1>
                <span className='w-full font-bold'>2 covered parking</span></div>


            </div>

          </div>
          <div className='border-2 mt-5 px-6 '>
            <h1 className=' py-3 h5 font-bold'>
              Amenties</h1>

            <div className='flex w-full mb-4 py-3'>
              <div className='flex w-full gap-4 '>
                <img src="src\assets\icons8-bulb-64.png" alt="" className='w-10 ' />
                <h1 className=' text-xl text-n-6 mt-2'>Power Back up</h1>
              </div>
              <div className='flex w-full gap-4'>
                <img src="src\assets\icons8-bulb-64.png" alt="" className='w-10 ' />
                <h1 className=' text-xl text-n-6 mt-2'>Rain Water Harvesting</h1>
              </div>
              <div className='flex w-full gap-4'>
                <img src="src\assets\icons8-gym-48.png" alt="" className='w-10 ' />
                <h1 className=' text-xl text-n-6 mt-2'>Gymnasium</h1>
              </div>
            </div>
            <div className='flex w-full py-3 mb-4'>
              <div className='flex w-full gap-4'>
                <img src="src\assets\icons8-user-shield-40.png" alt="" className='w-9 h-9 ' />
                <h1 className=' text-xl text-n-6 mt-1'>Security</h1>
              </div>
              <div className='flex w-full gap-4'>
                <img src="src\assets\icons8-chess-64.png" alt="" className='w-10' />
                <h1 className=' text-xl text-n-6 mt-2'>Indoor Games Room</h1>
              </div>
              <div className='flex w-full gap-4'>
                <img src="src\assets\icons8-bulb-64.png" alt="" className='w-10 ' />
                <h1 className=' text-xl text-n-6 mt-2'>Fire Fighting Equipment</h1>
              </div>
            </div>
            <button type='button' className=" flex group relative  overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-2 px-6 font-semibold 
        rounded-3xl shadow-xl transform transition-all duration-500  mb-6">
          <svg
    width="30px"
    height="30px"
    class="rotate-0 transition ease-out duration-300 scale-100 group-hover:-rotate-45 group-hover:scale-75"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V11H17C18.933 11 20.5 12.567 20.5 14.5C20.5 16.433 18.933 18 17 18H16.9C16.3477 18 15.9 18.4477 15.9 19C15.9 19.5523 16.3477 20 16.9 20H17C20.0376 20 22.5 17.5376 22.5 14.5C22.5 11.7793 20.5245 9.51997 17.9296 9.07824C17.4862 6.20213 15.0003 4 12 4C8.99974 4 6.51381 6.20213 6.07036 9.07824C3.47551 9.51997 1.5 11.7793 1.5 14.5C1.5 17.5376 3.96243 20 7 20H7.1C7.65228 20 8.1 19.5523 8.1 19C8.1 18.4477 7.65228 18 7.1 18H7C5.067 18 3.5 16.433 3.5 14.5C3.5 12.567 5.067 11 7 11H8V10ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16.5858L9.70711 15.2929C9.31658 14.9024 8.68342 14.9024 8.29289 15.2929C7.90237 15.6834 7.90237 16.3166 8.29289 16.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L15.7071 16.7071C16.0976 16.3166 16.0976 15.6834 15.7071 15.2929C15.3166 14.9024 14.6834 14.9024 14.2929 15.2929L13 16.5858V11Z"
        fill="#FFFFFF"
      ></path>
    </g>
  </svg>
              <span className="relative z-10 mt-1 ml-1">Download Brochure</span>
            </button>
          </div>
          <div className='border-2 mt-5 px-6 h-auto'>
            <h1 className='py-3 h5 font-bold '>About the area</h1>

            <div className='flex  gap-9'>
              <div className=' border-2 flex gap-9 mb-4 px-4 py-2 rounded-3xl shadow-lg'>
                <h1 className='text-xl text-n-6 font-bold '>Rating</h1>

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
                  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                  <a href="#" className=" mx-2 px-2 text-sm font-medium text-gray-900 underline hover:no-underline border-l-2">73 reviews</a>
                </div>

              </div>
              <div className='border-2 flex gap-9 mb-4 px-4 py-2  rounded-3xl shadow-lg '>
                <h1 className='text-xl text-n-6 font-bold '>Ranked</h1>
                <span className='text-lg text-gray-600'>232/1250 Localities</span>
              </div>
            </div>
            <div>


              <div class=" gap-8 sm:grid sm:grid-cols-3 mb-11">

                {HouseRatingBar.map((rating) => (
                  <div key={rating.id} class="mb-[-1.5rem]">
                    <dl>
                      <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating.label}</dt>
                      <dd class="flex items-center">
                        <div class="w-full bg-gray-200 rounded h-1.5 dark:bg-gray-700 me-2">
                          <div class="bg-yellow-400 h-1.5 rounded dark:bg-blue-500 " style={{ width: rating.widthPercentage }} ></div>
                        </div>
                        <span class="text-sm font-medium text-gray-500 dark:text-gray-400 ">{rating.rate}</span>
                      </dd>
                    </dl>

                  </div>
                ))}

              </div>
              <div className="text-sm mb-6">
                <p>{showMore ? fullText : truncatedText}</p>
                <button onClick={toggleShowMore} className=" underline mt-2 text-blue-500 hover:text-blue-700">
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>

          <div className='border-2 mt-5 px-6 h-auto'>
            <h1 className='py-3 h5 font-bold '>Landmark</h1>

            <div className='sm:grid sm:grid-cols-2 gap-5 mb-6' >
              {Landmark.map((landmark) => (
                <div key={landmark.id} className=''>
                    <div className='border-2 shadow-lg px-4 py-3 '>
                <div className='flex w-full'>
                <h1  className='text-xl font-bold w-full'>{landmark.label}</h1>
                <img src={landmark.icon} alt="icon"  className='w-14 h-14'/>
                </div>
                <span className='flex'>{landmark.l1}<strong> (3.0Km)</strong></span>
                <span>{landmark.l2} <strong> (6.0Km)</strong></span>
              </div>
                </div>
              ))}
            </div>

          </div>

        </div>
        <div className='mt-5 w-[29%]'>
          <HouseDesRight />
        </div>
        </div>
        <div className='relative border-2 mt-8 px-4 h-auto  w-[90%] '>
  <h1 className='py-3 text-2xl font-bold'>Similar Properties</h1>
  <div className='flex flex-wrap  gap-5 mb-6 w-full overflow-hidden'>
    
    {houseCardDetails.map((house) => (
      <div 
        key={house.id} 
        className='w-full sm:w-[45%] lg:w-[20%] bg-gradient-to-t from-n-7 to-n-9 text-n-1 rounded-xl shadow-2xl overflow-hidden transition-transform duration-300'
      >
        <div 
          className='bg-cover bg-center h-[11rem] md:h-[12rem] hover:scale-105 transition-transform duration-300'
          style={{ backgroundImage: `url(${house.houseImage})` }}
          alt={`Image of ${house.houseName}`}
          aria-label={`Image of ${house.houseName}`}
        >
        </div>
        
        <div className="relative group p-4 max-w-sm mx-auto">
          <h2 className='text-lg text-n-6 font-bold'>{house.houseName}</h2>
          
          <div className="py-2 text-lg md:text-xl font-bold flex items-center gap-2 text-n-6">
            <img 
              src={house.locationIcon} 
              alt="Location icon" 
              className='w-5 h-5 md:w-6 md:h-6' 
              aria-hidden="true"
            />
            {house.location}
          </div>
          
          <div className="flex justify-between text-sm md:text-md font-bold text-n-6 mb-4">
            <div className='flex items-center gap-2'>
              <img 
                src={house.roomsIcon} 
                alt="Rooms icon" 
                className='w-5 h-5 md:w-6 md:h-6' 
                aria-hidden="true"
              />
              {house.rooms} Rooms
            </div>
            <div className='flex items-center gap-2'>
              <img 
                src={house.sizeIcon} 
                alt="Size icon" 
                className='w-5 h-5 md:w-6 md:h-6' 
                aria-hidden="true"
              />
              {house.Size} sq ft
            </div>
          </div>
          
          <div className="px-6 py-2 text-lg md:text-xl font-bold flex justify-end items-center gap-2 text-n-6">
            $ {house.price}
          </div>
          
          <button 
            className="absolute opacity-0 bg-gradient-to-r from-green-400 to-n-6 group-hover:opacity-100 bottom-2 left-4 text-white py-1 px-4 rounded-lg transition-opacity duration-300 ease-in-out"
            aria-label={`View details for ${house.houseName}`}
          >
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
  {/* Slider Controls */}
  <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handlePrev}
              disabled={isTransitioning}
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={handleNext}
              disabled={isTransitioning}
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg
                  className="w-4 h-4 text-n-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
</div>

      </section> 
      
    </>

  );
};

export default HouseDes;
