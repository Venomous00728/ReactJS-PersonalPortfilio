import React, { useEffect, useRef, useState } from "react";
import "../../styles/testimonials.css";
import { useSelector } from "react-redux";
import { isDesktop, isMobile } from "react-device-detect";

const Testimonials = () => {
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const tempRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const tab = useSelector((state) => state.nav.tab);

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
    if (tab.tab !== "testimonials") return;
    if (testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (tab.tab !== "contact") return;
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={isMobile ? testimonialRef : tempRef}
      id={isMobile ? "testimonialsSection" : ""}
      className="testimonials-contianer"
    >
      <div className="testimonials-headings">
        <h1>TESTIMONIALS</h1>
        <span>
          <span>5.0</span>
          <img src={require("../../assets/5-star.webp")} />
          <span>Google Reviews</span>
        </span>
      </div>
      <div className="testimonials-reviews">
        <div
          style={
            screenWidth > 1140
              ? { marginRight: "27px", width: "30px", height: "30px" }
              : { width: "30px", height: "30px" }
          }
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="0 19.7 200 161.209"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 19.7 200 161.209"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path
                fill="#AFAFAF"
                d="M78.2 19.8L85.7 33c.8 1.4 1.7 2.9 2.7 4.5-3.9 2.3-7.7 4.7-11.5 6.9-12.7 7.3-24.2 16.2-33.4 27.8-8.9 11.2-13 24.1-14.3 38.5 4.4 0 8.6-.4 12.8.1 6.8.7 13.9 1.1 20.3 3.3 13.1 4.4 19.5 14.3 20.7 27.9.6 7.4-.5 14.4-4.2 20.9-7.8 13.6-20.5 19.7-37.3 17.5-21.8-2.6-33.5-13.5-38.7-36.3-1.2-5.3-1.9-10.7-2.8-16v-15.4c.2-.6.5-1.2.6-1.9 1-10 4-19.3 8.8-28.1 11.1-20.4 27-36.3 46.3-48.9 7.2-4.7 14.5-9.4 21.8-14.1.2.1.4.1.7.1z"
              ></path>
              <path
                fill="#AFAFAF"
                d="M189.4 19.8c3.5 5.8 6.9 11.6 10.6 17.8-1.7 1-3.4 2.1-5.1 3-13.4 7.8-26.3 16.1-36.8 27.9-10.7 12-15.9 26-17.4 42.3 1.4 0 2.8-.1 4.2 0 8.3.6 16.8.2 24.8 2.1 18.9 4.4 26.1 18.9 24.8 36.6-1.3 16.9-15.3 30.5-31.9 31.3-12.2.6-23.9-1.1-33.5-9.5-8.7-7.6-12.6-17.9-15.1-28.8-7.2-32.2 2.1-59.7 23.9-83.6 11-12 23.8-21.8 37.6-30.3 4.5-2.8 8.8-5.8 13.3-8.8h.6z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="article-container">
          <img
            style={{ width: "147px", height: "147px", objectFit: "cover" }}
            src={require("../../assets/Testimonials 1.webp")}
          />
          <p>
            Alina was simply incredible. I was so nervous the first time I met
            her but she put me at ease within seconds of meeting her. Her work
            is outstanding, flawless actually. I can’t express enough how
            amazing Alina is, she’s a complete natural and incredibly efficient.
            More than anything she was just so calming and selfless!
          </p>
        </div>
        {screenWidth > 1140 && (
          <>
            <div className="article-container">
              <img
                style={{ width: "147px", height: "147px", objectFit: "cover" }}
                src={require("../../assets/Testimonials 2.webp")}
              />
              <p>
                Best make up artist ever !!! I did 3 different looks in one day
                which ended up being a bit chaotic for Alina as the timing was
                tight and she works soooo well underpressure, loved all my looks
                even all my guests loved it and were surprised how punctual we
                were. Will no doubt to get Alina again as my make up artist
              </p>
            </div>
            <div className="article-container">
              <img
                style={{ width: "147px", height: "147px", objectFit: "cover" }}
                src={require("../../assets/Testimonials 3.webp")}
              />
              <p>
                Alina did exactly what I asked for and I was very pleased with
                the results. I got so many compliments on the look. Alina is
                also very pleasant to work with as she does a great job of
                making her client feel comfortable and ensured that I was
                satisfied with the results. I will definitely book her for
                future events and recommend her to others.
              </p>
            </div>
          </>
        )}
        <div className="article-container">
          <img
            style={{ width: "147px", height: "147px", objectFit: "cover" }}
            src={require("../../assets/Testimonials 4.webp")}
          />
          <p>
            Alina is AMAZING! She got me ready on my wedding day for both
            ceremony and reception hair and makeup. I was absolutely blown away
            with what she created on me. I have never felt so beautiful as I did
            on my wedding day. She is so talented and made me look flawless and
            it still looked perfect at the end of a long day. The only person I
            will ever trust to do my makeup!
          </p>
          <div
            style={{ marginBottom: "1.8rem" }}
            ref={contactRef}
            id={!isMobile ? "contactSection" : ""}
          ></div>
          <div
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "270px",
              transform: "scaleY(-1) scaleX(-1)",
            }}
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 19.7 200 161.209"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 19.7 200 161.209"
              role="presentation"
              aria-hidden="true"
            >
              <g>
                <path
                  fill="#AFAFAF"
                  d="M78.2 19.8L85.7 33c.8 1.4 1.7 2.9 2.7 4.5-3.9 2.3-7.7 4.7-11.5 6.9-12.7 7.3-24.2 16.2-33.4 27.8-8.9 11.2-13 24.1-14.3 38.5 4.4 0 8.6-.4 12.8.1 6.8.7 13.9 1.1 20.3 3.3 13.1 4.4 19.5 14.3 20.7 27.9.6 7.4-.5 14.4-4.2 20.9-7.8 13.6-20.5 19.7-37.3 17.5-21.8-2.6-33.5-13.5-38.7-36.3-1.2-5.3-1.9-10.7-2.8-16v-15.4c.2-.6.5-1.2.6-1.9 1-10 4-19.3 8.8-28.1 11.1-20.4 27-36.3 46.3-48.9 7.2-4.7 14.5-9.4 21.8-14.1.2.1.4.1.7.1z"
                ></path>
                <path
                  fill="#AFAFAF"
                  d="M189.4 19.8c3.5 5.8 6.9 11.6 10.6 17.8-1.7 1-3.4 2.1-5.1 3-13.4 7.8-26.3 16.1-36.8 27.9-10.7 12-15.9 26-17.4 42.3 1.4 0 2.8-.1 4.2 0 8.3.6 16.8.2 24.8 2.1 18.9 4.4 26.1 18.9 24.8 36.6-1.3 16.9-15.3 30.5-31.9 31.3-12.2.6-23.9-1.1-33.5-9.5-8.7-7.6-12.6-17.9-15.1-28.8-7.2-32.2 2.1-59.7 23.9-83.6 11-12 23.8-21.8 37.6-30.3 4.5-2.8 8.8-5.8 13.3-8.8h.6z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="testimonials-more">
        <span>More reviews</span>
        <span>
          <a target="_blank" href="https://g.co/kgs/WTjZHn">
            here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
