import React, { Component } from "react";
import logo from "./logo.svg";

import Landing from "./components/Landing";
import SectionWrapper from "./components/SectionWrapper";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <SectionWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
