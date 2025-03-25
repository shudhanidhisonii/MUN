import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="flex flex-col items-center min-h-[80vh] relative z-10 pt-30">
      {/* Text Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <p className="text-[#9a7e2f] text-lg">KIET</p>
        <h1 className="text-white text-5xl font-bold">
          MODEL UNITED NATION 7.0
        </h1>
      </motion.div>

      {/* Marquee Section */}
      <div className="relative w-[300px] h-8 overflow-hidden mt-1 mb-2">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }} // Move halfway then loop
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 5, // Faster speed
          }}
        >
          <span className="flex text-[#9a7e2f] text-lg md:text-xl font-semibold tracking-widest">
            {/* Repeat it multiple times for smooth looping */}
            <span className="px-6">DEBATE.DIPLOMACY.DEVELOPMENT.</span>
            <span className="px-6">DEBATE.DIPLOMACY.DEVELOPMENT.</span>
            <span className="px-6">DEBATE.DIPLOMACY.DEVELOPMENT.</span>
            <span className="px-6">DEBATE.DIPLOMACY.DEVELOPMENT.</span>
          </span>
        </motion.div>
      </div>

      {/* Images Section */}
      <motion.div
        className="flex justify-center items-start gap-0 mt-[-10px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Logo Image */}
        <motion.img
          src="/Lo.png"
          className="w-[220px] h-[220px] mt-[-10px]"
          alt="Logo"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        {/* Text Image */}
        <motion.img
          src="/text.png"
          className="w-[330px] h-[330px] mt-[-15px]"
          alt="Text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
