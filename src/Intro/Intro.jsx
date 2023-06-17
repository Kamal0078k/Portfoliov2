import React from "react";
import ReactDOM from "react-dom";
import "./Intro.css";

const Intro = () => {
  return ReactDOM.createPortal(
    <div className="intro">
      <div className="buckle">
        <div>B</div>
        <div>U</div>
        <div>C</div>
        <div>K</div>
        <div>L</div>
        <div>E</div>
        <div>U</div>
        <div>P</div>
      </div>
    </div>,
    document.getElementById("intro")
  );
};

export default Intro;
