import React from "react";
import { motion } from "framer-motion";

const secretariatMembers = [
  { name: "Ryan", position: "Secretary-General", image: "sec.png" },
  { name: "Abhishek", position: "Director-General", image: "dg.jpeg" },
  { name: "Shruti", position: "Deputy Secretary-General", image: "ds.jpeg" },
  { name: "Sumit", position: "Head of Secretariat", image: "Sumit.jpg" },
];

// Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + index * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Secretariat = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* 🟢 Heading Animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // REPEATS every scroll
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-[#062045] mb-2">
            The Secretariat
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }} // REPEATS every scroll
            className="text-lg text-gray-600"
          >
            Meet the core team leading the event.
          </motion.p>
        </motion.div>

        {/* 🟢 Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {secretariatMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-[280px] rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              {/* 🟢 Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[350px] object-cover transition-opacity duration-300 hover:opacity-90"
              />

              {/* 🟢 Overlay Info */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm font-semibold text-[#FFD700]">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Secretariat;
