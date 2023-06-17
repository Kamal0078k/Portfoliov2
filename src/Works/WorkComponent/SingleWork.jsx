import React from "react";
import "./SingleWork.css";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger, CustomEase } from "gsap/all";
import gall1 from "./../../assets/gall1.png";
import gall2 from "./../../assets/gall2.png";
import gall3 from "./../../assets/gall3.png";
import unp1 from "./../../assets/unpfi.png";
import unp2 from "./../../assets/unpth.png";
import unp3 from "./../../assets/unpmid.png";

const SingleWork = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
    gsap.fromTo(
      ".gall1",

      {
        y: 150,
        opacity: 0,
        x: -30,
      },
      {
        y: 0,
        opacity: 1,
        x: 20,
        scrollTrigger: {
          trigger: ".gall1",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".gall3",

      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".gall3",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".gall2",
      {
        y: 150,
        opacity: 0,
        x: 0,
      },
      {
        y: 0,
        opacity: 1,
        x: -20,
        scrollTrigger: {
          trigger: ".gall2",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".unp1",

      {
        y: 150,
        opacity: 0,
        x: 0,
      },
      {
        y: 0,
        opacity: 1,
        x: 20,
        scrollTrigger: {
          trigger: ".unp1",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".unp3",

      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".unp3",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".unp2",
      {
        y: 150,
        opacity: 0,
        x: 0,
      },
      {
        y: 0,
        opacity: 1,
        x: -20,
        scrollTrigger: {
          trigger: ".unp2",
          start: "top 100%",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div>
      <div className="SW">
        <div className="gallimages">
          <img src={gall1} className="gall1" />
          <img src={gall2} className="gall2" />
          <img src={gall3} className="gall3" />
        </div>

        <div className="desc1">
          {" "}
          <div className="galltit">GALLERY</div>
          <p>
            This MERN stack gallery web application allows users to create an
            account and store their memorable images. The application also
            enables users to delete their unwanted images and share images with
            other users via their username.
          </p>
        </div>
      </div>
      <div>
        <div className="invoiceimages">
          <img src={unp1} className="unp1" />
          <img src={unp2} className="unp2" />
          <img src={unp3} className="unp3" />
        </div>

        <div className="desc2">
          {" "}
          <div className="unptit">UNPLUGGED</div>
          <p>
            As a branding project, you created a logo for a shopping company
            called Unplug. The logo represents the brand identity and aims to
            communicate its values and mission visually. It likely involved
            research, creativity, and collaboration with the company's
            stakeholders to ensure the final product meets their needs and
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleWork;
