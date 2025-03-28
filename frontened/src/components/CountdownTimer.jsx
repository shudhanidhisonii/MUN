import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const eventDate = new Date("2025-05-10T10:00:00").getTime(); // Choose the correct time

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="flex flex-col items-center justify-center bg-white text-[#062045] py-16 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-10 text-[#062045] tracking-wide drop-shadow-md"
      >
        Conference Begins In
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-[800px] mx-auto"
      >
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white px-6 py-8 rounded-3xl text-center w-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#9a7e2f]"
          >
            <p className="text-5xl md:text-6xl font-extrabold text-[#062045] tracking-wider">
              {value}
            </p>
            <span className="text-base sm:text-lg uppercase text-[#9a7e2f] font-semibold mt-2 block">
              {unit}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CountdownTimer;
