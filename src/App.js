import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-01T00:00:00").getTime();
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
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <motion.h3
        className="countdown-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        System Booting... Hackathon Begins In:
      </motion.h3>
      <motion.div
        className="countdown"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </motion.div>
    </div>
  );
};

export default function HackathonUI() {
  return (
    <div className="main-container">
      {/* Landing Section */}
      <div className="container">
        <div className="header">
          <motion.h2 className="subtitle" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            Department of CSE Presents
          </motion.h2>
          <motion.h1 className="title" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
            Ctrl+Alt+Hack
          </motion.h1>
        </div>

        <motion.button className="login-btn" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.5 }}>
          Login
        </motion.button>

        <CountdownTimer />
      </div>

      {/* About Hackathon Section */}
      <section className="about">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          About the Hackathon
        </motion.h2>
        <motion.p className="section-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </motion.p>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Our Sponsors
        </motion.h2>
        <div className="sponsor-boxes">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="sponsor-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              Sponsor {index}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
