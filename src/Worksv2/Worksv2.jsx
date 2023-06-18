import React, { useEffect } from "react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gsap from "gsap";
import "./Worksv2.css";
import gall1 from "./../assets/gall1.png";
import gall2 from "./../assets/gall2.png";
import gall3 from "./../assets/gall3.png";
import unp1 from "./../assets/unpfi.png";
import unp2 from "./../assets/unpth.png";
import unp3 from "./../assets/unpmid.png";

const Worksv2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".blackv2",
      {
        x: "100vw",
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".blackv2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".gall1v2",
      {
        x: "100px",
        opacity: 0,
        y: 50,
      },
      {
        x: 0,
        opacity: 1,
        y: 50,
        scrollTrigger: {
          trigger: ".gall1v2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".gall2v2",
      {
        x: "-100px",
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        y: 50,
        scrollTrigger: {
          trigger: ".gall2v2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".gall3v2",
      {
        y: 0,
        opacity: 0,
      },
      {
        y: -50,
        opacity: 1,
        scrollTrigger: {
          trigger: ".gall3v2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".unp1v2",
      {
        x: "100px",
        opacity: 0,
        y: 50,
      },
      {
        x: 0,
        opacity: 1,
        y: 50,
        scrollTrigger: {
          trigger: ".unp1v2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".unp2v2",
      {
        x: "-100px",
        y: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        y: 50,
        scrollTrigger: {
          trigger: ".unp2v2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      ".unp3v2",
      {
        y: 0,
        opacity: 0,
      },
      {
        y: -50,
        opacity: 1,
        scrollTrigger: {
          trigger: ".unp3v2",
          scrub: true,
          start: "top 100%",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <div className="thirdv2">
      <div className="blackv2">
        <div className="flexwrk">
          <div className="titwork">PROJECTS</div>
        </div>
      </div>
      <div className="Gallv2">
        <div className="gallimagesv2">
          <img src={gall1} className="gall1v2" />
          <img src={gall2} className="gall2v2" />

          <img src={gall3} className="gall3v2" />
        </div>
        <div className="gallinfov2">
          <div className="galltitv2">GALLERY</div>
          <div className="gallinfov3">
            This MERN stack gallery web application enables users to register
            and store their priceless photos. Users can share photographs via
            their username with other users and erase any unwanted images from
            their device using this programme.
          </div>
        </div>
      </div>
      <div className="Unpv2">
        <div className="unpimagesv2">
          <img src={unp1} className="unp1v2" />
          <img src={unp2} className="unp2v2" />
          <img src={unp3} className="unp3v2" />
        </div>
        <div className="unpinfov2">
          <div className="unptitv2">UNPLUGGED</div>
          <div className="unpinfov3">
            As part of a branding assignment, I designed a logo for the retailer
            Unplug. The brand's identity is represented by the logo, which tries
            to graphically convey its beliefs and mission. It involved research,
            creativity, and collaboration with the company's stakeholders to
            ensure the final product meets their needs and goals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worksv2;
