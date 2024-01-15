import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {format} from "timeago.js"
import axios from "axios";

const Card = ({type,video}) => {
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/api/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to={`/video/${video._id}`}>
      <div className={type==="small"?"w-[250px] flex object-cover items-center mb-7 cursor-pointer rounded-lg  text-white bg-[#0f0f0f]":"w-[300px] mb-7 cursor-pointer rounded-lg overflow-hidden text-white bg-[#0f0f0f]"}>
        <img
          src={type==="small"?"https://images.pexels.com/photos/19403741/pexels-photo-19403741/free-photo-of-face-of-a-smiling-boy-wearing-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1000&lazy=load":video.imgUrl}
          alt=""
          className={type==="small"?"w-96 rounded-lg mr-5 h-20":"w-full h-[202px]"}
        />
        <div className="flex mt-3 gap-2.5">
        {type==="small"?<></>: <img
            src={channel.img}
            alt="/"
            className="rounded-full w-10 h-10 "
          />}
         
          <div className={type==="small"?"w-52":""}>
            <h1 className="font-semibold mb-1">{video.title}</h1>
            <h3 className="text-sm mb-2">{channel.name}</h3>
            <p className={type==="small"?"text-xs mb-1":"text-sm mb-2"}>{video.views} views {format(video.creaedAt)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
