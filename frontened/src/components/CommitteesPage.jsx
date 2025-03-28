import React from "react";
import { motion } from "framer-motion";

const committees = [
  { name: "AIPPM", image: "aippm.png", position: "top-0 left-10", direction: "left" },
  { name: "UNEP", image: "unep.png", position: "top-0 right-10", direction: "right" },
  { name: "UNHRC", image: "unhrc.png", position: "bottom-5 left-10", direction: "left" },
  { name: "UNGA-DISEC", image: "unga.png", position: "bottom-5 right-10", direction: "right" },
];

const CommitteesPage = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden bg-white">

      {/* Background logo animation */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute w-80 h-80 bg-no-repeat bg-center bg-contain z-0"
        style={{ backgroundImage: "url('/Blo.png')" }}
      ></motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-5xl font-extrabold text-[#062045] mb-2 text-center z-10"
      >
        Committees
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-sm sm:text-base text-gray-600 mb-12 text-center tracking-wide z-10"
      >
        DEBATE. DIPLOMACY. DEVELOPMENT.
      </motion.p>

      {/* Committees Layout */}
      <div className="relative w-full max-w-4xl lg:h-[500px] flex flex-col lg:block items-center z-10 gap-8">

        {committees.map((committee, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: committee.direction === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={`flex flex-col items-center transition-transform hover:scale-110 
              ${index === 0 ? "mt-0" : "mt-6"} 
              lg:absolute ${committee.position}`}
          >
            <img
              src={committee.image}
              alt={committee.name}
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-[0px_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0px_12px_50px_rgba(0,0,0,0.6)] transition-all duration-500 ease-in-out"
            />
            <span className="mt-3 text-sm sm:text-lg font-semibold text-[#062045] text-center">
              {committee.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommitteesPage;
