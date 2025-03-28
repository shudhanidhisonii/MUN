import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: "easeIn" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5, ease: "easeIn" } },
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const Committee = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="w-full bg-[#f8f8f8] flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16 xl:px-24 mt-10"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#062045] mb-12">Committees</h1>

        <div className="w-full max-w-[1200px] flex flex-col items-center">
          {[{
            name: "UNGA-DISEC",
            img: "UNGAC.jpg",
            agenda: "Deliberation on the illegal trade of conventional arms, with special emphasis on the effectiveness of international arms control agreements",
            animation: fadeInLeft
          }, {
            name: "UNHRC",
            img: "UNHRC.jpg",
            agenda: "Addressing human rights violations and their impact on civilians in the MENA region.",
            animation: fadeInRight
          }, {
            name: "UNEP",
            img: "UNEP.jpeg",
            agenda: "Deliberation on reducing greenhouse gas emissions and transitioning to low-carbon economies.",
            animation: fadeInLeft
          }, {
            name: "AIPPM",
            img: "AIPPM.avif",
            agenda: "Addressing challenges to secularism posed by political parties leveraging religion for electoral gains.",
            animation: fadeInRight
          }].map((committee, index) => (
            <motion.div
              key={index}
              variants={committee.animation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className={`w-full bg-white py-12 px-6 md:px-12 mb-10 rounded-xl shadow-md flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center md:items-center gap-8 lg:gap-16`}
            >
              <motion.div
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex justify-center w-full md:w-1/4"
              >
                <img
                  src={committee.img}
                  alt={`${committee.name} Logo`}
                  className="w-48 md:w-56 lg:w-64 h-64 rounded-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={committee.animation === fadeInLeft ? fadeInRight : fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="w-full md:w-3/4 bg-[#f0f0f0] p-6 rounded-xl shadow-lg border-4 border-[#9a7e2f] flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#9a7e2f] mb-4">{committee.name}</h2>
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-base md:text-lg text-[#062045] leading-relaxed text-center"
                >
                  <span className="font-bold text-[#9a7e2f] text-xl md:text-2xl">Agenda: </span>
                  <span className="text-[#062045] text-lg md:text-lg">
                    <b>{committee.agenda}</b>
                  </span>
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Committee;
