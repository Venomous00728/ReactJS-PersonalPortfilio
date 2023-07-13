import React, { useEffect, useState } from "react";
import "../../styles/topNavbar.css";
import { NavLink, Link } from "react-router-dom";
import List from "./list";
import { useDispatch, useSelector } from "react-redux";
import { setTab, setTabSelected } from "../../redux/navSlice";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import UpperContainerComponents from "../mobile/UpperContainerComponents";
import LowerContainerComponents from "../mobile/LowerContainerComponents";

const brands = [
  {
    id: 1,
    path: require("../../assets/Brand 5.webp"),
  },
  {
    id: 2,
    path: require("../../assets/Brand 6.webp"),
  },
];

const TopNavbar = () => {
  const [showBrandContainer, setShowBrandContainer] = useState(false);
  const [showTagLine, setShowTagLine] = useState(true);
  const [galleriesList, setGalleriesList] = useState(false);
  const [isListHovered, setIsListHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const tabSelected = useSelector((state) => state.nav.tabSelected);

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
    const brandContainerTimer = setInterval(() => {
      setShowBrandContainer((prevValue) => !prevValue);
    }, 3000);

    const tagLineTimer = setInterval(() => {
      setShowTagLine((prevValue) => !prevValue);
    }, 3000);

    return () => {
      clearInterval(brandContainerTimer);
      clearInterval(tagLineTimer);
    };
  }, []);

  const handleGalleriesList = () => {
    isListHovered ? setIsListHovered(false) : setIsListHovered(true);
  };

  useEffect(() => {
    let timer;

    if (isListHovered) {
      timer = setTimeout(() => {
        setGalleriesList(true);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setGalleriesList(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isListHovered]);

  return (
    <div className="topnavbar-container">
      <div className="topbar-container">
        <div
          className={`brand-container ${showBrandContainer ? "show" : "hide"}`}
        >
          {brands.map((brand) => (
            <img
              key={brand.id}
              className="brands-img"
              src={brand.path}
              alt={`Brand ${brand.id}`}
            />
          ))}
        </div>

        <div className={`tag-line ${!showBrandContainer ? "show" : "hide"}`}>
          <span>AFFILIATES | AS SEEN IN</span>
        </div>
      </div>
      <div className="navbar-container">
        <NavLink
          onClick={() => {
            dispatch(
              setTab({
                tab: "home",
              })
            );
            dispatch(
              setTabSelected({
                tabSelected: false,
              })
            );
          }}
          className="logo-link"
          to="/"
        >
          <div className="logo-container">
            <span className="logo-tagline">THE MAKEUP ARTIST</span>
            <span style={{ display: "block" }}>
              <span className="logo">ROSTISLAVA</span>
            </span>
          </div>
        </NavLink>
        <div className="navbar-subContainer">
          <div className="upper-container">
            {screenWidth < 1140 && (
              <div
                style={
                  isMobile
                    ? {
                        display: "flex",
                        paddingRight: "2rem",
                        marginRight: " 2.9rem",
                      }
                    : { display: "flex", paddingRight: "2rem" }
                }
              >
                <UpperContainerComponents />
                <LowerContainerComponents />
              </div>
            )}
            {screenWidth > 1140 && (
              <div style={{ display: "flex" }}>
                <NavLink
                  to="tel:07231463183"
                  className="upper-container-items link"
                  style={isMobile ? { marginRight: "0" } : {}}
                >
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={require("../../assets/phone.webp")}
                  />
                  07231 463 183
                </NavLink>
                <NavLink
                  to="mailto:mshoaibkhansumbal@gmail.com"
                  className="upper-container-items link"
                >
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    src={require("../../assets/email.webp")}
                  />
                  mshoaibkhansumbal@gmail.com
                </NavLink>
              </div>
            )}
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <NavLink
                  to="https://www.facebook.com"
                  target="_blank"
                  className="ico-link link"
                >
                  <img
                    className="ico"
                    src={require("../../assets/facebook.webp")}
                  />
                </NavLink>
                <NavLink
                  to="https://www.instagram.com"
                  target="_blank"
                  className="ico-link link"
                >
                  <img
                    className="ico"
                    src={require("../../assets/insta.webp")}
                  />
                </NavLink>
                <NavLink
                  to="https://www.youtube.com"
                  target="_blank"
                  className="ico-link link"
                >
                  <img
                    className="ico"
                    src={require("../../assets/youtube.webp")}
                  />
                </NavLink>
              </div>
            </div>
          </div>
          {screenWidth > 1140 && (
            <div>
              <div className="lower-container">
                <NavLink
                  onClick={() => {
                    dispatch(
                      setTab({
                        tab: "home",
                      })
                    );
                    dispatch(
                      setTabSelected({
                        tabSelected: false,
                      })
                    );
                  }}
                  to="/"
                  className="lower-container-items link"
                >
                  Home
                </NavLink>
                <div className="lower-container-list">
                  <span
                    onMouseOver={handleGalleriesList}
                    onMouseOut={handleGalleriesList}
                  >
                    Galleries
                  </span>
                  {galleriesList && (
                    <List
                      setIsListHovered={setIsListHovered}
                      dispatch={dispatch}
                      setTabSelected={setTabSelected}
                    />
                  )}
                </div>
                {tabSelected.tabSelected && (
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setTab({
                          tab: "about",
                        })
                      );
                      dispatch(
                        setTabSelected({
                          tabSelected: false,
                        })
                      );
                    }}
                    to="/"
                    className="lower-container-items link"
                  >
                    About
                  </NavLink>
                )}

                {!tabSelected.tabSelected && (
                  <a
                    href="#aboutMeSection"
                    className="lower-container-items link"
                  >
                    About
                  </a>
                )}
                <NavLink
                  onClick={() =>
                    dispatch(
                      setTabSelected({
                        tabSelected: true,
                      })
                    )
                  }
                  to="/services"
                  className="lower-container-items link"
                >
                  Services
                </NavLink>
                {tabSelected.tabSelected && (
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setTab({
                          tab: "testimonials",
                        })
                      );
                      dispatch(
                        setTabSelected({
                          tabSelected: false,
                        })
                      );
                    }}
                    to="/"
                    className="lower-container-items link"
                  >
                    Testimonials
                  </NavLink>
                )}

                {!tabSelected.tabSelected && (
                  <a
                    href="#testimonialsSection"
                    className="lower-container-items link"
                  >
                    Testimonials
                  </a>
                )}
                {!tabSelected.tabSelected && (
                  <a
                    href="#contactSection"
                    className="lower-container-items link"
                  >
                    Contact
                  </a>
                )}
                {tabSelected.tabSelected && (
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setTab({
                          tab: "contact",
                        })
                      );
                      dispatch(
                        setTabSelected({
                          tabSelected: false,
                        })
                      );
                    }}
                    to="/"
                    className="lower-container-items link"
                  >
                    Contact
                  </NavLink>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
