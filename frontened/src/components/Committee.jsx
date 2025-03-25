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
        viewport={{ once: false, amount: 0.2 }} // triggers each time on scroll up/down
        variants={containerVariants}
        className="w-full bg-[#f8f8f8] flex justify-center py-16 px-4 sm:px-8 lg:px-16 xl:px-24 mt-10"
      >
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          {/* Committees Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16"
          >
            <motion.img
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              src="Clo.png"
              alt="MUN Logo"
              className="w-52 h-52 md:w-58 md:h-58 rounded-full object-cover"
            />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#062045]"
              >
                COMMITTEES
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-xl md:text-2xl font-semibold mt-4 text-[#9a7e2f]"
              >
                September 13 - September 15, 2024
              </motion.p>
            </div>
          </motion.div>

          {/* UNGA */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-white py-12 px-6 md:px-12 mb-10 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16"
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex justify-center w-full md:w-1/4"
            >
              <img
                src="UNGAC.jpg"
                alt="UNGA Logo"
                className="w-48 md:w-56 h-56 lg:w-64 h-64 rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-3/4 bg-[#f0f0f0] p-6 rounded-xl shadow-lg border-4 border-[#9a7e2f]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9a7e2f] mb-4">
                UNGA
              </h2>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-base md:text-lg text-[#062045] leading-relaxed"
              >
                The United Nations General Assembly (UNGA) serves as the primary
                deliberative body of the United Nations. It addresses critical
                global issues, promotes international cooperation, and sets
                policies that shape global governance. In this committee,
                delegates will tackle pressing topics and work collaboratively
                to draft resolutions.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* UNHRC */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-white py-12 px-6 md:px-12 mb-10 rounded-xl shadow-md flex flex-col md:flex-row-reverse items-center md:items-start gap-8 lg:gap-16"
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex justify-center w-full md:w-1/4"
            >
              <img
                src="UNHRC.jpg"
                alt="UNHRC Logo"
                className="w-48 md:w-56 lg:w-64 h-64 rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-3/4 bg-[#f0f0f0] p-6 rounded-xl shadow-lg border-4 border-[#9a7e2f]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9a7e2f] mb-4">
                UNHRC
              </h2>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-base md:text-lg text-[#062045] leading-relaxed"
              >
                The United Nations Human Rights Council (UNHRC) is responsible
                for strengthening the promotion and protection of human rights
                around the globe. Delegates will deliberate on sensitive human
                rights issues, investigate allegations of violations, and
                recommend solutions that uphold dignity and justice for all.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* UNEP */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-white py-12 px-6 md:px-12 mb-10 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16"
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex justify-center w-full md:w-1/4"
            >
              <img
                src="UNEP.jpeg"
                alt="UNEP Logo"
                className="w-48 md:w-56 lg:w-64 h-64 rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-3/4 bg-[#f0f0f0] p-6 rounded-xl shadow-lg border-4 border-[#9a7e2f]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9a7e2f] mb-4">
                UNEP
              </h2>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-base md:text-lg text-[#062045] leading-relaxed"
              >
                The United Nations Environment Programme (UNEP) focuses on
                coordinating the global response to environmental challenges.
                Delegates will debate crucial issues such as climate change,
                biodiversity loss, and sustainable development, seeking
                innovative strategies to protect our planet for future
                generations.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* AIPPM */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-white py-12 px-6 md:px-12 mb-10 rounded-xl shadow-md flex flex-col md:flex-row-reverse items-center md:items-start gap-8 lg:gap-16"
          >
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex justify-center w-full md:w-1/4"
            >
              <img
                src="AIPPM.avif"
                alt="AIPPM Logo"
                className="w-48 md:w-56 lg:w-64 h-64 rounded-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-3/4 bg-[#f0f0f0] p-6 rounded-xl shadow-lg border-4 border-[#9a7e2f]"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#9a7e2f] mb-4">
                AIPPM
              </h2>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-base md:text-lg text-[#062045] leading-relaxed"
              >
                The All India Political Parties Meet (AIPPM) simulates
                high-level discussions among Indian political parties. Delegates
                will represent key political leaders and engage in debates on
                pressing national issues, striving to build consensus and
                formulate effective policy decisions. This committee encourages
                dynamic participation and negotiation skills.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Committee;
