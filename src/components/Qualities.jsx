import React from 'react';

const Qualities = () => {
  return (
    <section id='services' className="py-8 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${'src/assets/qualities.bg.png'})` }}>
      <div className='text-center'>
        <h1 className='h2 font-bold text-n-6'>Why Choose Us</h1>
        <p className='my-4 body-1 max-w-xl mx-auto font-bold text-n-6/90'>
          Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </p>
      </div>
      
      <div className='flex mx-auto w-[89%] flex-row gap-9 my-14 '>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl hover:shadow-xl hover:shadow-green-300 border-2'>
          <img src="src/assets/icons8-books-64.png" alt="icon" className='px-6 py-4 bg-n-1 rounded-lg w-[7.5rem]' />
        <h1 className='px-6 py-4 text-xl font-bold'>Expert Guidance</h1>
        <p className='px-6'>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl hover:shadow-xl hover:shadow-green-300 border-2'>
        <img src="src\assets\icons8-community-50.png" alt="icon" className='px-6 py-4 bg-n-1 rounded-lg w-[7.5rem]' />
        <h1 className='px-6 py-4 text-xl font-bold'> Personalized Service</h1>
        <p className='px-6'>Our services adapt to your unique needs, making your journey stress-free</p>
        </div>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl hover:shadow-xl hover:shadow-green-300 border-2'>
        <img src="src\assets\icons8-process-100.png" alt="icon" className='px-6 py-4 bg-n-1 rounded-lg w-[7.5rem]' />
        <h1 className=' px-6 py-4 text-xl font-bold'> Transparent Process</h1>
        <p className='px-6'>Stay informed with our clear and honest approach to buying your home</p>
        </div>
        <div className='flex-1 bg-n-8 p-4 text-n-6 rounded-xl hover:shadow-xl hover:shadow-green-300 border-2'>
        <img src="src\assets\icons8-hand-shake-64.png" alt="icon" className='px-6 py-4 bg-n-1 rounded-lg w-[7.5rem]' />
        <h1 className=' px-6 py-4 text-xl font-bold'> Exceptional Support</h1>
        <p className='px-6 '>Providing peace of mind with our responsive and attentive customer service</p>
        </div>
      </div>
      
    </section>
  );
}

export default Qualities;
