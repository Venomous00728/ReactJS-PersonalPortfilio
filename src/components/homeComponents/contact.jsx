import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../../styles/contact.css";
import { isMobile } from "react-device-detect";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setResponse("");
    }, 6000);

    return () => clearTimeout(timer);
  }, [response]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/myyqgkly", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      setEmail("");
      setMessage("");
      setName("");
      setPhone("");
      setResponse("The message has been sent.");
    } else {
      setResponse("Error: The message not sent.");
    }
  };

  const sectionRef = useRef(null);
  const tempRef = useRef(null);

  const tab = useSelector((state) => state.nav.tab);

  useEffect(() => {
    if (tab.tab !== "contact") return;
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={isMobile ? sectionRef : tempRef}
      id={isMobile ? "contactSection" : ""}
      className="contact-container"
      style={{
        backgroundImage: `url(${require("../../assets/Background-Image.webp")})`,
      }}
    >
      <div className="contact-info-header">
        <div className="info-header-wrapper">
          <h2>Touch Base</h2>
          <span>Get in touch for details, quotes, and bookings</span>
        </div>
        <div className="contact-form-container">
          <div className="form-links-container">
            <div className="form-links">
              <p>E:</p>
              <a href="mailto:mshoaibkhansumbal@gmail.com">
                mshoaibkhansumbal@gmail.com
              </a>
            </div>
            <div className="form-links">
              <p>M:</p>
              <a href="tel:07231463183">07231 463 183</a>
            </div>
            <div className="form-links">
              <p>I:</p>
              <a target="_blank" href="https://www.instagram.com/shoaib00728/">
                https://www.instagram.com/shoaib00728/
              </a>
            </div>
          </div>
          <div className="form-fields">
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name *"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email *"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="phone"
                name="phone"
                value={phone}
                placeholder="Phone *"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="response-container">
                <p>{response}</p>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div className="map-container">
          <h4>LOCATIONS COVERED</h4>
          <p>23 Cardwell Rd, London N7 0NL, United Kingdom</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9922.758670252424!2d-0.124308!3d51.5555893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0efcfba19b%3A0xb3928e288dc04e64!2sJames%20Adisai%20Ltd%20-%20Professional%20Makeup%20Artists%20London!5e0!3m2!1sen!2s!4v1688812084682!5m2!1sen!2s"
            width="100%"
            height={isMobile ? "200" : "300"}
            style={{
              border: "3px solid black",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
