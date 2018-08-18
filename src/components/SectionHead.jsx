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
          {this.props.type === "landing" ? (
            <React.Fragment>
              <h1
                className={
                  this.state.sectionHeadingClass.join(" ") + " text-white"
                }
              >
                Desingner &amp; Developer
              </h1>
              <p
                className={
                  this.state.sectionSubHeadingClass.join(" ") + " text-white"
                }
              >
                This is some description
              </p>
              <div className="col-12">
                <img
                  className="avatar img-fluid"
                  src="http://mattfarley.ca/img/mf-avatar.svg"
                  alt="Amit Dimri"
                />
              </div>
            </React.Fragment>
          ) : this.props.type === "skills" ? (
            <React.Fragment>
              <h1 className={"section-heading em2"}>Skills</h1>
              <p className={"section-subheading em1_25"}>skill desc</p>
            </React.Fragment>
          ) : this.props.type === "portfolio" ? (
            <React.Fragment>
              <h1 className={"section-heading em2"}>Portfolio</h1>
              <p className={"section-subheading em1_25"}>p desc</p>
            </React.Fragment>
          ) : this.props.type === "contact" ? (
            <React.Fragment>
              <h1 className={"section-heading em2"}>Contact</h1>
              <p className={"section-subheading em1_25"}>p contact</p>
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
