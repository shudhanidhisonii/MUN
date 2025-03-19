import React from "react";

const Committee = () => {
  return (
    <div className="w-full bg-[#f8f8f8] flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-16">
      {/* Committees Section */}
      <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:h-[500px] flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12">
        <img
          src="/images/MUNlogo.jpg"
          alt=" MUN Logo"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full md:mr-8 lg:mr-16"
        />
        <div className="flex flex-col w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold text-[#062045] tracking-wide">
            COMMITTEES
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold mt-4 md:mt-6 text-[#9a7e2f]">
            September 13 - September 15, 2024
          </p>
        </div>
      </div>

      {/* UNGA Section */}
      <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20">
          <div className="w-full md:w-1/4 flex justify-center">
            <img src="/images/unga.png" alt="UNGA Logo" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" />
          </div>
          <div className="w-full md:w-4/5 bg-[#f0f0f0] p-6 md:p-8 lg:p-12 rounded-xl shadow-lg max-h-[300px] md:max-h-[250px] overflow-y-auto border-4 border-[#9a7e2f]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7e2f] mb-3 md:mb-4">UNGA</h2>
            <p className="text-base md:text-lg lg:text-xl text-[#062045] leading-relaxed">
              The United Nations General Assembly (UNGA) serves as the primary deliberative body of the United Nations, comprising all 193 member states. It provides a platform for global discourse on international peace, security, economic development, social progress, and environmental sustainability. Every nation, regardless of size or power, has an equal vote, making it one of the most democratic elements of global governance.
              <br /><br />
              The UNGA plays a crucial role in drafting international treaties, setting global priorities, and mobilizing support for humanitarian initiatives. It also oversees the United Nations' budget, elects non-permanent members to the Security Council, and reviews reports from other UN organs. In times of crisis, the UNGA can convene emergency special sessions to address urgent global matters.
              <br /><br />
              While its resolutions are non-binding, the influence of UNGA decisions shapes diplomatic policies, international cooperation, and global governance structures, making it a cornerstone of multilateral diplomacy.
            </p>
          </div>
        </div>
      </div>

      {/* UNHRC Section */}
      <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 lg:gap-20">
          <div className="w-full md:w-1/4 flex justify-center">
            <img src="/images/unhrc.png" alt="UNHRC Logo" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" />
          </div>
          <div className="w-full md:w-4/5 bg-[#f0f0f0] p-6 md:p-8 lg:p-12 rounded-xl shadow-lg max-h-[300px] md:max-h-[250px] overflow-y-auto border-4 border-[#9a7e2f]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7e2f] mb-3 md:mb-4">UNHRC</h2>
            <p className="text-base md:text-lg lg:text-xl text-[#062045] leading-relaxed">
              The United Nations Human Rights Council (UNHRC) is the principal UN body responsible for promoting and protecting human rights worldwide. Comprising 47 elected member states, the UNHRC examines violations, conducts fact-finding missions, and makes recommendations to strengthen human rights protections.
              <br /><br />
              The council addresses key human rights challenges such as racial discrimination, gender inequality, minority rights, and freedom of expression. It works in collaboration with the Office of the High Commissioner for Human Rights (OHCHR) to uphold international human rights treaties and frameworks.
              <br /><br />
              Through its Universal Periodic Review process, the UNHRC assesses human rights conditions in all member states and offers recommendations for improvement. Its role is vital in advancing social justice, holding violators accountable, and ensuring fundamental freedoms for all individuals.
            </p>
          </div>
        </div>
      </div>

      {/* UNEP Section */}
      <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20">
          <div className="w-full md:w-1/4 flex justify-center">
            <img src="/images/unep.png" alt="UNEP Logo" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" />
          </div>
          <div className="w-full md:w-4/5 bg-[#f0f0f0] p-6 md:p-8 lg:p-12 rounded-xl shadow-lg max-h-[300px] md:max-h-[250px] overflow-y-auto border-4 border-[#9a7e2f]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7e2f] mb-3 md:mb-4">UNEP</h2>
            <p className="text-base md:text-lg lg:text-xl text-[#062045] leading-relaxed">
              The United Nations Environment Programme (UNEP) leads global efforts to tackle environmental issues. It formulates policies, provides scientific assessments, and implements sustainable development projects. UNEP focuses on climate action, biodiversity preservation, pollution control, and green energy transitions.
              <br /><br />
              Through international partnerships, UNEP spearheads initiatives such as the Paris Agreement and the Sustainable Development Goals (SDGs). It mobilizes resources to help developing nations combat deforestation, water scarcity, and environmental degradation.
              <br /><br />
              UNEP also plays a pivotal role in shaping global environmental laws and regulations, advocating for a greener future by promoting corporate sustainability and responsible governance.
            </p>
          </div>
        </div>
      </div>

      {/* AIPPM Section */}
      <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="w-full flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 lg:gap-20">
          <div className="w-full md:w-1/4 flex justify-center">
            <img src="/images/aippm.png" alt="AIPPM Logo" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64" />
          </div>
          <div className="w-full md:w-4/5 bg-[#f0f0f0] p-6 md:p-8 lg:p-12 rounded-xl shadow-lg max-h-[300px] md:max-h-[250px] overflow-y-auto border-4 border-[#9a7e2f]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a7e2f] mb-3 md:mb-4">AIPPM</h2>
            <p className="text-base md:text-lg lg:text-xl text-[#062045] leading-relaxed">
              The All India Political Parties Meet (AIPPM) serves as a forum for political discourse among India's leading parties. It enables policymakers, legislators, and party representatives to debate pressing national issues, legislative amendments, and governance strategies.
              <br /><br />
              Discussions in AIPPM often revolve around constitutional reforms, economic policies, social justice, and foreign relations. It provides an avenue for collaboration and negotiation among diverse political ideologies to drive policy decisions.
              <br /><br />
              AIPPM simulations at MUN events encourage participants to develop analytical skills, diplomatic tact, and strategic thinking, preparing them for real-world political engagements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;