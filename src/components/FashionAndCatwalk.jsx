import React from "react";
import ImageGallery from "./common/ImageGallery";
import { photos } from "./utility/catwalkPhotos";
import "../styles/fashion.css";

const FashionAndCatwalk = () => {
  return (
    <div className="fashion-container">
      <div className="fashion-data">
        <p style={{ fontSize: "22px", lineHeight: "0", marginTop: "1.5  rem" }}>
          Fashion & Catwalk
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
          <ImageGallery photos={photos} />
        </div>
      </div>
    </div>
  );
};

export default FashionAndCatwalk;
