import React from 'react';

const Contacts = () => {
  return (
    <div id='contact' className="py-8 bg-cover bg-center mx-auto" >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Do You Have Any Questions?</h1>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Get Help From Us</h1>
      </div>
      <div className='flex justify-center gap-16'>
        <button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-n-6  duration-500 before:duration-500 hover:duration-500 underline 
      underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none 
      hover:before:-bottom-8 hover:before:blur-none hover:bg-n-8 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 
      hover:text-n-6 relative bg-sky-100 h-12 w-[15rem] shadow-xl hover:shadow-green-300 text-left p-3 text-gray-500 text-base font-bold rounded-lg  overflow-hidden  
      before:absolute before:w-14 before:h-14  before:right-1 before:top-1 before:z-10 scale-x-100	
      before:bg-gradient-to-r from-green-500 to-n-6 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20   
      after:bg-gradient-to-r from-green-500 after:right-8 after:top-3 after:rounded-full after:blur">
          Chat With us
        </button>
        <button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-n-6  duration-500 before:duration-500 hover:duration-500 underline 
      underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none 
      hover:before:-bottom-8 hover:before:blur-none hover:bg-n-8 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 
      hover:text-n-6 relative bg-sky-100 h-12 w-[15rem] shadow-xl hover:shadow-green-300 text-left p-3 text-gray-500 text-base font-bold rounded-lg  overflow-hidden  
      before:absolute before:w-14 before:h-14  before:right-1 before:top-1 before:z-10 scale-x-100	
      before:bg-gradient-to-r from-green-500 to-n-6 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20   
      after:bg-gradient-to-r from-green-500 after:right-8 after:top-3 after:rounded-full after:blur">
          Browse Q/A
        </button>

      </div>
      <div className='flex mx-[5rem] gap-[7rem] my-9 py-6 px-6'>
      <div className='w-[50%]  bg-gradient-to-b from-n-8 to-n-1 rounded-full '>
        <img src="src\assets\Contact-image.png" alt=""  className=' h-[32rem] mx-[4.5rem] '/>
      </div>

      <div className="w-[50%] mt-7 max-w-[400px] flex-col bg-n-7 rounded-lg shadow-2xl  hover:shadow-green-300 p-6 ">
        <h2 className="text-2xl font-bold  text-center mb-4 text-n-6 ">Contact Us</h2>

        <form className="flex flex-col">
          <div className="w-full h-12 relative flex rounded-xl mb-4 ">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl bg-white  border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8 "
              id="first-name"
              type="text"
              placeholder="Name "
            />
          </div>
          <div className="w-full h-12 relative flex rounded-xl mb-4">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl bg-white  border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8 "
              id="first-name"
              type="text"
              placeholder="Email "
            />
          </div>
          <div className="w-full h-12 relative flex rounded-xl mb-4">
            <input
              required
              className="peer w-full  outline-none px-4 text-base rounded-xl bg-white  border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8 "
              id="first-name"
              type="text"
              placeholder="Number "
            />
          </div>

          <textarea
            name="message"
            className="peer w-full mb-4 h-[8rem] outline-none px-4 text-base rounded-xl bg-white  border-2 hover:border-green-300 to-n-6 shadow-md focus:shadow-xl focus:shadow-n-8 "
            placeholder="Message"
          ></textarea>

          <div className='flex justify-end'>
            <button type='submit'
              class=" w-[100px] text-center bg-gradient-to-r from-green-500 to-n-6 text-white font-bold py-3 px-6 rounded-full shadow-lg transform
               transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
              Send
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contacts;
