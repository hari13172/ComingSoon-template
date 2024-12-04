// ComingSoon.tsx
import React, { useState, useEffect } from "react";
import "./ComingSoon.css";

const ComingSoon: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="coming-soon-container">
      <h1 className="heading">Coming Soon</h1>
      <p className="subtext">
        SucceedEx Our training platform is under construction. Stay tuned for updates!
      </p>
      <div className="timer">
        <span>{timeLeft.days.toString().padStart(2, "0")}d</span> :
        <span>{timeLeft.hours.toString().padStart(2, "0")}h</span> :
        <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span> :
        <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
      </div>
    </div>
  );
};

export default ComingSoon;
