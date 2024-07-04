import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Houses from "../Houses"
import HouseDesRight from './HouseDesRight';
import { HouseRatingBar } from '../../constants';

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


  return (
    <>
      <div className='flex gap-12'>
        <div className='w-[58.5%]'>
          {/* Right Section */}
          <div className="text-n-6 mb-4 mt-4">
            <Link to={"/houseDetails"}><span className='flex justify-end'>Expand Page for more Details</span></Link>
            <h1 className="text-3xl font-bold">1 BHK Flat For Sale in Srishti Oasis</h1>
            <span className="text-2xl ">Bhandup West, Mumbai</span>
            <span className=" flex text-3xl font-bold justify-end ">₹1 Cr</span>
          </div>

          <div id="gallery" className="relative  shadow-2xl  rounded-lg" data-carousel="slide">
            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden  md:h-[20rem] shadow-2xl rounded-lg">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="min-w-full"
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
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
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div className='max-w-[55rem]'>
            <div className="relative p-2 mx-20 border-2 mt-3 flex gap-9 rounded-2xl bg-n-6 text-n-7 items-center justify-center">
              <span>4 Bedrooms</span>
              <span>3 Bathrooms</span>
              <span>Fully Furnished</span>
            </div>
          </div>

          <div className="border-4 border-n-8 border-double mt-4 p-6 rounded-2xl bg-n-1 shadow-md shadow-n-8">
            <div className="flex w-full mb-6">
              <div className="w-full">
                <span className="text-gray-500">Area</span>
                <h1 className="font-bold">1200 sq ft.</h1>
              </div>
              <div className="w-full">
                <span className="text-gray-500">Floor</span>
                <h1 className="font-bold">3 (out of 6 Floors)</h1>
              </div>
              <div className="w-full">
                <span className="text-gray-500">Transaction Type</span>
                <h1 className="font-bold">Resale</h1>
              </div>
              <div className="w-full">
                <span className="text-gray-500">Facing</span>
                <h1 className="font-bold">West</h1>
              </div>
            </div>
            <div className="flex mb-9">
              <div className="w-full">
                <span className="text-gray-500">Status</span>
                <h1 className="font-bold">Ready to move</h1>
              </div>
              <div className="w-full">
                <span className="text-gray-500">Type of Ownership</span>
                <h1 className="font-bold">Freehold</h1>
              </div>
              <div className="w-full">
                <span className="text-gray-500">Furnished Status</span>
                <h1 className="font-bold">Full Furnished</h1>
              </div>
              <div className="w-full">
                <span className="text-gray-500">Age of Construction</span>
                <h1 className="font-bold">10 to 15 years</h1>
              </div>
            </div>

            <button type='button' className="  relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-2 px-6 font-semibold 
        rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 ">
              <span className="relative z-10">Contact Owner </span>
            </button>

          </div>
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
            <button type='button' className="  relative overflow-hidden bg-gradient-to-r from-green-400 to-n-6 text-white py-2 px-6 font-semibold 
        rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 mb-6">
              <span className="relative z-10">Download Brochure</span>
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

          <div className='border-2 mt-5 px-6 '>
            <h1 className='py-3 h5 font-bold '>Landmark</h1>

            <div className='sm:grid sm:grid-cols-2 gap-5 ' >
              <div className='border-2 shadow-lg px-4 py-3'>
                <span  className='text-xl font-bold '>Educational Institute</span>
                {/* <span className='justify-end' >icon</span> */}
                <span className='flex'>Sahayadri Vidya Mandir. <strong> (3.0Km)</strong></span>
                <span>Dg Khetan International School. <strong> (6.0Km)</strong></span>
              </div>
              <div className='border-2'>b</div>
              <div className='border-2'>c</div>
              <div className='border-2'>d</div>
            </div>

          </div>

        </div>
        <div className='mt-5 w-[29%]'>
          <HouseDesRight />
        </div>

      </div>
    </>

  );
};

export default HouseDes;
