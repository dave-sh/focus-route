import React from 'react';
import CountDownTimer from './CountDownTimer';
import { Navbar} from "../../containers"

import './timer.css';

export default function Timer() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTime = NOW_IN_MS;

  return (
      <div className='page'>
        <div className='taskbar'>
          <Navbar />
        </div>
        <div className='timer'>
        <h1>Timer</h1>
          <CountDownTimer targetDate={dateTime} />
        </div>
      </div>
  );
}