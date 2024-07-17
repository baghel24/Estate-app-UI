import React from "react";
import { cards } from '../constants';
import { ratingicon } from '../assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Rating = () => {
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

  return (
    <div className='py-8 px-4 md:px-[5rem] bg-n-7'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl font-bold text-n-6'>What People Say</h1>
        <h1 className='text-2xl md:text-4xl font-bold text-n-6'>About Dwello</h1>
      </div>

      <div className='slider-container py-12'>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className='slide'>
              <div
                className='flex-1 bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden 
                transition-transform duration-300  hover:scale-110'
              >
                <div
                  className='bg-cover bg-center h-[14rem] md:h-[14rem] w-full md:w-[40rem] transition-transform duration-300'
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <div className='flex mt-5 px-6 items-center'>
                  <div
                    className='bg-cover rounded-full w-[3rem] h-[3rem]'
                    style={{ backgroundImage: `url(${card.profile})` }}
                  ></div>
                  <div className='mx-3'>
                    <h1 className='font-bold text-md'>{card.name}</h1>
                    <h2 className='text-sm'>{card.location}</h2>
                  </div>
                  <div className="flex justify-end mt-4 px-6">
                    <div className='bg-n-1 flex text-sm items-center h-6 w-11 gap-1 rounded-sm'>
                      <img src={ratingicon} alt='icon' className='rounded-full w-[1rem] h-[1rem]' />
                      {card.rating}
                    </div>
                  </div>

                </div>
                <p className='text-sm px-6 mt-2 mb-4 h-16'>{card.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Rating;
