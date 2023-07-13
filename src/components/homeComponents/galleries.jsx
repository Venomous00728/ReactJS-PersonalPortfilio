import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/galleries.css";
import { NavLink } from "react-router-dom";
import { setTabSelected } from "../../redux/navSlice";
import { isMobile } from "react-device-detect";

const images = [
  {
    path: require("../../assets/Alina Portfolio.webp"),
    to: "portfolio",
    label: "Portfolio",
  },
  {
    path: require("../../assets/fashionAndCatwalkImages/Fashion&Catwalk 11.webp"),
    to: "fashion&catwalk",
    label: "Fashion & Catwalk",
  },
  {
    path: require("../../assets/Alina Small Client.webp"),
    to: "client-gallery",
    label: "Client Gallery",
  },
];
const tabs = [
  { label: "Portfolio", to: "portfolio" },
  { label: "Fashion & Catwalk", to: "fashion&catwalk" },
  { label: "Client Gallery", to: "client-gallery" },
];

const Galleries = () => {
  const sectionRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const tab = useSelector((state) => state.nav.tab);
  const dispatch = useDispatch();

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
    console.log(window.innerWidth);
    if (tab.tab !== "about") return;
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      id={!isMobile ? "aboutMeSection" : ""}
      className="galleries-container"
    >
      <div className="tabs-images">
        {images.map((image) => (
          <NavLink
            key={image.path}
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            to={`/${image.to}`}
            className={
              image.label === "Client Gallery"
                ? "link-heading box"
                : "link-heading"
            }
          >
            <div className="image-container">
              <img src={image.path} className="galleries-img" />
            </div>
            {screenWidth < 690 && (
              <div className="link-container ">{image.label}</div>
            )}
          </NavLink>
        ))}
      </div>
      {screenWidth > 690 && (
        <div className="tabs-heading">
          {tabs.map((tab) => (
            <NavLink
              key={tab.label}
              onClick={() =>
                dispatch(
                  setTabSelected({
                    tabSelected: true,
                  })
                )
              }
              to={`/${tab.to}`}
              className="link-heading"
            >
              <div className="link-container">{tab.label}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Galleries;
