import React from 'react'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <>
      <div className='bg-n-6 flex flex-col md:flex-row px-8 md:px-[10rem] text-gray-400 gap-8 md:gap-32 py-8 md:py-14'>
        <div className='flex-1'>
          <div className=' w-[20rem] font-bold text-2xl md:text-3xl text-n-8'>Dwello</div>
          Dwello is a leading real estate platform committed to making your home buying experience seamless and stress-free. With a focus on expertise, integrity, and unmatched personalized service, we help you find your dream home with ease.
          
        </div>
        
        <div className='flex-1 md:flex-col '>
          <div className='font-bold text-lg md:text-xl text-n-8'>About</div>
          <div>Careers</div>
          <div>Our Team</div>
          <div>Resources</div>
        </div>
        
        <div className='flex-1  md:flex-col'>
          <div className='font-bold text-lg md:text-xl text-n-8'>Support</div>
          <div>FAQ</div>
          <div>Contact Us</div>
          <div>Help Center</div>
          <div>Terms of Services</div>
        </div>
        
        <div className='flex-1 md:flex-col'>
          <div className='font-bold text-lg md:text-xl text-n-8'>Find Us</div>
          <div>Events</div>
          <div>Locations</div>
          <div>Newsletters</div>
        </div>
        
        <div className='flex-1 mt-4 md:mt-0 md:ml-4 flex justify-center md:justify-start'>
          
          {socialMedia.map((social, index) => (
            <img 
              key={social.id} 
              src={social.icon} 
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>

      <div className='w-full bg-n-6 text-center py-4 border-t border-gray-700 text-n-8'>
        <p className="font-poppins font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-white">
          Copyright Ⓒ 2024 Dwello. All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
