import React, { useEffect } from 'react';
import { houseCardDetails } from '../constants';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Houses = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
    });
  }, []);
  return (
    <section 
      className='py-9 bg-cover bg-center items-center justify-center min-h-screen overflow-hidden'
      style={{ backgroundImage: `url('src/assets/hh-bg.png')` }}
    >
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl font-bold text-n-6'>Our Popular Residences</h1>
        <p className='mt-2 text-base md:text-lg font-bold text-n-6/90'>Most recommended sites</p>
      </div>

      <div className='mt-10 md:mx-[5rem] mx-4 flex flex-wrap justify-center gap-7'>
        {houseCardDetails.map((house, index) => (
          <div 
            key={house.id} 
            className='w-full sm:w-[45%] lg:w-[23%] bg-gradient-to-t from-n-7 to-n-9 text-n-1 rounded-xl shadow-2xl 
            overflow-hidden'
            data-aos="flip-up" // Apply AOS animation
            data-aos-delay={`${index * 150}`} // Stagger animation delays
          >
            <div 
              className='bg-cover bg-center h-[14rem] md:h-[15rem] hover:scale-105 transition-transform duration-300' 
              style={{ backgroundImage: `url(${house.houseImage})` }}
            >
            </div>
            <div className="relative group p-4 max-w-sm mx-auto">
            <h1 className='text-lg text-n-6 font-bold'>{house.houseName}</h1>
              <div className=" py-2 text-lg md:text-xl font-bold flex items-center gap-2 text-n-6">
                <img src={house.locationIcon} alt="icon" className='w-5 h-5 md:w-6 md:h-6 mt-[-.2rem]' />
                {house.location}
              </div>
              <div className="flex justify-between  text-sm md:text-md font-bold text-n-6 mb-4">
                <div className='flex items-center gap-2'>
                  <img src={house.roomsIcon} alt="icon" className='w-5 h-5 md:w-6 md:h-6' />
                  {house.rooms} Rooms
                </div>
                <div className='flex items-center gap-2'>
                  <img src={house.sizeIcon} alt="icon" className='w-5 h-5 md:w-6 md:h-6' />
                  {house.Size} sq ft
                </div>
              </div>
              <div className=" py-2 text-lg md:text-xl font-bold flex justify-end items-center text-n-6">
              ₹{house.price}
              </div>
              <Link to={"/houseDetails"}>
              <button className="absolute opacity-0 bg-gradient-to-r from-green-400 to-n-6 group-hover:opacity-100 bottom-2 left-4 text-white py-1 px-4 rounded-lg transition-opacity duration-300 ease-in-out">
               <span>View Details</span> 
              </button></Link>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-8'>
        <div className="w-full max-w-xs h-14 flex items-center justify-center cursor-pointer">
          <div className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow text-n-6 transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 bg-n-7 border-2 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ease-in-out bg-gradient-to-r from-green-400 to-n-6 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 text-n-6"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 text-n-1"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <Link to={"/listpage"}>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore More
            </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Houses;
