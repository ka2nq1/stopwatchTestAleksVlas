import log from "loglevel";
import React, { Component } from "react";
import { logger } from "workbox-core/_private";
import "../App.css";

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  waitTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  stopTimer = () => {
    clearInterval(this.timer)
    this.setState({
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    })
  }

  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
    setTimeout(this.startTimer, 10)
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds}
        </div>
        {(!this.state.timerOn) ?
          <button onClick={this.startTimer}>Start</button>
          :
          <button onClick={this.waitTimer}>Wait</button>
        }
        {(this.state.timerStart) ?
          <>
            <button onClick={this.stopTimer}>Stop</button>
            <button onClick={this.resetTimer}>Reset</button>
          </>
          : ''
        }
      </div>
    )
  }
}

export default Stopwatch;
