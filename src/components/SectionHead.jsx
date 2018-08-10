import React from "react";

import "./SectionHead.css";

class SectionHead extends React.Component {
  state = { sectionHeadingClass: [], sectionSubHeadingClass: [] };

  componentDidMount() {
    this.setResizedClasses();
    window.addEventListener("resize", () => {
      this.setResizedClasses();
    });
  }

  setResizedClasses = () => {
    let sectionHeadingClassTemp =
      this.props.type === "landing"
        ? ["landing section-heading"]
        : ["section-heading"];
    let sectionSubHeadingClassTemp = ["landing section-subheading text-grey"];
    if (window.innerWidth > 1200) {
      if (
        sectionHeadingClassTemp.indexOf("em3") === -1 &&
        sectionSubHeadingClassTemp.indexOf("em1_5") === -1
      ) {
        sectionHeadingClassTemp.push("em3");
        sectionSubHeadingClassTemp.push("em1_5");
      }
    } else if (window.innerWidth > 992) {
      if (
        sectionHeadingClassTemp.indexOf("em2_5") === -1 &&
        sectionSubHeadingClassTemp.indexOf("em1_5") === -1
      ) {
        sectionHeadingClassTemp.push("em2_5");
        sectionSubHeadingClassTemp.push("em1_5");
      }
    } else if (window.innerWidth > 768) {
      if (
        sectionHeadingClassTemp.indexOf("em2") === -1 &&
        sectionSubHeadingClassTemp.indexOf("em1_5") === -1
      ) {
        sectionHeadingClassTemp.push("em2");
        sectionSubHeadingClassTemp.push("em1_5");
      }
    } else if (window.innerWidth <= 768) {
      if (
        sectionHeadingClassTemp.indexOf("em2") === -1 &&
        sectionSubHeadingClassTemp.indexOf("em1_25") === -1
      ) {
        sectionHeadingClassTemp.push("em2");
        sectionSubHeadingClassTemp.push("em1_25");
      }
    }

    if (window.innerWidth <= 768) {
      document.querySelector(".avatar").style.width = "120px";
      document.querySelector(".avatar").style.padding = "32px 0";
    } else {
      document.querySelector(".avatar").style.width = "";
      document.querySelector(".avatar").style.padding = "32px 80px";
    }

    this.setState({
      sectionHeadingClass: sectionHeadingClassTemp,
      sectionSubHeadingClass: sectionSubHeadingClassTemp
    });
  };

  render() {
    return (
      <div className="row">
        <div className="mx-auto">
          <h1
            className={
              this.props.type === "landing"
                ? this.state.sectionHeadingClass.join(" ") + " text-white"
                : "section-heading em2"
            }
          >
            Hi, I’m Amit. Nice to meet you.
          </h1>
          <p
            className={
              this.props.type === "landing"
                ? this.state.sectionSubHeadingClass.join(" ") + " text-white"
                : "section-subheading em1_25"
            }
          >
            This is some description
          </p>
          {this.props.type === "landing" ? (
            <React.Fragment>
              <div className="col-12">
                <img
                  className="avatar img-fluid"
                  src="http://mattfarley.ca/img/mf-avatar.svg"
                />
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
