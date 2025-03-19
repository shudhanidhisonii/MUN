import React from "react";

const secretariatMembers = [
  { name: "Ryan", position: "Secretary-General", image: "/images/a.jpeg" },
  { name: "Abhishek", position: "Director-General", image: "/images/b.jpeg" },
  { name: "Shruti", position: "Deputy Secretary-General", image: "/images/c.jpeg" },
];

const Secretariat = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 px-6">
      
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#062045]">
          The Secretariat
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Meet the core team leading the event.
        </p>
      </div>

      
      <div className="flex justify-center gap-8 flex-wrap">
        {secretariatMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-[300px] rounded-xl overflow-hidden shadow-lg border-2 border-[#9A7E2F] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[350px] object-cover transition-opacity duration-300 hover:opacity-80"
            />

            
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm font-semibold text-[#FFD700]">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Secretariat;