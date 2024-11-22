import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-23T10:00:00-05:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
      
      if (timeLeft.days === 0 && timeLeft.hours === 0 && 
          timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center p-6 bg-pink mx-4">
      <div className="text-8xl font-bold neuebit w-40 h-40 flex items-center justify-center bg-white text-pink">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-4 text-white uppercase text-2xl retro tracking-wider">{label}</div>
    </div>
  );

  return (
    <div className="relative px-6 py-24 bg-darker">
      <div className="flex flex-col justify-center text-center">
        <p className="py-12 mx-6 text-5xl uppercase retro text-white">
          Time Until <span className="text-pink">Game Jam</span>
        </p>
        <div className="flex justify-center mx-12 my-8">
          <div className="flex flex-wrap items-center justify-center gap-8 p-12 border-8 border-dashed border-pink inter">
            <div className="flex flex-wrap justify-center gap-8">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
        <p className="text-3xl uppercase retro py-8 text-white">
          Starting <span className="text-pink">November 23, 10:00 AM EST</span>
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;