"use client";
import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [data, setData] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setData((prevData) => {
        const { days, hours, minutes, seconds } = prevData;
        let updatedDays = days;
        let updatedHours = hours;
        let updatedMinutes = minutes;
        let updatedSeconds = seconds;

        if (seconds > 0) {
          updatedSeconds--;
        } else {
          if (minutes > 0) {
            updatedMinutes--;
            updatedSeconds = 59;
          } else {
            if (hours > 0) {
              updatedHours--;
              updatedMinutes = 59;
              updatedSeconds = 59;
            } else {
              if (days > 0) {
                updatedDays--;
                updatedHours = 23;
                updatedMinutes = 59;
                updatedSeconds = 59;
              } else {
                clearInterval(timer);
              }
            }
          }
        }

        return {
          days: updatedDays,
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (
      data.days === 0 &&
      data.hours === 0 &&
      data.minutes === 0 &&
      data.seconds === 0
    ) {
      console.log("Happy!");
    }
  }, [data]);

  return (
    <div className="bg-white flex justify-center min-h-[10vh]">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col text-center text-xl mt-5">
          <span className="top">2</span>
          <span className="top-back">
            <span>2</span>
          </span>
          <span className="text-gray-600">Días</span>
        </div>
        <div className="flex flex-col  text-center text-xl mt-5">
          <span className="text-gray-900 mask-image: url('https://example.com/calendar-mask.png');">
            {data.hours}
          </span>
          <span className="text-gray-900 mask-image: url('https://example.com/calendar-mask.png');">
            {data.hours}
          </span>
          <span className="text-gray-600">Horas</span>
        </div>
        <div className="flex flex-col  text-center text-xl mt-5">
          <span className="text-gray-900 mask-image: url('https://example.com/calendar-mask.png');">
            {data.minutes}
          </span>
          <span className="text-gray-600">Minutos</span>
        </div>
        <div className="flex flex-col  text-center text-xl mt-5">
          <span className="text-gray-900 mask-image: url('https://example.com/calendar-mask.png');">
            {data.seconds}
          </span>
          <span className="text-gray-600">Segundos</span>
        </div>
        <div className="flex flex-col text-center text-xl mt-5">
          {/* <div className="figure sec sec-1">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div> */}
          <div className="flip-card">
            <div className="top">5</div>
            <div className="bottom">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
