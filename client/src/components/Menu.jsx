import React from "react";
import { RxVideo } from "react-icons/rx";
import {
  MdHome,
  MdOutlineExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdLibraryMusic,
  MdOutlineSportsBasketball,
  MdLiveTv,
  MdOutlineFlag,
  MdOutlineLightMode,
} from "react-icons/md";
import { BiSolidJoystick } from "react-icons/bi";
import { FaHistory, FaRegNewspaper } from "react-icons/fa";
import { TfiVideoClapper } from "react-icons/tfi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="w-1/6 bg-[#0f0f0f] h-screen text-white sticky top-0">
      <div className="p-6">
        <Link to="/">
          <div className="flex items-center gap-2 font-bold mb-3 text-xl">
            <RxVideo size={40} className="text-red-600" />
            MaxTube
          </div>
        </Link>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <MdHome size={24} />
          Home
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg">
          <MdOutlineExplore size={24} />
          Exlore
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <MdSubscriptions size={24} />
          Subscriptions
        </div>
        <div className="border-b border-[#202020] my-2.5"></div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg">
          <MdVideoLibrary size={24} />
          Library
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <FaHistory size={24} />
          History
        </div>
        <div className="border-b border-[#202020] my-2.5"></div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg">
          <MdLibraryMusic size={24} />
          Music
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <MdOutlineSportsBasketball size={24} />
          Sports
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg">
          <BiSolidJoystick size={24} />
          Gaming
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg">
          <TfiVideoClapper size={24} />
          Movies
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <FaRegNewspaper size={24} />
          News
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <MdLiveTv size={24} />
          Live
        </div>
        <div className="border-b border-[#202020] my-2.5"></div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <IoSettingsSharp size={24} />
          Settings
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <MdOutlineFlag size={24} />
          Report
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <IoMdHelpCircleOutline size={24} />
          Help
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-1.5 hover:bg-[#202020] hover:rounded-lg ">
          <MdOutlineLightMode size={24} />
          Light Mode
        </div>
      </div>
    </div>
  );
};

export default Menu;
