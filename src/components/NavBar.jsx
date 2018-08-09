import React from "react";

import "./NavBar.css";

class NavBar extends React.Component {
  state = { navbarClass: ["navbar navbar-light"] };

  componentDidMount() {
    this.setResizedClasses();
    window.addEventListener("resize", () => {
      this.setResizedClasses();
    });
  }

  setResizedClasses = () => {
    // let navbarClassTemp = this.state.navbarClass;
    // if (
    //   window.innerWidth < window.innerHeight &&
    //   navbarClassTemp.indexOf("h-10") === -1
    // ) {
    //   navbarClassTemp.push("h-10");
    // } else if (
    //   window.innerWidth > window.innerHeight &&
    //   navbarClassTemp.indexOf("h-10") !== -1
    // ) {
    //   let i = navbarClassTemp.indexOf("h-10");
    //   navbarClassTemp = [
    //     ...navbarClassTemp.slice(0, i),
    //     ...navbarClassTemp.slice(i + 1, navbarClassTemp.length)
    //   ];
    // }
    // this.setState({ navbarClass: navbarClassTemp });
  };

  render() {
    return (
      <nav className={this.state.navbarClass.join(" ")}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              style={{ height: "64px" }}
              src="https://uploads-ssl.webflow.com/5afb813f204bab8382b04967/5afe6301d78dedd7d59c4f5a_linkedin.png"
              alt=""
            />
          </a>
          <span className="navbar-text">
            <button
              className="button-styled button-rectangle bg-white text-violet"
              type="button"
            >
              Yes
            </button>
          </span>
        </div>
      </nav>
    );
  }
}
export default NavBar;
