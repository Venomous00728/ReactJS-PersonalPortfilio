import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../styles/aboutMe.css";
import { isMobile } from "react-device-detect";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const tempRef = useRef(null);

  const tab = useSelector((state) => state.nav.tab);

  useEffect(() => {
    if (tab.tab !== "about" && isMobile) return;
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={isMobile ? sectionRef : tempRef}
      id={isMobile ? "aboutMeSection" : ""}
      className="container"
      style={{
        backgroundImage: `url(${require("../../assets/Background-Image.webp")})`,
      }}
    >
      <div className="info-container">
        <h1>ABOUT ME</h1>
        <div className="info-details-container">
          <img
            className="aboutImg"
            src={require("../../assets/Alina about me .webp")}
          />
          <div className="details">
            <p>
              Welcome to my world of stunning transformations! I'm Alina
              Romenskaya, a passionate <br /> makeup artist and hairstylist
              dedicated to enhancing your natural beauty for weddings,
              <br /> parties, and any occasion that calls for a touch of
              glamour.
              <br /> <br /> Originally from Russia, I had the incredible
              opportunity to work with models and <br /> photographers for
              renowned magazines, refining my skills and establishing myself as
              an <br /> artist known for creating breathtaking looks. In 2021, I
              made the exciting decision to move <br /> to England, bringing my
              unique style and expertise to a new audience.
              <br />
              <br /> I believe that makeup and hair go beyond just surface-level
              enhancements. They have the <br /> power to boost confidence and
              reflect individual personalities. When you choose me, you <br />{" "}
              can expect a personalized experience tailored to your desires. I
              take the time to <br /> understand your vision and create a look
              that perfectly suits your features <br /> and complements your
              style.
              <br />
              <br />
              Beyond my technical skills, what sets me apart is my genuine
              connection with my clients. <br />I believe in building trust and
              rapport, ensuring that you feel comfortable and relaxed in my{" "}
              <br />
              chair. I want you to feel pampered and cared for from the moment
              you step into my studio.
              <br />
              <br />
              Whether you're a bride-to-be walking down the aisle, a guest at a
              glamorous <br /> event, or simply want to feel beautiful and
              confident in your everyday life, I'm here <br /> to make it
              happen. My meticulous attention to detail and artistic flair
              guarantee
              <br /> a flawless and radiant result. <br />
              <br />
              So, embrace your beauty and let's embark on a transformative
              journey together. <br /> Book an appointment with me today, and
              together we'll create unforgettable moments
              <br /> where you shine like the star you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
