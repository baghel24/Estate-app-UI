import React, { useEffect } from 'react';
import { services } from '../constants';
import { ServiceBG } from '../assets';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Qualities = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of the animation
    });
  }, []);

  return (
    <>
      <section
        id='services'
        className='bg-cover bg-center py-8 px-4 md:px-[5rem] bg-no-repeat md:flex-row items-center justify-center min-h-screen overflow-hidden'
        style={{ backgroundImage: `url(${ServiceBG})` }}
      >
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold text-n-6'>Why Choose Us</h1>
          <p className='mt-4 text-base md:text-lg max-w-xl mx-auto font-bold text-n-6/90'>
            Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
          </p>
        </div>

        <div className='flex flex-wrap justify-center w-full gap-6 md:gap-9 my-8'>
          {services.map((service, index) => (
            <div
              key={service.id}
              className='w-full sm:w-[48%] lg:w-[30%] bg-n-1 p-6 text-n-6 rounded-xl hover:shadow-2xl hover:shadow-n-9 hover:scale-105 transform transition-all duration-300 flex flex-col items-center mb-6'
              data-aos="fade-right" // Apply AOS animation
              data-aos-delay={`${index * 100}`} // Delay each box by 200ms
            >
              <img
                src={service.icon}
                alt="icon"
                className='px-2 py-1 bg-n-8 rounded-lg w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] mb-4'
              />
              <h1 className='text-lg md:text-xl font-bold text-center'>{service.id}</h1>
              <p className='text-center text-sm md:text-base mt-2'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Qualities;
