// src/components/VideoBg.jsx
import React from "react";
import videoSrc from "../assets/Videobg.mp4"; 

const VideoBg = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBg;
