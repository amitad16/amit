import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="http://mattfarley.ca/img/mf-logo.svg" alt="" />
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
};

export default NavBar;
