import React from "react";

const LetterFromSecretariat = () => {
  return (
    <div className="bg-[#FAF8F5] py-16 px-6 md:px-20 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-xl border-t-8 border-[#9a7e2f] rounded-lg p-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#062045] drop-shadow-md text-center mb-6">
          Letter from the Secretariat
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
          Dear Delegates, Faculty Advisors, and Members of the Secretariat,
        </p>
        <p className="mt-6 text-gray-800 text-lg md:text-xl leading-relaxed text-left">
          It is our immense pleasure to welcome you to <span className="font-semibold text-[#9a7e2f]">KIET Model United Nations 2025</span>. 
          As members of the Secretariat, we strive to create a platform where diplomacy, dialogue, and debate flourish.  
          This conference is not just an event; it is an experience—a chance to challenge ideas, refine perspectives, 
          and create solutions that can shape the future.
        </p>
        <p className="mt-4 text-gray-800 text-lg md:text-xl leading-relaxed text-left">
          We are honored to guide you through this journey of 
          <span className="font-semibold text-[#9a7e2f]"> intellectual discourse and global leadership</span>. 
          Prepare to engage in stimulating debates, forge meaningful connections, and leave with newfound wisdom.  
          We look forward to witnessing the impact each of you will create!
        </p>
        <div className="mt-8 border-t-2 border-[#9a7e2f] pt-6 text-left">
          <p className="text-lg text-gray-700">Yours sincerely,</p>
          <h3 className="text-2xl font-semibold text-[#062045] drop-shadow-md mt-2">The Secretariat</h3>
          <p className="text-lg text-gray-700">KIET Model United Nations 2025</p>
        </div>
      </div>
    </div>
  );
};

export default LetterFromSecretariat;