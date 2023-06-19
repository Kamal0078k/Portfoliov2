import React from "react";
import "./Body.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Works from "./Worksv2/Worksv2";
import Contact from "./Contact/Contact";
import Worksv2 from "./Worksv2/Worksv2";

const Body = () => {
  return (
    <div className="smooth">
      <Hero />
      <About />
      <Worksv2 />
      <Contact />
    </div>
  );
};

export default Body;
