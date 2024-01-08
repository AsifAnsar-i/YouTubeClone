import React from "react";
import { Link } from "react-router-dom";

const Card = ({type}) => {
  return (
    <Link to="/video/test">
      <div className={type==="small"?"w-[250px] flex object-cover items-center mb-7 cursor-pointer rounded-lg  text-white bg-[#0f0f0f]":"w-[300px] mb-7 cursor-pointer rounded-lg overflow-hidden text-white bg-[#0f0f0f]"}>
        <img
          src={type==="small"?"https://images.pexels.com/photos/19403741/pexels-photo-19403741/free-photo-of-face-of-a-smiling-boy-wearing-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1000&lazy=load":"https://images.pexels.com/photos/19403741/pexels-photo-19403741/free-photo-of-face-of-a-smiling-boy-wearing-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1000&lazy=load"}
          alt=""
          className={type==="small"?"w-96 rounded-lg mr-5 h-20":"w-full h-[202px]"}
        />
        <div className="flex mt-3 gap-2.5">
        {type==="small"?<></>: <img
            src="https://images.pexels.com/photos/19448090/pexels-photo-19448090/free-photo-of-two-leopards-lying-together.png?auto=compress&cs=tinysrgb&w=100&lazy=load"
            alt="/"
            className="rounded-full w-10 h-10 "
          />}
         
          <div className={type==="small"?"w-52":""}>
            <h1 className="font-semibold mb-1">Test Video</h1>
            <h3 className="text-sm mb-2">Max Tube</h3>
            <p className={type==="small"?"text-xs mb-1":"text-sm mb-2"}>455,673 views 1 year ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
