import React, { Component } from "react";
import Chart from "./Chart";

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        There should be a chart below...
        <Chart />
        <Chart />
      </div>
    );
  }
}

export default App;
