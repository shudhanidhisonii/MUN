import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Repeats when in view (every time)
        className="max-w-4xl w-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-t-8 border-[#9a7e2f] rounded-lg p-10 md:p-14 relative overflow-hidden"
      >
        {/* Heading with Typewriter */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-[#062045] drop-shadow-md text-center mb-8"
        >
          <Typewriter
            words={["About Us"]}
            loop={false}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={0}
            delaySpeed={2000}
          />
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-left mb-6"
        >
          Welcome to{" "}
          <span className="font-semibold text-[#9a7e2f]">
            KIET Model United Nations
          </span>
          , where we are dedicated to fostering diplomacy, leadership, and
          global understanding among students. Our mission is to provide a
          platform for young minds to engage in meaningful dialogue on
          international issues, enhancing their skills in negotiation, public
          speaking, and critical thinking.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          Established in 2025, KIET MUN has grown into a vibrant community that
          simulates the workings of the United Nations. We bring together
          delegates from diverse backgrounds to discuss pressing global
          challenges, encouraging collaboration and the exchange of ideas.
        </motion.p>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left"
        >
          At the core of our organization are the values of integrity, respect,
          and excellence. Join us at KIET Model United Nations, and be part of a
          community committed to making a difference through dialogue and
          action.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
