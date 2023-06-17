import React from "react";
import Header from "./Header/Header";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="first">
      <div className="hheader">
        <Header></Header>
      </div>

      <div className="decor">
        <div className="move">
          <div className="decor1">FULLSTACKDEVELOPER</div>
        </div>
        <div className="move">
          <div className="black">
            <div className="decor2">GRAPHICDESIGNER</div>
          </div>
        </div>
        <div className="move">
          <div className="decor3">UI/UX</div>
        </div>

        <div className="move">
          {" "}
          <div className="black1">
            <div className="decor4">SOFTWARE DEVELOPER</div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info2">
          <div>They Call ME</div>
          <div className="name">
            <div>K</div>
            <div>A</div>
            <div>M</div>
            <div>A</div>
            <div>L</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
