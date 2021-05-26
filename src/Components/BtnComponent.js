import React from 'react'

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) || (props.status === 2) ?
        <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>Start</button>
        : ""
      }
      {(props.status === 1) ?
          <button className='stopwatch-btn stopwatch-btn-red' onClick={props.wait}>Wait</button>
          : ""
      }
      {(props.status === 1) || (props.status === 2) ?
        <>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.stop}>Stop</button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset}>Reset</button>
        </>
        : ""
      }
    </div>
  );
}

export default BtnComponent;
