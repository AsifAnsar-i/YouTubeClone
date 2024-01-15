import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/api/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <div className="flex gap-2 flex-wrap bg-[#0f0f0f]">
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Home;
