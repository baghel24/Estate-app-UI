import React from 'react'

const Houses = () => {
  return (
    <div className='py-8'>
      <div className='text-center'>
        <h1 className='h2 font-bold text-n-6'>Our Popular Residences</h1>
      </div>
      
      <div className='mt-16 flex mx-auto w-[89%] flex-row gap-14 '>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl shadow-md overflow-hidden'>
        <div className=' bg-n-1'>
        <img src="src/assets/icons8-books-64.png" alt="icon"  />
        </div>
        <h1 className='px-6 py-4 text-xl font-bold'>Expert Guidance</h1>
        <p className='px-6'>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl'>
        <img src="src\assets\icons8-community-50.png" alt="icon" className='px-6 py-4 bg-n-1 rounded-lg w-[7.5rem]' />
        <h1 className='px-6 py-4 text-xl font-bold'> Personalized Service</h1>
        <p className='px-6'>Our services adapt to your unique needs, making your journey stress-free</p>
        </div>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl'>
        <img src="src\assets\icons8-process-100.png" alt="icon" className='px-6 py-4 bg-n-1 rounded-lg w-[7.5rem]' />
        <h1 className=' px-6 py-4 text-xl font-bold'> Transparent Process</h1>
        <p className='px-6'>Stay informed with our clear and honest approach to buying your home</p>
        </div>
      </div>
      <div className='flex justify-center'>
      {/* <button class="relative top-6 group cursor-pointer text-sky-50  overflow-hidden h-11 w-[10rem] rounded-md bg-n-6 p-2 flex justify-center items-center font-extrabold">
      <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-n-8"></div>
      <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
      <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-n-8"></div>
      <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-400"></div>
      <p class="z-10">Explore More</p>
      </button> */}
        <div class="w-full h-40 flex items-center justify-center cursor-pointer ">
          <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-n-6  transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 bg-n-7 border-2  group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-n-6 group-hover:h-full"
            ></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5 text-n-6"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-5 h-5 text-n-1"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
            <span
              class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
            >Explore More</span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Houses
