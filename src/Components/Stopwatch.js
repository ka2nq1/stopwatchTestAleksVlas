import React, { Component } from "react";
import {interval} from 'rxjs'
import StopwatchStyles from './StopwatchStyles'

class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  }
  
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    })
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      })
    }, 10);
  };
  
  waitTimer = () => {
    this.setState({
      timerOn: false
    })
    clearInterval(this.timer);
  };

  handleClick = (e) => {
    clearTimeout(this.clickTimer)
    if (e.detail === 2) {
      this.clickTimer = setTimeout(() => {
        this.waitTimer()
      }, 300)
    }
  }
  
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
    })
    setTimeout(this.startTimer, 10)
  };

  render() {
    let seconds = ("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2)
    let minutes = ("0" + (Math.floor(this.state.timerTime / 60000) % 60)).slice(-2)
    let hours = ("0" + (Math.floor(this.state.timerTime / 3600000) % 60)).slice(-2)

    return (
      <StopwatchStyles>
        <div className="header">Stopwatch</div>
        <div className="display">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="btn-container">
        {(!this.state.timerOn) ?
          <button className="btn green" onClick={this.startTimer}>Start</button>
          :
          <button className="btn yellow" onClick={this.handleClick}>Wait</button>
        }
        {(this.state.timerTime) ?
          <>
            <button className="btn red" onClick={this.stopTimer}>Stop</button>
            <button className="btn blue" onClick={this.resetTimer}>Reset</button>
          </>
          : ''
          }
        </div>
      </StopwatchStyles>
    )
  }
}

export default Stopwatch;
