import React from 'react'
import { SlLike ,SlDislike} from "react-icons/sl";
import { GoShareAndroid } from "react-icons/go";
import { MdSaveAlt } from "react-icons/md";
import Comments from '../components/Comments';
import Card from '../components/Card';
const Video = () => {
  return (
    <div className='h-full flex gap-4'>
       <div className='text-white w-4/6'>
         <div>
            <iframe
             width="100%"
             height="410"
             src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
             title='Youtube video player'
             frameBorder="0"
             allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
             allowFullScreen
            >
            </iframe>
         </div>
           <h1 className='mb-2.5 mt-1.5 text-xl font-semibold'>Test video</h1>
           <div className='flex items-center justify-between'>
            <p className='text-sm'>455,673 views 1 year ago</p>
            <div className='flex gap-3 items-center'>
               <div className='flex items-center gap-1'>
                 <SlLike/>
                Like
               </div>
               <div className='flex items-center gap-1'>
                 <SlDislike/>
                Dislike
               </div>
               <div className='flex items-center gap-1'>
                 <GoShareAndroid/>
                Share
               </div>
               <div className='flex items-center gap-1'>
                 <MdSaveAlt/>
                Save
               </div>
            </div>
           </div>
           <div className="border-b border-[#202020] my-2.5 mt-4"></div>
          <div className='flex justify-between'>
            <div className='flex gap-3'>
            <img
            src="https://images.pexels.com/photos/19448090/pexels-photo-19448090/free-photo-of-two-leopards-lying-together.png?auto=compress&cs=tinysrgb&w=100&lazy=load"
            alt="/"
            className="rounded-full w-10 h-10 "
          />
          <div className='flex flex-col'>
           <h1 className='mb-2 font-semibold'>Max Mad</h1>
            <span className='text-xs mb-1'>400K Subscribers</span>
            <div className="border-b border-[#202020] my-2.5 mt-4"></div>
            <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Feel free to let me know if you have any specific requests or if there's anything else I can help you with!</p>
           </div>
             </div>
            <button className='p-2 h-10 bg-red-600 rounded-md'>SUBSCRIBE</button>
          </div>
          <div className="border-b border-[#202020] my-2.5 mt-4"></div>
          <Comments/>
       </div>
       <div className='text-white w-2/6'>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
          <Card type="small"/>
       </div>
    </div>
  )
}

export default Video