import React from "react";

const About = () => {
  return (
    <div className="bg-[#FAF8F5] py-16 px-6 md:px-20 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl border-t-8 border-[#9a7e2f] rounded-lg p-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#062045] drop-shadow-md text-center mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
          Welcome to <span className="font-semibold text-[#9a7e2f]">KIET Model United Nations</span>, where we are dedicated to fostering diplomacy, leadership, and global understanding among students. Our mission is to provide a platform for young minds to engage in meaningful dialogue on international issues, enhancing their skills in negotiation, public speaking, and critical thinking.
        </p>
        <p className="mt-4 text-gray-800 text-lg md:text-xl leading-relaxed text-left">
          Established in 2025, KIET MUN has grown into a vibrant community that simulates the workings of the United Nations. We bring together delegates from diverse backgrounds to discuss pressing global challenges, encouraging collaboration and the exchange of ideas. Our conferences are designed to emulate real UN sessions, offering participants an immersive experience that prepares them for future roles in international affairs.
          At the core of our organization are the values of integrity, respect, and excellence. 
          Join us at KIET Model United Nations, and be part of a community committed to making a difference through dialogue and action.
        </p>
       
        
      </div>
    </div>
  );
};

export default About;
