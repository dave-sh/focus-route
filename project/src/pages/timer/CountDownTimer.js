import React from 'react';
import { useCountdown } from './hooks/useCountdowns';
import TimeDisplay from './TimeDisplay'

const TimerFinishedNotice = () => {
  return (
    <div className="expired-notice">
      <span>Done!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <p>:</p>
        <TimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <TimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <TimerFinishedNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountDownTimer