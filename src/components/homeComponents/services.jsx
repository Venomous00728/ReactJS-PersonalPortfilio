import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/services.css";
import { NavLink } from "react-router-dom";
import { setTabSelected } from "../../redux/navSlice";
import { isMobile } from "react-device-detect";

const Services = () => {
  const sectionRef = useRef(null);
  const tempRef = useRef(null);

  const tab = useSelector((state) => state.nav.tab);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tab.tab !== "testimonials") return;
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="services-container">
      <h1>SERVICES</h1>
      <p>Makeup artistry and hair styling services for all occasions</p>
      <div className="card-container">
        <div className="card-info-container">
          <div className="cards">
            <h2>TRIALS</h2>
            <hr />
            <br />
            <span
              style={{
                textAlign: "center",
              }}
            >
              Perfect your look <br /> through a makeup and <br /> hair styling
              trial with <br /> Alina for your big day
            </span>
          </div>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            to="/services"
            className="link-button"
          >
            <span className="details-buttons">DETAILS</span>
          </NavLink>
        </div>
        <div className="card-info-container">
          <div className="cards">
            <h2>BRIDAL</h2>
            <hr />
            <br />
            <span style={{ textAlign: "center" }}>
              Makeup and hair <br /> styling services with a <br /> difference
              for all your <br /> bridal events
            </span>
          </div>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            to="/services"
            className="link-button"
          >
            <span className="details-buttons">DETAILS</span>
          </NavLink>
        </div>
        <div className="card-info-container">
          <div className="cards">
            <h2>PARTY</h2>
            <hr />
            <br />
            <span style={{ textAlign: "center" }}>
              Makeup and hair <br /> styling services for <br /> special
              occasions, <br /> bridesmaids & guests
            </span>
          </div>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            to="/services"
            className="link-button"
          >
            <span className="details-buttons">DETAILS</span>
          </NavLink>
        </div>
        <div className="card-info-container">
          <div className="cards">
            <h2>FASHION</h2>
            <hr />
            <br />
            <span style={{ textAlign: "center" }}>
              Tailored makeup <br /> services for your <br /> brand, marketing
              or <br /> print requirements
            </span>
          </div>
          <NavLink
            onClick={() =>
              dispatch(
                setTabSelected({
                  tabSelected: true,
                })
              )
            }
            to="/services"
            className="link-button"
          >
            <span className="details-buttons">DETAILS</span>
          </NavLink>
        </div>
      </div>
      <div
        style={{ marginBottom: "1.5rem" }}
        ref={!isMobile ? sectionRef : tempRef}
        id={!isMobile ? "testimonialsSection" : ""}
      ></div>
      <a href="#contactSection" className="link-button">
        <span
          style={{ padding: "7px", paddingLeft: "18px", paddingRight: "18px" }}
          className="details-buttons"
        >
          BOOK NOW
        </span>
      </a>
    </div>
  );
};

export default Services;
