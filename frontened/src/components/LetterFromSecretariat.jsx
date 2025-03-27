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
          Dear Delegates and Faculty Advisors,
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          Bringing the world's citizens together on a platform where disputes may be settled through involvement, communication, and understanding is urgently needed. Through MUNs, students learn about diplomacy, international relations, and the United Nations. It enhances research, public speaking, and debating skills, along with critical thinking, leadership abilities, and effective conflict resolution.
        </motion.p>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          We've always welcomed opportunities that broaden the perspectives of our young, dynamic leaders beyond rote memorization and encourage them to explore the uncharted waters of international politics and policymaking. With this thought in mind, we welcome you to <span className="font-semibold text-[#9a7e2f]">KIET MUN 2025</span> and its engaging and stimulating sessions ahead.
        </motion.p>

        {/* Fourth Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left mb-6"
        >
          Let the debates inspire new perspectives, foster diplomatic dialogue, and build bridges of collaboration. We are certain that each one of you will leave with enriched experiences and a deeper understanding of the complexities of our global society. Together, let us strive to become the change-makers of tomorrow.
        </motion.p>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-8 border-t-2 border-[#9a7e2f] pt-6 text-left"
        >
          <p className="text-lg text-gray-700">Warm regards,</p>
          <h3 className="text-2xl font-semibold text-[#062045] drop-shadow-md mt-2">
          <span className="font-semibold text-[#9a7e2f]"> The Secretariat</span>
          </h3>
          <p className="text-lg text-gray-700">KIET Model United Nations 2025 </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LetterFromSecretariat;
