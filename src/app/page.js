'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './timer.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    function getTimeRemaining() {
      const targetDate = new Date('2025-09-22T00:00:00');
      const total = targetDate - new Date();
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      return { days, hours, minutes, seconds };
    }

    setTimeLeft(getTimeRemaining());

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null; // Prevent render until timeLeft is ready

  return (
    <>
      <div className="right-section">
        <Image src="/home-right.jpg" alt="side graphic" width={400} height={300} />
      </div>

      <div className="left-section">
        <h1>Event Conference</h1>
        <p className="big">
          YOUR ULTIMATE <br />
          GUIDE TO CONFERENCES
        </p>
        <Image src="/homestick.png" alt="Top Logo" width={150} height={150} className="top-image" />
      </div>

      <div className="event-card-wrapper">
        <div className="event-card">
          <p className="event-subtitle">UPCOMING EVENT 2025</p>
          <h2 className="event-title">
            DIGITAL <br /> TECHNOLOGY
          </h2>
          <hr className="divider" />
          <div className="event-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>BTDC Nuda Dua, Bali - Indonesia</span>
            </div>
            <div className="info-item">
              <FaCalendarAlt className="icon" />
              <span>22 - 26 September 2025</span>
            </div>
          </div>
        </div>
      </div>

      <section className="countdown-section">
        <div className="countdown-inner">
          <div className="countdown-left">
            <h1>Registration starts in...</h1>
          </div>
          <div className="countdown-right">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => {
              const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
              return (
                <div className="timer-box" key={label}>
                  <div className="timer-value">{value}</div>
                  <div className="timer-label">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
