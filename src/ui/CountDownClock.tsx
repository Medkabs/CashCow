import React from 'react';
import { useTimer } from 'react-timer-hook';

const CountdownClock = () => {
  // Set the expiration timestamp to August 16, 2025, at 12:00 PM
  const expiryTimestamp = new Date('2025-08-16T12:00:00');

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('Timer expired!'),
  });

  return (
    <>
      <div className="time-count day">
        <span>{days}</span> days
      </div>
      <div className="time-count hour">
        <span>{hours}</span> hours
      </div>
      <div className="time-count min">
        <span>{minutes}</span> mins
      </div>
      <div className="time-count sec">
        <span>{seconds}</span> secs
      </div>
    </>
  );
};

export default CountdownClock;
