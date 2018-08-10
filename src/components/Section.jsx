import React from "react";

import SectionHead from "./SectionHead";
import SectionDesc from "./SectionDesc";

import "./Section.css";

class Section extends React.Component {
  componentDidMount() {
    this.setLandingSectionHeight();
    window.addEventListener("resize", () => {
      this.setLandingSectionHeight();
    });
  }

  setLandingSectionHeight = () => {
    if (window.innerWidth < 425) {
      document.querySelector("section > .landing").style.padding = "64px 24px";
    }
    // if (window.innerHeight < 800) {
    //   document.querySelector("section.landing").style.height = "660px";
    // }
    // if (window.innerHeight >= 800) {
    // document.querySelector("section.landing").style.height = "85vh";
    // }
  };

  render() {
    return (
      <section
        className={
          this.props.type === "landing" ? "landing-section" : "section"
        }
      >
        <div
          className={
            this.props.type === "landing" ? "landing heading" : "heading"
          }
        >
          <div className="container">
            <SectionHead
              type={this.props.type === "landing" ? "landing" : ""}
            />
          </div>
        </div>
        {this.props.type === "landing" ? (
          ""
        ) : (
          <div className="desc card box-shadow">
            <SectionDesc
              type={this.props.type === "landing" ? "landing" : ""}
            />
          </div>
        )}
      </section>
    );
  }
}

export default Section;
