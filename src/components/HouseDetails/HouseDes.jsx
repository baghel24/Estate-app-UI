import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      {/* Right Section */}
      <div className="text-n-6">
        <h1 className="h4 font-bold">Heading</h1>
        <p className="mb-4">Description</p>
      </div>

      <div id="gallery" className="relative mx-[2.3rem] w-[35rem] shadow-2xl rounded-lg" data-carousel="slide">
        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden md:h-[18rem] shadow-2xl rounded-lg">
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

      <div className="relative p-2 mx-20 border-2 mt-3 flex gap-9 rounded-2xl bg-n-6 text-n-7 items-center justify-center">
        <span>4 Bedrooms</span>
        <span>3 Bathrooms</span>
        <span>Fully Furnished</span>
      </div>

      <div className="border-4 border-n-8 border-double mt-4 p-2 rounded-2xl bg-n-1 shadow-md shadow-n-8">
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
        <div className="flex">
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
      </div>
    </div>
  );
};

export default HouseDes;
