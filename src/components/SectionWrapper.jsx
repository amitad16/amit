import React from "react";

import Section from "./Section";

class SectionWrapper extends React.Component {
  componentDidMount() {
    let wrapper = document.querySelector(".section-wrapper");

    for (let i = 1; i <= wrapper.childElementCount; ++i) {
      if (i % 2 !== 0) {
        wrapper.children[i - 1].children[0].className += " bg-white text-black";
      } else {
        wrapper.children[i - 1].children[0].className +=
          " bg-violet text-white";
      }
    }
  }

  render() {
    return (
      <div className="section-wrapper">
        <Section type="skills" />
        <Section type="portfolio" />
      </div>
    );
  }
}

export default SectionWrapper;
