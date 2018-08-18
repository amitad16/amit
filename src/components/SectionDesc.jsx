import React from "react";

import "./SectionDesc.css";

import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

const SectionDesc = props => {
  return (
    <React.Fragment>
      {props.type === "skills" ? (
        <Skills />
      ) : props.type === "portfolio" ? (
        <Portfolio />
      ) : props.type === "contact" ? (
        <Contact />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default SectionDesc;
