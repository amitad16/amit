import React from "react";

import NavBar from "./NavBar";
import Section from "./Section";

const Landing = () => {
  let style = {
    height: "100vh"
  };

  return (
    <header className="bg-violet text-white" style={style}>
      <NavBar />
      <Section type="landing" />
    </header>
  );
};

export default Landing;
