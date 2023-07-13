import React from "react";
import ImageGallery from "./common/ImageGallery";
import { photos } from "./utility/photos";
import "../styles/clientGallery.css";

const ClientGallery = () => {
  return (
    <div className="client-gallery-container">
      <div className="client-data">
        <p style={{ fontSize: "22px", lineHeight: "0", marginTop: "1.5  rem" }}>
          Recent Instagram Feed
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

export default ClientGallery;
