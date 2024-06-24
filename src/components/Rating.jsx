import React from 'react'

const Rating = () => {
    return (
        <div className='py-8 bg-n-7'>
            <div className='text-center'>
                <h1 className='h2 font-bold text-n-6'>What People Say </h1>
                <h1 className='h2 font-bold text-n-6'>About Dwello</h1>
            </div>

            <div className='mt-16 flex mx-auto w-[89%] flex-row gap-14 '>
                <div className='flex-1 bg-n-8  text-n-6 rounded-xl shadow-md overflow-hidden'>
                <div className=' bg-cover bg-center h-[14rem]'
                style={{ backgroundImage: `url(${'src/assets/7.png'})` }}>
                </div>
                    <div className='flex mt-5'>
                    <div className=' bg-cover rounded-full w-[3rem] h-[3rem]'
                style={{ backgroundImage: `url(${'src/assets/p2.png'})` }}>
                </div>
                        <div className='mx-3'>
                        <h1 className=' font-bold text-xl'>Sarah Nguyen</h1>
                        <h2>san fransisco</h2>
                        </div>
                        <div className='bg-n-1 flex px-1 items-center justify-center text-center h-6 w-14 gap-2 rounded-sm'>
                            <img src="src\assets\icons8-rating-30.png" alt="icon" className='rounded-full w-[1.2rem] h-[1.2rem]' />
                            4.2
                        </div>
                    </div>
                    <div>
                    </div>
                    <p className='px-6 mt-4'>Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.</p>
                </div>
                <div className='flex-1 bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
                <div className=' bg-cover bg-center h-[14rem]'
                style={{ backgroundImage: `url(${'src/assets/9.png'})` }}>
                </div>
                    <div className='flex mt-5'>
                        <div className=' bg-cover rounded-full w-[3rem] h-[3rem]'
                style={{ backgroundImage: `url(${'src/assets/p2.png'})` }}>
                </div>
                        <div className='mx-3'>
                        <h1 className=' font-bold text-xl'>Michael Rodriguez</h1>
                        <h2>san fransisco</h2>
                        </div>
                        <div className='bg-n-1 flex px-1 items-center justify-center text-center h-6 w-14 gap-2 rounded-sm'>
                            <img src="src\assets\icons8-rating-30.png" alt="icon" className='rounded-full w-[1.2rem] h-[1.2rem]' />
                            4.5
                        </div>
                    </div>
                    <div>
                    </div>
                    <p className='px-6 mt-4'>
                    I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!                        </p>
                </div>
                <div className='flex-1 bg-n-8 text-n-6 rounded-xl shadow-md overflow-hidden'>
                    <div className=' bg-cover bg-center h-[14rem]'
                style={{ backgroundImage: `url(${'src/assets/8.png'})` }}>
                </div>
                    
                    <div className='flex mt-5'>
                    <div className=' bg-cover rounded-full w-[3rem] h-[3rem]'
                style={{ backgroundImage: `url(${'src/assets/p1.png'})` }}>
                </div>
                        <div className='mx-3'>
                        <h1 className=' font-bold text-xl'>Emily Johnson</h1>
                        <h2>Los Angles</h2>
                        </div>
                        <div className='bg-n-1 flex px-1 items-center justify-center text-center h-6 w-14 gap-2 rounded-sm'>
                            <img src="src\assets\icons8-rating-30.png" alt="icon" className='rounded-full w-[1.2rem] h-[1.2rem]' />
                            4.4
                        </div>
                    </div>
                    <div>
                    </div>
                    <p className='px-6  py-4'>
                    Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!                        </p>
                </div>
            </div>
            <div className='my-11 flex justify-center gap-8'>
            <button class="flex items-center bg-n-6 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 
            font-semibold tracking-widest rounded-md hover:bg-n-9 duration-300 hover:gap-2 hover:translate-x-3">
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 6L5 12M5 12L11 18M5 12H19"
    // d="M13 6L19 12M19 12L13 18M19 12H5"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
  
</button>
<button class="flex items-center bg-n-6 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md 
    hover:bg-n-9 duration-300 hover:gap-2 hover:translate-x-3">
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    //   d="M11 6L5 12M5 12L11 18M5 12H19"
    d="M13 6L19 12M19 12L13 18M19 12H5"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
  
</button>
            </div>

        </div>
    )
}

export default Rating
