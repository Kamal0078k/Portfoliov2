import react, { useState, useEffect } from "react";
import Intro from "./Intro/Intro";
import Body from "./Body";

function App() {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    const enableScrolling = () => {
      document.body.style.overflow = "auto";
    };
    const timeout = setTimeout(enableScrolling, 3500);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timeout);
    };
    //

    // // Enable scrolling after 3 seconds
    //

    //

    // // Clean up the timeout on unmount
    // return () => ;
  }, []);
  return (
    <>
      <Intro />
      <Body />
    </>
  );
}

export default App;
