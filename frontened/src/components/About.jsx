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
        viewport={{ once: false, amount: 0.3 }}
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

        {/* Updated Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          The <span className="font-semibold text-[#9a7e2f]">KIETMUN</span>, in its short span of existence, has earned a name for itself in the Delhi-NCR MUN circuit. KIETMUN is a battle of words where participants engage in intellectual duels, using their wits and voices to express their opinions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          It is a platform for students to connect with real-world issues that impact society. Model United Nations simulates UN discussions, where delegates represent countries to resolve global challenges. Through MUNs, students develop crucial life skills such as public speaking, research, negotiation, and collaboration.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left"
        >
          KIETMUN helps participants discover their potential in the literary world, guiding them in articulating thoughts, analyzing pressing global concerns, and formulating viable solutions. It is not just about debate; it is about preparing young minds to become future leaders, shaping discussions that matter.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
