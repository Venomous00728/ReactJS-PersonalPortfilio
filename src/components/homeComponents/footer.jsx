import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info-wrapper">
        <p style={{ fontWeight: "bold", fontSize: "14px" }}>
          Rostislava | Bridal Hair and Makeup | London
        </p>
        <p>
          All works © Rostislava 2023. Please do not reproduce without the
          expressed written consent of Rostislava.
        </p>
        <span style={{ display: "flex", alignItems: "center" }}>
          <p>Website developed by </p>
          <a
            className="linkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/shoaib-sumbal/"
          >
            Shoaib Khan
          </a>
        </span>
      </div>
      <a
        className="mylink"
        target="_blank"
        href="https://www.linkedin.com/in/shoaib-sumbal/"
      ></a>
    </div>
  );
};

export default Footer;
