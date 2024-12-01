import React from "react";
import githubLogo from "../assets/images/github1.png";
import linkedinLogo from "../assets/images/linkedin1.png";
import mailLogo from "../assets/images/mail1.png";

const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact">
      <div id="github" onClick={() => openLink("https://www.github.com/sk3901")}>
        <img src={githubLogo} alt="GitHub" />
      </div>
      <div id="linkedin" onClick={() => openLink("https://www.linkedin.com/in/samu-kirjonen-a1b306303/")}>
        <img src={linkedinLogo} alt="LinkedIn" />
      </div>
      <div id="mail">
        <a href="mailto:samu.kirjonen@gmail.com">
          <img src={mailLogo} alt="Mail" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
