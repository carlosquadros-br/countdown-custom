"use client";
import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [time, setTime] = useState({
    daysTens: 2,
    daysOnes: 2,
    hoursTens: 2,
    hoursOnes: 4,
    minutesTens: 0,
    minutesOnes: 0,
    secondsTens: 0,
    secondsOnes: 0,
  });

  useEffect(() => {
    const countToDate = new Date().setHours(new Date().getHours() + 24);
    let previousTimeBetweenDates;

    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.floor(
        (countToDate - currentDate.getTime()) / 1000
      );
      flipAllCards(timeBetweenDates);
      flipAllCards(timeBetweenDates);

      previousTimeBetweenDates = timeBetweenDates;
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const flipAllCards = (time: number) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    flip("hoursTens", Math.floor(hours / 10));
    flip("hoursOnes", hours % 10);
    flip("minutesTens", Math.floor(minutes / 10));
    flip("minutesOnes", minutes % 10);
    flip("secondsTens", Math.floor(seconds / 10));
    flip("secondsOnes", seconds % 10);
  };

  const flip = (card: string, newNumber: number) => {
    setTime((prevTime) => ({
      ...prevTime,
      [card]: newNumber,
    }));
  };

  return (
    <div className="container">
      <div className="container-segment">
        <div className="segment-title">Hours</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{time.hoursTens}</div>
            <div className="bottom">{time.hoursTens}</div>
          </div>
          <div className="flip-card">
            <div className="top">{time.hoursOnes}</div>
            <div className="bottom">{time.hoursOnes}</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Minutes</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{time.minutesTens}</div>
            <div className="bottom">{time.minutesTens}</div>
          </div>
          <div className="flip-card">
            <div className="top">{time.minutesOnes}</div>
            <div className="bottom">{time.minutesOnes}</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Seconds</div>
        <div className="segment">
          <div className="flip-card">
            <div className="top">{time.secondsTens}</div>
            <div className="bottom">{time.secondsTens}</div>
          </div>
          <div className="flip-card">
            <div className="top">{time.secondsOnes}</div>
            <div className="bottom">{time.secondsOnes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
