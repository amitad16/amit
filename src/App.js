import React, { Component } from "react";
import logo from "./logo.svg";

import Landing from "./components/Landing";
import SectionWrapper from "./components/SectionWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <SectionWrapper />
      </div>
    );
  }
}

export default App;
