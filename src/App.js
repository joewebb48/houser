import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import route from "./route";

//components
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import House from "./component/House/House";
import Wizard from "./component/Wizard/Wizard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {route}
        <Header />
      </div>
    );
  }
}

export default App;
