import React, { useEffect } from "react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gsap from "gsap";
import "./About.css";
import kamal from "./../assets/kamal.png";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);

    gsap.fromTo(
      ".clip",
      {
        x: "-100vw",
      },
      {
        x: 0,

        scrollTrigger: {
          trigger: ".clip",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".box",
      {
        y: 100,
        x: 100,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".box",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".info3",
      {
        x: -100,
      },
      {
        x: 0,

        scrollTrigger: {
          trigger: ".info3",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".profileimg",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".info3",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // gsap.to(".somek", {
    //   scaleX: 1,
    //   transformOrigin: "left",
    //   scrollTrigger: {
    //     trigger: ".somek",
    //     start: "top 90%",
    //     end: "bottom 10%",
    //     scrub: true,
    //   },
    // });
  }, []);
  return (
    <div className="second">
      <div className="clip">
        <div className="title">ABOUT</div>
      </div>
      {/* <hr className="line" /> */}

      <div className="two">
        <div className="info3">
          I'm Kamal,a full stack developer, UI/UX designer, graphic designer and
          a former civil engineer. With a passion for technology and design, I
          create robust, intuitive, and visually appealing websites and
          applications.
        </div>
        <div className="profile">
          <img src={kamal} className="profileimg" />
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
