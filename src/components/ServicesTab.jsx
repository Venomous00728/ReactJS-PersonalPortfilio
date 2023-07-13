import React, { useEffect, useState } from "react";
import "../styles/servicesTab.css";
import { BrowserView, MobileView } from "react-device-detect";

const ServicesTab = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="service-tab-container">
      <h2>Services</h2>
      <div className="serviecs-container">
        {screenWidth < 690 && (
          <div>
            <img
              className="services-image"
              src={require("../assets/Alina about me .webp")}
            />
          </div>
        )}
        <div className="sevices-article">
          <h4>TRIALS AND CONSULTATIONS</h4>
          <p>
            Alina provides a unique and personalised experience and believes
            trails and consultations are a great way to understand your
            requirements. Trials and consultations are casual sessions to
            discuss ideas and experiment with different looks. A trial consists
            of:
            <br /> · Skin and colour analysis
            <br /> · Outfit / jewellery / style review
            <br /> · Hairstyle ideas and hairstyling
            <br /> · Look selection and Make-Up application
            <br /> · Briefing of booking process and what to expect on the day
          </p>
          <h4>BRIDAL SERVICES</h4>
          <p>
            Alina specialises in Bridal services. Be it Engagement, Registry,
            Mehndi, Walima or your Wedding day. Alina can tailor your desired
            look to ensure you look and feel beautiful on your special day. The
            bridal offering covers professional Hairstyling, Make-Up artistry,
            Dupatta pinning and Jewellery setting, pins, artificial eyelashes,
            and use of professional branded make-up products, guaranteed to last
            for the entire day.
          </p>
          <h4>PARTY HAIR AND MAKE-UP</h4>
          <p>
            Alina can help you glam up and look beautiful for any occasion
            including Pre-Wedding photo-shoots, Hen parties, Birthdays and any
            other social event.
          </p>
          <h4>FASHION & EDITORIAL</h4>
          <p>
            Alina is experienced in providing Fashion show, Catwalk and
            Editorial services for large brands such as Khush Wedding, Asian
            Bride Live and many more. Whether you are launching a new clothing
            line, brand or a marketing campain Alina can create professional and
            flawless makeup looks for all your events.
          </p>
          <h4>SPECIAL OFFERS AND PROMOTION</h4>
          <p>
            Please check{" "}
            <span>
              <a
                style={{ color: "black" }}
                target="_blank"
                href="https://www.instagram.com"
              >
                Alina Make-Up Artist instagram page
              </a>
            </span>{" "}
            for regular offers and make-up tips
          </p>
        </div>
        {screenWidth > 690 && (
          <div>
            <img
              style={{
                width: "400px",
                height: "500px",
                objectFit: "cover",
                marginLeft: "1rem",
              }}
              src={require("../assets/Alina about me .webp")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesTab;
