import React, { useRef, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../styles/carousel.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { isMobile } from "react-device-detect";

const DemoCarousel = () => {
  const sectionRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const tab = useSelector((state) => state.nav.tab);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (tab.tab !== "home" || isMobile) return;
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={sectionRef} className="carousel-container">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval="4000"
        showStatus={false}
        stopOnHover={false}
        animationHandler={"slide"}
        showIndicators={false}
        swipeable={false} // Enable swipe gestures
        dynamicHeight={true} // Allow dynamic height for carousel items
      >
        <div>
          <img
            className="carousel-img"
            src={require("../../assets/Alina-HD.webp")}
            alt="Slide 1"
          />
          <div className="slide-info">
            <h3>BRIDAL PORTFOLIO</h3>
            {screenWidth > 1190 && (
              <span>Check out the Latest Trends by Alina Russian MUA</span>
            )}
            <NavLink to="/portfolio" className="slide-button">
              See More
            </NavLink>
          </div>
        </div>
        <div>
          <img
            className="carousel-img"
            src={require("../../assets/Alina-HD-3.webp")}
            alt="Slide 2"
          />
          <div className="slide-info">
            <h3>BRIDAL PORTFOLIO</h3>
            {screenWidth > 1190 && (
              <span>Check out the Latest Trends by Alina Russian MUA</span>
            )}
            <NavLink to="/portfolio" className="slide-button">
              See More
            </NavLink>
          </div>
        </div>
        <div>
          <img
            className="carousel-img"
            src={require("../../assets/Alina-HD-2-Revamp.webp")}
            alt="Slide 3"
          />
          <div className="slide-info">
            <h3>BRIDAL PORTFOLIO</h3>
            {screenWidth > 1190 && (
              <span>Check out the Latest Trends by Alina Russian MUA</span>
            )}
            <NavLink to="/portfolio" className="slide-button">
              See More
            </NavLink>
          </div>
        </div>
        <div>
          <img
            className="carousel-img"
            src={require("../../assets/Alina HD 5.webp")}
            alt="Slide 4"
          />
          <div className="slide-info">
            <h3>BRIDAL PORTFOLIO</h3>
            {screenWidth > 1190 && (
              <span>Check out the Latest Trends by Alina Russian MUA</span>
            )}
            <NavLink to="/portfolio" className="slide-button">
              See More
            </NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
