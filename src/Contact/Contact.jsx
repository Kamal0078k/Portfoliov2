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
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.498,0 0.488,0.336 0.5,0.5 0.542,0.8 0.609,0.83 0.668,0.899 0.706,0.942 0.788,0.97 1,1 "
        ),
        scrollTrigger: {
          trigger: ".blachead",

          start: "top 70%",
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
