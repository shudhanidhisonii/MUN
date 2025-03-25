import React from 'react';
import { motion } from 'framer-motion';

const committees = [
  { name: "AIPPM", image: "aippm.png", position: "top-0 left-10", direction: "left" },
  { name: "UNEP", image: "unep.png", position: "top-0 right-10", direction: "right" },
  { name: "UNHRC", image: "unhrc.png", position: "bottom-5 left-10", direction: "left" },
  { name: "UNGA", image: "unga.png", position: "bottom-5 right-10", direction: "right" },
];

const CommitteesPage = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* Background logo slides from top while scrolling */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}        // starts above, invisible
        whileInView={{ opacity: 100, y: 0 }}     // fades in, slides down into position
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}  // triggers every time it's in view
        className="absolute w-100 h-80 rounded-full bg-no-repeat bg-center bg-contain z-0"
        style={{
          backgroundImage: "url('/Blo.png')",   // ✅ background image stays centered
        }}
      ></motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-extrabold text-[#062045] mb-2 text-center z-10"
      >
        Committees
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-base text-gray-600 mb-12 text-center tracking-wide z-10"
      >
        DEBATE. DIPLOMACY. DEVELOPMENT.
      </motion.p>

      {/* Committees Grid */}
      <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center z-10">

        {committees.map((committee, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: committee.direction === 'left' ? -100 : 100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.3 }}
            className={`absolute ${committee.position} flex flex-col items-center transition-transform hover:scale-110`}
          >
            <img
              src={committee.image}
              alt={committee.name}
              className="w-48 h-48 rounded-full object-cover 
                shadow-[0px_8px_40px_rgba(0,0,0,0.4)] 
                hover:shadow-[0px_12px_50px_rgba(0,0,0,0.6)] 
                transition-all duration-500 ease-in-out"
            />
            <span className="mt-3 text-lg font-semibold text-[#062045] text-center">
              {committee.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitteesPage;
