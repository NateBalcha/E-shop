import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-text">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <h1 className="emoji">🤗🤩</h1>
            </div>
            <p>Collections</p>
            <p>For everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
