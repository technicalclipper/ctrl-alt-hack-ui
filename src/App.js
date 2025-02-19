import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-02-20T10:10:00").getTime();
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

      <section className="about">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Innovate & Build — Hack the Retro Way!
        </motion.h2>
        <motion.p className="section-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          A 36 Hour InterDepartmental Hackathon <br />
          <br></br>
          Date: <strong>20-02-2025 to 22-02-2025</strong>
        </motion.p>
        
        <div className="prize-container">
          <div className="prizeinner">
            <motion.img
              className="prize-pool-image"
              src="/images/podium.png"
              alt="Prize Pool"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.h3 className="prize-pool-text" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              ₹25,000 Prize Pool
            </motion.h3>
          </div>
          <motion.div className="curve-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <h4>What You Can Build:</h4>
            <ul>
              <li>AI/ML🤖</li>
              <li>Web3 & Blockchain🪙</li>
              <li>Cybersecurity🧑‍💻</li>
              <li>IoT & Robotics📲</li>
              <li>Game Development🎮</li>
              <li>Fintech🏦</li>
              <li>HealthTech🏥</li>
            </ul>
          </motion.div>
        </div>
      </section>

       <section className="sponsors">
      {/* Organized By Section with Parallax Effect */}
      <div className="organized-by parallax">
        <h3 className="oragniser">
          <div className="organisertext">Organized by Department of CSE in collaboration with IIC</div>
          <div className="logodiv">
            <img src="/images/licet.jpg" alt="IIC Logo" className="licet-logo" />
            <img src="/images/iic.png" alt="IIC Logo" className="iic-logo" />
          </div>
        </h3>
      </div>

      {/* Sponsors Section */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Sponsors
      </motion.h2>

      <div className="sponsor-boxes">
        {["poorvika.png", "blackthunder.png", "xyz.png"].map((image, index) => (
          <motion.div
            key={index}
            className="sponsor-box parallax"
            style={{ backgroundImage: `url("/images/${image}")` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          />
        ))}
      </div>

      {/* Contact Information */}
      <div className="footercenter">
        <div className="contact-info parallax">
          <h3>Contact Us</h3>
          <p><strong>Name:</strong> Sairam M R</p>
          <p><strong>Phone:</strong> +91 93421 99098</p>
          <p><strong>Email:</strong> sairam.26csb@licet.ac.in</p>
        </div>
      </div>
    </section>
    </div>
  );
}

