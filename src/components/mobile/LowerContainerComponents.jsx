import React from "react";
import { useState } from "react";
import "./lowerContainer.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTab, setTabSelected } from "../../redux/navSlice";

export default function LowerContainerComponents() {
  const [listVisible, setListVisible] = useState(false);
  const [showGalleryList, setShowGalleryList] = useState(false);

  const dispatch = useDispatch();
  const tabSelected = useSelector((state) => state.nav.tabSelected);

  return (
    <div>
      {!listVisible && (
        <img
          onClick={() => setListVisible(true)}
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
          src={require("../../assets/Menu.webp")}
        />
      )}
      {listVisible && (
        <img
          onClick={() => setListVisible(false)}
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
          src={require("../../assets/Menu (1).webp")}
        />
      )}
      {listVisible && (
        <div className="lower-component">
          <ul s>
            <li>
              <NavLink
                className="navLink"
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
                  setListVisible(false);
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <span
                className="navLink"
                onClick={() => {
                  showGalleryList
                    ? setShowGalleryList(false)
                    : setShowGalleryList(true);
                }}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Galleries</span>
                <span
                  style={{
                    height: "100%",
                    width: "50px",
                    borderLeft: "1px solid black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  V
                </span>
              </span>
            </li>
            {showGalleryList && (
              <>
                <li>
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setTabSelected({
                          tabSelected: true,
                        })
                      );
                      setListVisible(false);
                      setShowGalleryList(false);
                    }}
                    to="/portfolio"
                    className="navLink subLink"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setTabSelected({
                          tabSelected: true,
                        })
                      );
                      setListVisible(false);
                      setShowGalleryList(false);
                    }}
                    to="/fashion&catwalk"
                    className="navLink subLink"
                  >
                    Fashion & Catwalk
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      dispatch(
                        setTabSelected({
                          tabSelected: true,
                        })
                      );
                      setListVisible(false);
                      setShowGalleryList(false);
                    }}
                    to="/client-gallery"
                    className="navLink subLink"
                  >
                    Clients Gallery
                  </NavLink>
                </li>
              </>
            )}
            <li>
              {tabSelected.tabSelected && (
                <NavLink
                  className="navLink"
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
                    setListVisible(false);
                  }}
                  to="/"
                >
                  About
                </NavLink>
              )}
              {!tabSelected.tabSelected && (
                <a
                  onClick={() => setListVisible(false)}
                  href="#aboutMeSection"
                  className="navLink"
                >
                  About
                </a>
              )}
            </li>
            <li>
              <NavLink
                onClick={() => {
                  dispatch(
                    setTabSelected({
                      tabSelected: true,
                    })
                  );
                  setListVisible(false);
                }}
                to="/services"
                className="navLink"
              >
                Services
              </NavLink>
            </li>
            <li>
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
                    setListVisible(false);
                  }}
                  to="/"
                  className="navLink"
                >
                  Testimonials
                </NavLink>
              )}

              {!tabSelected.tabSelected && (
                <a
                  onClick={() => setListVisible(false)}
                  href="#testimonialsSection"
                  className="navLink"
                >
                  Testimonials
                </a>
              )}
            </li>
            <li>
              {!tabSelected.tabSelected && (
                <a
                  onClick={() => setListVisible(false)}
                  href="#contactSection"
                  className="navLink"
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
                    setListVisible(false);
                  }}
                  to="/"
                  className="navLink"
                >
                  Contact
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
{
  /* <NavLink
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
        <a href="#aboutMeSection" className="lower-container-items link">
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
        <a href="#testimonialsSection" className="lower-container-items link">
          Testimonials
        </a>
      )}
      {!tabSelected.tabSelected && (
        <a href="#contactSection" className="lower-container-items link">
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
      )} */
}
