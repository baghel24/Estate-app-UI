import React from 'react'

const Rating = () => {
    return (
        <div className='py-8 bg-n-7'>
            <div className='text-center'>
                <h1 className='h2 font-bold text-n-6'>What People Say </h1>
                <h1 className='h2 font-bold text-n-6'>About Dwello</h1>
            </div>

            <div className='mt-16 flex mx-auto w-[89%] flex-row gap-14 '>
                <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl shadow-md overflow-hidden'>
                    <div className=' bg-n-1'>
                        <img src="src/assets/icons8-books-64.png" alt="icon" />
                    </div>
                    <div className='flex mt-5'>
                        <img src="src/assets/icons8-books-64.png" alt="icon" className='rounded-full w-[3rem] h-[3rem]' />
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
                <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl shadow-md overflow-hidden'>
                    <div className=' bg-n-1'>
                        <img src="src/assets/icons8-books-64.png" alt="icon" />
                    </div>
                    <div className='flex mt-5'>
                        <img src="src/assets/icons8-books-64.png" alt="icon" className='rounded-full w-[3rem] h-[3rem]' />
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
                <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl shadow-md overflow-hidden'>
                    <div className=' bg-n-1'>
                        <img src="src/assets/icons8-books-64.png" alt="icon" />
                    </div>
                    <div className='flex mt-5'>
                        <img src="src/assets/icons8-books-64.png" alt="icon" className='rounded-full w-[3rem] h-[3rem]' />
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
                    <p className='px-6 mt-4'>
                    Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!                        </p>
                </div>
            </div>
        </div>
    )
}

export default Rating
