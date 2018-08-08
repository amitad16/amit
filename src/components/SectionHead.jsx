import React from "react";

import "./SectionHead.css";

class SectionHead extends React.Component {
  state = { classSectionHeading: ["section-heading"] };

  componentDidMount() {
    this.setResizedClasses();
    window.addEventListener("resize", () => {
      this.setResizedClasses();
    });
  }

  setResizedClasses = () => {
    let classSectionHeadingTemp = ["landing section-heading"];
    if (window.innerWidth > 1200) {
      if (classSectionHeadingTemp.indexOf("em3") === -1) {
        classSectionHeadingTemp.push("em3");
      }
    } else if (window.innerWidth > 992) {
      if (classSectionHeadingTemp.indexOf("em2_5") === -1) {
        classSectionHeadingTemp.push("em2_5");
      }
    } else if (window.innerWidth > 768) {
      if (classSectionHeadingTemp.indexOf("em2") === -1) {
        classSectionHeadingTemp.push("em2");
      }
    } else if (window.innerWidth <= 768) {
      if (classSectionHeadingTemp.indexOf("em1_5") === -1) {
        classSectionHeadingTemp.push("em1_5");
      }
    }
    this.setState({ classSectionHeading: classSectionHeadingTemp });
  };

  render() {
    return (
      <div className="row">
        <div className="mx-auto">
          <h1
            className={
              this.props.type === "landing"
                ? this.state.classSectionHeading.join(" ") + " text-white"
                : "section-heading em2"
            }
          >
            Hi, I’m Amit. Nice to meet you.
          </h1>
          <p
            className={
              this.props.type === "landing"
                ? "section-subheading text-grey em1_5"
                : "section-subheading em1_25"
            }
          >
            This is some description
          </p>
          {this.props.type === "landing" ? (
            <React.Fragment>
              <div className="col-12">
                <img
                  className="avatar"
                  src="http://mattfarley.ca/img/mf-avatar.svg"
                />
              </div>
              <div className="row">
                <div className="col-4 social-links">
                  <a href="#" className="button-circle fa fa-github mx-auto" />
                </div>
                <div className="col-4">
                  <a
                    href="#"
                    className="button-circle fa fa-linkedin mx-auto"
                  />
                </div>
                <div className="col-4">
                  <a
                    href="#"
                    className="button-circle fa fa-envelope mx-auto"
                  />
                </div>
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default SectionHead;
