import React, { Component } from "react";

import Stopwatch from "./Components/Stopwatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Timers">
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
