import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div>
     <div className='flex items-center gap-3'>
     <img src="https://images.pexels.com/photos/19448090/pexels-photo-19448090/free-photo-of-two-leopards-lying-together.png?auto=compress&cs=tinysrgb&w=100&lazy=load"
            alt="/"
            className="rounded-full w-10 h-10 "
          />
         <input type='text' placeholder='Add a comment' className='p-2 w-96 focus:outline-none bg-transparent text-white border border-[#202020]   rounded-lg relative placeholder-[#202020]'/>
     </div>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
    </div>
  )
}

export default Comments