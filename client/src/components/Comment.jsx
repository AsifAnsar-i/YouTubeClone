import React from 'react'

const Comment = () => {
  return (
    <div className='flex gap-3 mt-4'>
    <img src="https://images.pexels.com/photos/19448090/pexels-photo-19448090/free-photo-of-two-leopards-lying-together.png?auto=compress&cs=tinysrgb&w=100&lazy=load"
            alt="/"
            className="rounded-full w-10 h-10 "
          />
          <div className='items-center'>
            <h1 className='font-semibold items-center'>Max Mad<span className='text-xs font-normal ml-3 text-slate-700'>1 day ago</span></h1>
            <p className='text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
    </div>
  )
}

export default Comment