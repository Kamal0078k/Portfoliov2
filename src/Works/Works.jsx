import React, { useEffect } from "react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gsap from "gsap";
import "./Works.css";
import SingleWork from "./WorkComponent/SingleWork";
const Works = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".blackwork",
      {
        x: "100vw",
      },
      {
        x: 0,

        scrollTrigger: {
          trigger: ".blackwork",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="third">
      <div className="blackwork">
        <div className="workContainer">
          <div className="worktitle">WORKS</div>
        </div>
      </div>
      <SingleWork />
    </div>
  );
};

export default Works;
