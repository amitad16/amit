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
    if (window.innerHeight < 800) {
      document.querySelector("section.landing").style.height = "660px";
    }
    if (window.innerHeight >= 800) {
      document.querySelector("section.landing").style.height =
        "calc(100vh - 140px)";
    }
  };

  render() {
    return (
      <div>
        <section
          className={
            this.props.type === "landing" ? "landing heading" : "heading"
          }
        >
          <div className="container">
            <SectionHead
              type={this.props.type === "landing" ? "landing" : ""}
            />
          </div>
        </section>
        {this.props.type === "landing" ? (
          <div className="button-styled button-circle know-more">V</div>
        ) : (
          <section className="desc card box-shadow">
            <SectionDesc
              type={this.props.type === "landing" ? "landing" : ""}
            />
          </section>
        )}
      </div>
    );
  }
}

export default Section;
