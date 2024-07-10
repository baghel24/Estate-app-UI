import React, { useEffect } from 'react';
import { conatctimage } from '../assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
    });
  }, []);
  return (
    <div id='contact' className="py-8 px-2 mx-5 bg-cover bg-center md:mx-auto max-w-screen-xl" >
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Do You Have Any Questions?</h1>
        <h1 className="text-xl md:text-2xl text-gray-900">Get Help From Us</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16'>
        <button className="group relative bg-sky-100 h-12 w-[15rem] shadow-xl hover:shadow-green-300 text-left p-3 text-gray-500 text-base font-bold rounded-lg overflow-hidden 
          before:absolute before:w-14 before:h-14 before:right-1 before:top-1 before:z-10 scale-x-100 before:bg-gradient-to-r from-green-500 to-n-6 before:rounded-full before:blur-lg
          after:absolute after:z-10 after:w-20 after:h-20 after:bg-gradient-to-r from-green-500 to-n-6 after:right-8 after:top-3 after:rounded-full after:blur
          transition-all duration-800 ease-in-out hover:before:blur-none hover:before:right-16 hover:before:top-8 hover:after:scale-150 hover:after:blur-none hover:after:-right-2 hover:bg-n-8 hover:text-n-6 hover:underline hover:underline-offset-4 hover:decoration-2"
        >
          Chat With Us
        </button>
        <button className="group relative bg-sky-100 h-12 w-[15rem] shadow-xl hover:shadow-green-300 text-left p-3 text-gray-500 text-base font-bold rounded-lg overflow-hidden 
          before:absolute before:w-14 before:h-14 before:right-1 before:top-1 before:z-10 scale-x-100 before:bg-gradient-to-r from-green-500 to-n-6 before:rounded-full before:blur-lg
          after:absolute after:z-10 after:w-20 after:h-20 after:bg-gradient-to-r from-green-500 to-n-6 after:right-8 after:top-3 after:rounded-full after:blur
          transition-all duration-500 ease-in-out hover:before:blur-none hover:before:right-16 hover:before:top-8 hover:after:scale-150 hover:after:blur-none hover:after:-right-2 hover:bg-n-8 hover:text-n-6 hover:underline hover:underline-offset-4 hover:decoration-2"
        >
          Browse Q/A
        </button>
      </div>

      <div className='flex flex-col lg:flex-row justify-between mx-auto gap-6 lg:gap-16 my-9 py-6 px-4 lg:px-6'>
        {/* Image Container */}
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end'
        data-aos="fade-right">
          <img src={conatctimage} alt="Contact" className='max-w-full h-auto lg:h-[32rem] lg:mx-0 ' />
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-[45%] mt-7 lg:mt-0 max-w-md  flex flex-col bg-n-7 rounded-lg shadow-2xl hover:shadow-green-300 p-6 "
        data-aos="fade-left">
          <h2 className="text-2xl font-bold text-center mb-4 text-n-6">Contact Us</h2>

          <form className="flex flex-col space-y-4">
            <input
              required
              className="w-full h-12 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
              type="text"
              placeholder="Name"
            />
            <input
              required
              className="w-full h-12 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
              type="email"
              placeholder="Email"
            />
            <input
              required
              className="w-full h-12 outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
              type="tel"
              placeholder="Number"
            />
            <textarea
              name="message"
              className="w-full h-[8rem] outline-none px-4 text-base rounded-xl bg-white border-2 hover:border-green-300 shadow-md focus:shadow-xl focus:shadow-n-8"
              placeholder="Message"
            ></textarea>
            <div className='flex justify-end'>
              <button
                type='submit'
                className="w-[100px] text-center bg-gradient-to-r from-green-500 to-n-6 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
