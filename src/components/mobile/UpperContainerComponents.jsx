import React from "react";
import { isMobile } from "react-device-detect";
import { NavLink } from "react-router-dom";
import "../../styles/topNavbar.css";

export default function UpperContainerComponents() {
  return (
    <>
      <NavLink
        to="tel:07231463183"
        className="upper-container-items link"
        style={
          isMobile ? { marginRight: "0", fontSize: "17px", width: "115px" } : {}
        }
      >
        07231 463 183
      </NavLink>
      <NavLink
        to="tel:07902457946"
        className="upper-container-items link"
        style={isMobile ? { marginRight: "0" } : {}}
      >
        <img
          style={{
            width: "35px",
            height: "35px",
          }}
          src={require("../../assets/phone.webp")}
        />
      </NavLink>
      <NavLink
        to="mailto:mshoaibkhansumbal@gmail.com"
        className="upper-container-items link"
      >
        <img
          style={{
            width: "35px",
            height: "35px",
          }}
          src={require("../../assets/email.webp")}
        />
      </NavLink>
    </>
  );
}
