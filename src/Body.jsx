import React from "react";
import "./Body.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Works from "./Worksv2/Worksv2";
import Contact from "./Contact/Contact";
import Worksv2 from "./Worksv2/Worksv2";

const Body = () => {
  return (
    <>
      <Hero />
      <About />
      <Worksv2 />
      <Contact />
    </>
  );
};

export default Body;
