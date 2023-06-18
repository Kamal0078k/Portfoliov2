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
        <div className="con">
          <a
            href="https://www.linkedin.com/in/kamal-arukala-08534b173/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </div>
        <div className="con">
          <a
            href="https://github.com/Kamal0078k"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
        <div className="con">
          <a
            href="https://www.instagram.com/kamal_arukala/"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
