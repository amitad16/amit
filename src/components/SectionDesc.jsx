import React from "react";

import "./SectionDesc.css";

import Portfolio from "./Portfolio";
import Skills from "./Skills";

const SectionDesc = props => {
  return (
    <React.Fragment>
      {props.type === "skills" ? (
        <Skills />
      ) : props.type === "portfolio" ? (
        <Portfolio />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default SectionDesc;
