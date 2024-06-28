import React from 'react';
import { services } from '../constants';

const Qualities = () => {
  return (
    <section id='services' className="py-8 mx-[5rem]" >
      <div className='text-center'>
        <h1 className='h2 font-bold text-n-6'>Why Choose Us</h1>
        <p className='my-4 body-1 max-w-xl mx-auto font-bold text-n-6/90'>
          Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </p>
      </div>
      
      

      <div className='flex flex-wrap justify-center w-full gap-9 my-4'>
      {services.map((service) => (
        <div key={service.id} className='w-full sm:w-[48%] lg:w-[30%] bg-n-1 p-4 text-n-6 rounded-xl hover:shadow-2xl hover:shadow-n-9 hover:scale-105  flex flex-col items-center mb-6'>
          <img
            src={service.icon}
            alt="icon"
            className='px-2 py-1 bg-n-8 rounded-lg w-[3.5rem] mb-4'
          />
          <h1 className='px-6 py-4 text-xl font-bold text-center'>{service.id}</h1>
          <p className='px-6 text-center'>{service.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Qualities;
