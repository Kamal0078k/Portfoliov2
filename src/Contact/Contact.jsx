import React, { useEffect } from "react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gsap from "gsap";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".blachead",
      {
        x: "-100vw",
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".blachead",
          scrub: true,
          start: "top 100%",
          end: "bottom 60%",
        },
      }
    );
  }, []);
  return (
    <div className="fourth">
      <div className="blachead">
        <div className="flexcon">
          <div className="contit"> CONTACT</div>
        </div>
      </div>
      <div className="contacts">
        <div className="con">LINKEDIN</div>
        <div className="con">GITHUB</div>
        <div className="con">INSTAGRAM</div>
      </div>
    </div>
  );
};

export default Contact;
