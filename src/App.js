import React, { Component } from "react";
import {createGlobalStyle} from 'styled-components'

import Stopwatch from "./Components/Stopwatch";
const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background: #131419;
}
`
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle/>
        <div className="App">
          <div className="Timers">
            <Stopwatch />
          </div>
        </div>
      </>
    )
  }
}

export default App;
