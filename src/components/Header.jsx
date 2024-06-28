import React from 'react'
import { navigtion } from '../constants';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-n-8 shadow-lg">
        <div className='flex items-center px-7'>
        <Link to={'/'}>
        <a className="block w-[12rem] xl:mr-8" href="home">
        <img src="src\assets\Simple Typography Real Estate Logo (2).png" width={150} height={40}  alt="logo" />
        </a>
        </Link>
        <nav className=' flex text-xl text-n-6 font-semibold  lg:static lg:flex lg:mx-auto '>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
            {navigtion.map((nav, index) => 
            <li key = {nav.id} className={' px-3 py-2 cursor-pointer  mr-10 hover:scale-110 hover:border-2 hover:border-n-6 hover:shadow-xl' }>
            <Link to={`${nav.url}`}> {nav.title}</Link>

            </li>
              )}
            </ul>
            
        </nav>
        <div className='relative flex text-lg justify-end font-sans  space-x-4 p-4 '>
                {/* <button type="button" className=' font-sans border bg-n-6 text-n-1 px-6 py-1 rounded-lg'>Login</button> */}
                <Link to={"/signin"} >
            <button id= 'signIn' class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all border-2
            duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-2xl active:scale-90 before:absolute before:top-0 before:-left-full 
            before:w-full before:h-full before:bg-gradient-to-r before:from-green-400  before:to-n-6  before:duration-500 
            before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          <span className="relative z-10">Sign In</span>
      </button>
            </Link>
        <Link to={"/signup"}>
        <button id = 'signUp' class="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all border-2
            duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full 
            before:w-full before:h-full before:bg-gradient-to-r before:from-green-400 before:to-n-6  before:duration-500 
            before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
  <span className="relative z-10">Sign Up</span>
</button>
        </Link>
                {/* <button type="button" className=' font-sans border bg-n-6 text-n-1 px-6 py-1 rounded-lg'>Sign up</button> */}
            </div>
        </div>
    </section>
    
  )
}

export default Header
