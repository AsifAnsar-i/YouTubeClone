import React, { useEffect, useState } from 'react'
import { SlLike ,SlDislike} from "react-icons/sl";
import { GoShareAndroid } from "react-icons/go";
import { MdSaveAlt } from "react-icons/md";
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'timeago.js';
import axios from 'axios';
import { fetchSuccess } from '../redux/videoSlice';
const Video = () => {
  const {id}=useParams()
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();


  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/api/videos/find/${id}`);
        const channelRes = await axios.get(
          `/api/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [id, dispatch]);
  return (
    <div className='h-full flex gap-4'>
       <div className='text-white w-4/6'>
         <div className=''>
            <iframe
             width="100%"
             height="410"
             src='https://www.youtube.com/embed/lV1OOlGwExM?si=aggrLpTIJwFWjER3'
             title='Youtube video player'
             frameBorder="0"
             allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
             allowFullScreen
             className='rounded-lg'
            >
            </iframe>
         </div>
           <h1 className='mb-2.5 mt-1.5 text-xl font-semibold'>{currentVideo?.title}</h1>
           <div className='flex items-center justify-between'>
            <p className='text-sm'>{currentVideo?.views} views {format(currentVideo?.createdAt)}</p>
            <div className='flex gap-3 items-center'>
               <div className='flex items-center gap-1'>
                 <SlLike/>
               {currentVideo?.likes?.length}
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
            src={channel?.img}
            alt="/"
            className="rounded-full w-10 h-10 "
          />
          <div className='flex flex-col'>
           <h1 className='mb-2 font-semibold'>{channel?.name}</h1>
            <span className='text-xs mb-1'>{channel?.subscribers} Subscribers</span>
            <div className="border-b border-[#202020] my-2.5 mt-4"></div>
            <p className='text-xs'>{currentVideo?.desc}</p>
           </div>
             </div>
            <button className='p-2 h-10 bg-red-600 rounded-md'>SUBSCRIBE</button>
          </div>
          <div className="border-b border-[#202020] my-2.5 mt-4"></div>
          <Comments/>
       </div>
       <div className='text-white w-2/6'>
          {/* <Card type="small"/>
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
          <Card type="small"/> */}
       </div>
    </div>
  )
}

export default Video