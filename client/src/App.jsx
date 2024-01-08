import React from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="flex">
      <Menu />
      <div className="w-5/6">
        <Navbar />
        <div className=" px-[20px] py-[20px] bg-[#0f0f0f]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/video/:id" element={<Video />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
