import React, { useEffect } from "react";
import DemoCarousel from "./common/carousel";
import Galleries from "./homeComponents/galleries";
import AboutMe from "./homeComponents/aboutMe";
import Services from "./homeComponents/services";
import Testimonials from "./homeComponents/testimonials";
import Contact from "./homeComponents/contact";
import "../styles/home.css";
import { isDesktop } from "react-device-detect";
const Home = () => {
  return (
    <div className="homeContainer">
      <DemoCarousel />
      <Galleries />
      <AboutMe />
      {isDesktop && <Services />}
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
