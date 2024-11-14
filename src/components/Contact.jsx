import React from "react";
import githubLogo from "../assets/images/github1.png";
import linkedinLogo from "../assets/images/linkedin1.png";

const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={() => openLink("https://www.github.com")}
        className="w-12 h-12 mx-4 cursor-pointer"
      >
        <img src={githubLogo} alt="LinkedIn logo" className="w-full h-full" />
      </div>
      <div
        onClick={() => openLink("https://www.linkedin.com ")}
        className="w-12 h-12 mx-4 cursor-pointer"
      >
        <img src={linkedinLogo} alt="GitHub logo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Contact;
