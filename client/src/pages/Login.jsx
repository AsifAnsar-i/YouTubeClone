import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="h-screen text-white mt-[-70px] ml-[-137px] flex items-center justify-center top-0 bottom-0 right-0 left-0 m-auto ">
      <div className="flex flex-col items-center border w-[300px] border-[#202020] rounded-md">
        <div className="text-center gap-4">
          <h1 className="font-semibold mt-3">Sign In</h1>
          <p className="mt-5 mb-3 text-xs">to continue to MaxTube</p>
          <div className="flex flex-col items-center gap-2 ">
            <input type="text" placeholder="username" className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]"/>
            <input type="password" placeholder="password" className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]" />
            <button className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg">Sign in</button>
          </div>

          <h1>or</h1>
          <div className="flex flex-col items-center gap-2">
            <input type="text" placeholder="username" className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]" />
            <input type="email" placeholder="email" className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]" />
            <input type="password" placeholder="password" className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg placeholder:text-[#202020]" />
            <button className="p-2 bg-transparent border border-[#202020] focus:outline-none rounded-lg">Sign up</button>
          </div>
        </div>
        <div className="flex justify-between gap-16 mt-7">
         <span className="text-xs">English(USA)</span> 
          <div className="text-xs ">
            <Link><span className="mr-2">Help</span></Link>
            <Link><span className="mr-2">Privacy</span></Link>
            <Link><span className="mr-2">Terms</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
