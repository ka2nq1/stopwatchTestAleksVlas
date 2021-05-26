import React, {useState} from 'react'
import DisplayComponent from './Components/DisplayComponent'
import BtnComponent from './Components/BtnComponent'
import './App.css';

function App() {
  const [time, setTime] = useState({h:0, m:0, s:0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  var updatedSec = time.s, updatedMin = time.m, updatedHour = time.h

  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 1000))
  };

  
  const run = () => {
    if (updatedMin === 60) {
      updatedHour++;
      updatedMin = 0
    }
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0
    }
    updatedSec++;
    return setTime({ h: updatedHour, m: updatedMin, s: updatedSec })
  }

  const wait = () => {
      clearInterval(interv)
      setStatus(2)
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({h:0, m:0, s:0})
  }
  
  const reset = () => {
    clearInterval(interv)
    setTime({ h: 0, m: 0, s: 0 })
    setInterval(start, 1000)
  }

  
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent start={start} wait={wait} stop={stop} reset={reset} status={status}/>
        </div>
      </div>
    </div>
  );
}

export default App;
