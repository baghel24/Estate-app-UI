import React from 'react'
import { navigtion } from '../constants';
const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90">
        <div className='flex items-center px-7'>
        <a className="block w-[12rem] xl:mr-8" href="#hero">
        <img src="src\assets\Simple Typography Real Estate Logo.png" width={150} height={40}  alt="logo" />
        </a>
        <nav className='relative flex left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto'>
            <div className='realtive space-x-9 text-xl font-sans text-n-6 font-semibold'>
            {navigtion.map((item)=>(
                <a key= {item.id} href={item.url}>{item.title}</a>
            ))}
            </div>
            
        </nav>
        <div className='relative flex text-lg justify-end font-sans   space-x-4 p-4 '>
                <button type="button" className=' font-sans border bg-n-6 text-n-1 px-6 py-1 rounded-lg'>Login</button>
                <button type="button" className=' font-sans border bg-n-6 text-n-1 px-6 py-1 rounded-lg'>Sign up</button>
            </div>
        </div>
    </div>
    
  )
}

export default Header
