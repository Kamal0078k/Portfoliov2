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
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.498,0 0.488,0.336 0.5,0.5 0.542,0.8 0.609,0.83 0.668,0.899 0.706,0.942 0.788,0.97 1,1 "
        ),

        scrollTrigger: {
          trigger: ".clip",
          start: "top 70%",
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
          My name is Kamal. I'm a full stack developer, UI/UX designer, graphic
          designer, and former civil engineer. I design and develop strong,
          user-friendly, and aesthetically pleasing websites and applications
          because I have a passion for both technology and design.
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
