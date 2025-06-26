import React, { Component } from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Workspace from "./components/Workspace";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "100px" }}>
        <Header />
        <Description />
        <Workspace />
        <Footer />
      </div>
    );
  }
}

export default App;
