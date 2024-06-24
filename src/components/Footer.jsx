import React from 'react'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <>
    <div className='bg-n-6 flex px-[10rem] text-gray-400 gap-32 py-14'>
        <div>
            <div className='font-bold text-3xl text-n-8'>Dwello</div>
            <div>wertyuiopxcvgbhjkxcvbnm,</div>
        </div>
        <div className='flex-col '>
            <div className='font-bold text-xl text-n-8'>About</div>
            <div>Careers</div>
            <div>Our Team</div>
            <div>Resoursec</div>
        </div>
        <div className='flex-col '>
            <div className='font-bold text-xl text-n-8'>Support</div>
            <div>FAQ</div>
            <div>Contact us</div>
            <div>Help Center</div>
            <div>Terms of Services</div>
        </div>
        <div className='flex-col '>
            <div className='font-bold text-xl text-n-8'>Find us</div>
            <div>Events</div>
            <div>Locations</div>
            <div>Newlleters</div>
        </div>
        <div className='flex mt-12'>
            
           {socialMedia.map((social, index) =>(
            <img key= {social.id} src={social.icon} alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
           ))}
        </div>
    </div>
    <div className='w-full bg-n-6 text-center  text-xl border-2 text-n-8'>
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Dwello. All Rights Reserved.
      </p></div>
    </>

  )
}

export default Footer
