import React, { useState } from "react";
import { LuLinkedin, LuFacebook, LuInstagram, LuMenu } from "react-icons/lu";

export default function Header() {
  const [tabs, setTabs] = useState([
    "home",
    "about",
    "services",
    "works",
    "contact",
  ]);

  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActiveTab = (i) => {
    setActiveTab(i);
  };

  return (
    <header id="home">
      <button id="toggler" onClick={() => setIsOpen((old) => !old)}>
        <LuMenu />
      </button>
      <nav className={isOpen ? "open" : ""}>
        {tabs.map((tab, index) => (
          <a
            href={`#${tab}`}
            key={`tab-${index}`}
            className={activeTab === index ? "active" : ""}
            onClick={() => handleSetActiveTab(index)}
          >
            {tab}
          </a>
        ))}
      </nav>

      <div className="container">
        <FollowMe />
        <MyInfo />
      </div>
    </header>
  );
}

function FollowMe() {
  return (
    <div id="follow-me">
      <p>Follow Me</p>
      <a href="#facebook">
        <LuFacebook />
      </a>
      <a href="#instagram">
        <LuInstagram />
      </a>
      <a href="#linkedin">
        <LuLinkedin />
      </a>
    </div>
  );
}

function MyInfo() {
  return (
    <div id="info">
      <h1>Hi I'm Samah Zaytoun</h1>
      <h3>Frontend Developer</h3>
      <p>
      I’m currently working on React Projects & Project Management and 2+ Years of professional experience worked
      </p>
      <a href="https://github.com/Samahzaytoun">more</a>
    </div>
  );
}
