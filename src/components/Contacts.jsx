import React from 'react';

const Contacts = () => {
  return (
    <div id = 'contact' className="py-8 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${'src/assets/contact-bg.png'})` }}>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Do You Have Any Questions?</h1>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Get Help From Us</h1>
      </div>
      <div className='flex justify-center gap-16'>
      <button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-n-6  duration-500 before:duration-500 hover:duration-500 underline 
      underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none 
      hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-100 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 
      hover:text-n-6 relative bg-sky-100 h-12 w-[15rem] border text-left p-3 text-gray-500 text-base font-bold rounded-lg  overflow-hidden  
      before:absolute before:w-14 before:h-14  before:right-1 before:top-1 before:z-10 scale-x-100	
      before:bg-n-9 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20   
      after:bg-n-6 after:right-8 after:top-3 after:rounded-full after:blur">
  Chat With us
</button>
<button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-n-6  duration-500 before:duration-500 hover:duration-500 underline 
      underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none 
      hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-100 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 
      hover:text-n-6 relative bg-sky-100 h-12 w-[15rem] border text-left p-3 text-gray-500 text-base font-bold rounded-lg  overflow-hidden  
      before:absolute before:w-14 before:h-14  before:right-1 before:top-1 before:z-10 
      before:bg-n-9 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20   
      after:bg-n-6 after:right-8 after:top-3 after:rounded-full after:blur">
  Browse Q/A
</button>

      </div>
      <div className="w-full max-w-[400px] flex-col my-9 bg-n-8 rounded-lg shadow-xl shadow-n-8 hover:shadow-green-300 p-6 mx-auto"
      >
        <h2 className="text-2xl font-bold text-n-6 text-center mb-4 ">Contact Form</h2>

        <form className="flex flex-col">
          <input
            type="text"
            className="bg-n-7 shadow-inner text-gray-800 border-2 rounded-md p-2 mb-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition ease-in-out duration-150"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="bg-n-7 shadow-inner border-2 rounded-md p-2 mb-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition ease-in-out duration-150"
            placeholder="Email"
          />
          <input
            type="tel"
            className="bg-n-7 shadow-inner border-2 rounded-md p-2 mb-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition ease-in-out duration-150"
            placeholder="Phone Number"
          />
          
          <textarea
            name="message"
            className="bg-n-7 shadow-inner border-2 rounded-md p-2 mb-4 focus:ring-1 focus:ring-blue-500 focus:outline-none transition ease-in-out duration-150"
            placeholder="Message"
          ></textarea>

      <div className='flex justify-end'>
      <button type='submit'
class=" w-[100px] text-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
  Send
</button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
