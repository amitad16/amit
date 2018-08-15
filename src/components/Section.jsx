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
  };

  render() {
    let sectionClassName =
      this.props.type === "landing" ? "landing-section" : "section";
    let headingClassName =
      this.props.type === "landing" ? "landing heading" : "heading";

    return (
      <section className={sectionClassName}>
        <div className={headingClassName}>
          <div className="container">
            <SectionHead
              type={
                this.props.type === "landing"
                  ? "landing"
                  : this.props.type === "skills"
                    ? "skills"
                    : this.props.type === "portfolio"
                      ? "portfolio"
                      : ""
              }
            />
          </div>
        </div>
        {this.props.type === "landing" ? (
          ""
        ) : (
          <div className="desc box-shadow">
            <SectionDesc type={this.props.type} />
          </div>
        )}
      </section>
    );
  }
}

export default Section;
