import React from "react";
import { motion } from "framer-motion";

const LetterFromSecretariat = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl w-full bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-8 border-[#9a7e2f] rounded-lg p-10 md:p-14 relative overflow-hidden"
      >
        {/* Heading */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-[#062045] drop-shadow-md text-center mb-8"
        >
          Letter from the Secretariat
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-700 leading-relaxed text-left mb-6"
        >
          Dear Delegates, Faculty Advisors, and Members of the Secretariat,
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          It is our immense pleasure to welcome you to{" "}
          <span className="font-semibold text-[#9a7e2f]">
            KIET Model United Nations 2025
          </span>
          . As members of the Secretariat, we strive to create a platform where
          diplomacy, dialogue, and debate flourish. This conference is not just
          an event; it is an experience—a chance to challenge ideas, refine
          perspectives, and create solutions that can shape the future.
        </motion.p>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          We are honored to guide you through this journey of{" "}
          <span className="font-semibold text-[#9a7e2f]">
            intellectual discourse and global leadership
          </span>
          . Prepare to engage in stimulating debates, forge meaningful
          connections, and leave with newfound wisdom. We look forward to
          witnessing the impact each of you will create!
        </motion.p>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-8 border-t-2 border-[#9a7e2f] pt-6 text-left"
        >
          <p className="text-lg text-gray-700">Yours sincerely,</p>
          <h3 className="text-2xl font-semibold text-[#062045] drop-shadow-md mt-2">
            The Secretariat
          </h3>
          <p className="text-lg text-gray-700">KIET Model United Nations 2025</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LetterFromSecretariat;
