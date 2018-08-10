import React from "react";

import NavBar from "./NavBar";
import Section from "./Section";

const Landing = () => {
  return (
    <header className="bg-violet text-white">
      <NavBar />
      <Section type="landing" />
    </header>
  );
};

export default Landing;
