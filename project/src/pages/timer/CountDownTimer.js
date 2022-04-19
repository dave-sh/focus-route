import React, { useState, useEffect } from "react";

export default function CountDownTimer() {

  //This sets the time in minutes and seconds
  //use a flag to set initial time to input fields, then start the timer
  const [minutes, setMinutes] = useState("1");
  const [seconds, setSeconds] = useState("30");
  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayMessage1, setDisplayMessage1] = useState(true);

  const [startFlag, setStartFlag] = useState(false);

  const startTimer = (event) => {
    setStartFlag(true);
  }

  const pauseTimer = (event) => {
    setStartFlag(false)
  }

  const resetTimer = (event) => {
    setMinutes(0);
    setSeconds(0);
    setStartFlag(false);
  }

  useEffect(() => {
    if (startFlag) {
      let interval = setInterval(() => {
        clearInterval(interval);


        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 9 : 4;
            let seconds = 59;

            //setSeconds(seconds);
            //setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);

        }
      }, 1000);
    }

  }, [startFlag, seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  //tick

  //ui components
  return (

    <div className="page">
      <div className="countdowntimer">
        <div className="restmessage">
          {displayMessage && <div>Time for a break! New session begins in:</div>}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div className="input">
        <div className="inputmin">
          <form>
            <label>Enter Minutes:
              <input
                type="text"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
            </label>
          </form>
        </div>
        <div className="inputsec"></div>
        <form>
          <label>Enter Seconds:
            <input
              type="text"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />
          </label>
        </form>

      </div>
      <div className="buttons">
        <div className="startButton">
          <button onClick={(e) =>startTimer(e)} className='startButton'>Start</button>
        </div>
        <div className="pauseButton">
          <button onClick={(e) =>pauseTimer(e)} className='startButton'>Stop</button>
        </div>
        <div className="resetButton">
          <button onClick={(e) =>resetTimer(e)} className='startButton'>Reset</button>
        </div>
      </div>
    </div>
  );
}