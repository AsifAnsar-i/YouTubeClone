import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-[#0f0f0f] p-5'>
       <div className='flex justify-end relative'>
        <div className='flex items-center text-white absolute left-96'>
          <input type='text' placeholder='Search' className='p-2 w-80 focus:outline-none bg-transparent text-white border border-[#202020] focus:border-blue-500  rounded-lg relative placeholder-[#202020]'/>
          <IoSearchSharp size={26} className='absolute left-72 text-[#202020]'/>
        </div>
        <Link to="/signin">
        <div className='flex text-blue-600 items-center gap-2 border p-2 border-[#202020] w-[120px] h-[40px]'>
          <BsPersonCircle size={26}/>
          SIGN IN
        </div>
        </Link>
       </div>
    </div>
  )
}

export default Navbar