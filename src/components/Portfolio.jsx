import React from "react";
import { photos } from "./utility/portfolioPhotos";
import ImageGallery from "./common/ImageGallery";
import "../styles/portfolio.css";
import { mobilePhotos } from "./utility/mobilePortfolio";
import { isMobile } from "react-device-detect";
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-data">
        <p style={{ fontSize: "22px", lineHeight: "0", marginTop: "1.5  rem" }}>
          Portfolio
        </p>
        <p style={{ fontSize: "15px" }}>
          For more images of Alina latest work please visit Social Media pages:
          <span>
            {" "}
            <a
              style={{ color: "black" }}
              target="_blank"
              href="https://www.instagram.com"
            >
              Instagram{" "}
            </a>
          </span>
          or{" "}
          <span>
            {" "}
            <a
              style={{ color: "black" }}
              target="_blank"
              href="https://www.facebook.com"
            >
              Facebook{" "}
            </a>
          </span>
        </p>
        <div style={{ marginTop: "2rem" }}>
          <ImageGallery photos={isMobile ? mobilePhotos : photos} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
