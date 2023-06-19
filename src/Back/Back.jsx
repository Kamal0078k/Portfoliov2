import React from "react";
import ReactDOM from "react-dom";
import "./Back.css";

const Back = () => {
  return ReactDOM.createPortal(
    <div className="minus">
      <div className="kamalbig">KML</div>
    </div>,
    document.getElementById("kamal")
  );
};

export default Back;
