import React, { useEffect, useState } from 'react';
import { format, differenceInMilliseconds } from 'date-fns';
import styled from 'styled-components';
import './countdownTimer.css'

const CountdownContainer = styled.div`
  text-align: center;
  padding: 17px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  margin: 20px auto;
  max-width: 300px;
  color: white;
`;

const CountdownTimer = () => {
  const eventDate = new Date('2023-11-25T12:00:00');
  const [timeRemaining, setTimeRemaining] = useState(differenceInMilliseconds(eventDate, new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = differenceInMilliseconds(eventDate, new Date());
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className='countdown__main'>

    <CountdownContainer>
      <h1>Cool Hangout Countdown Timer</h1>
      <div>Event Date :- 25th November 2023</div>
      <div className="countdown">
        <div>
          <span>{days}</span> Days
        </div>
        <div>
          <span>{hours}</span> Hours
        </div>
        <div>
          <span>{minutes}</span> Minutes
        </div>
        <div>
          <span>{seconds}</span> Seconds
        </div>
      </div>
    </CountdownContainer>
    </div>
  );
};

export default CountdownTimer;
