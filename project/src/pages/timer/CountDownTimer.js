import React, { useState, useEffect } from "react";

export default function CountDownTimer() {
  //This sets the time in minutes and seconds
  //use a flag to set initial time to input fields, then start the timer
  const [minutes, setMinutes] = useState("1");
  const [seconds, setSeconds] = useState("1");
  const [displayMessage, setDisplayMessage] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //setInputs(values => ({...values, [name]: value}))
  }

  useEffect(() => {
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
  }, [seconds]);

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
        onChange={(e) => setMinutes(e.targetValue())}
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
        onChange={(e) => setSeconds(e.targetValue())}
        />
        </label>
      </form>
    </div>
  </div>
  );
}