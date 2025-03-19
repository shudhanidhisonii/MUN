import React from 'react'
const committees = [
    { name: "AIPPM", image: "aippm.png", position: "top-0 right-10" },
    { name: "UNEP", image: "unep.png", position: "top-0 left-10" },
    { name: "UNHRC", image: "unhrc.png", position: "bottom-5 left-10" },
    { name: "UNGA", image: "unga.png", position: "bottom-5 right-10" },
  ];
  


const committeespage = () => {
  return (
    <>
<div className="h-screen w-screen bg-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold text-[#062045] mb-20">
        Debate. Diplomacy. Dominance.
      </h2>

      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        <div className="absolute w-56 h-56 bg-[#9a7e2f] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#9a7e2f] transition-transform hover:scale-105">
          <img
            src="MUNlogo.jpg"
            alt="KIET Logo"
            className="w-44 h-44 object-cover rounded-full"
          />
        </div>

        {committees.map((committee, index) => (
          <div
            key={index}
            className={`absolute ${committee.position} flex flex-col items-center transition-transform hover:scale-110`}
          >
            <img
              src={committee.image}
              alt={committee.name}
              className="w-52 h-52 rounded-full shadow-2xl object-cover border-2 border-[#9a7e2f] transition-transform hover:scale-110 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)]"
            />
            <span className="mt-2 text-lg font-semibold text-[#062045]">
              {committee.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default committeespage
