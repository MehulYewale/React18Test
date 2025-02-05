import React, { useState, useEffect } from 'react';

const Timer  = (props)  => {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

    useEffect(()  =>  {
            console.log("on UseEffect ");
           let _timer = null;
          if (timerOn) {
            _timer = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
          }
        return () => {
            console.log('on Return  ');
            _timer && clearInterval(_timer);
        };
    }, [ timerOn]);

  const startTimer = () => {
      setTimerOn(true);
  };

  const stopTimer = () => {
       setTimerOn(false);
  };

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div> {timer} </div>
      <button onClick={startTimer}> Start </button>
      <button onClick={stopTimer}> Stop </button>
    </div>
  );
}

export default Timer;