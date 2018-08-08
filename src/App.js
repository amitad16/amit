import React, { Component } from "react";
import logo from "./logo.svg";

import NavBar from "./components/NavBar";
import SectionWrapper from "./components/SectionWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SectionWrapper />
      </div>
    );
  }
}

export default App;
