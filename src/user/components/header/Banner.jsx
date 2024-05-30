import React, { useState, useEffect } from "react";
import "./css/banner.css";
import tour_banner from "../../../img/tour_banner.jpg"

const Banner = () => {
  const [slides, setSlides] = useState([tour_banner]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  const handlePrevSlide = () => {
    setDirection("left");
    setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setDirection("right");
    setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
      <div>
        <div className="slider_banner">
          <div className={`slide_banner ${direction}`} style={{backgroundImage: `url(${slides[activeSlide]})`}}></div>
          <div className="navigation_banner but1_banner">
            <div className="nav-btn_banner " onClick={handlePrevSlide}>&#8249;</div>
          </div>
          <div className="navigation_banner but2_banner">
            <div className="nav-btn_banner " onClick={handleNextSlide}>&#8250;</div>
          </div>
        </div>
      </div>

  );
};

export default Banner;