import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="p-8 text-center bg-[#062045] text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-[#9a7e2f]">KIET MUN Technical Team</h1>
      
      {/* Sophomore Section */}
      <h2 className="text-3xl font-semibold mb-6">Sophomore</h2>
      <div className="flex justify-center gap-12 mb-12 flex-wrap">
        {[
          { img: "/self1.jpeg", name: "Shudha Nidhi Soni", position: "Technical Team Head", linkedin: "https://www.linkedin.com/in/shudha-nidhi-soni-5833142a1/" },
          { img: "/v.jpeg", name: "Vartika Agrawal", position: "Technical Team Co-Head", linkedin: "https://www.linkedin.com/in/vartika-webdev" }
        ].map((member, index) => (
          <div key={index} className="relative group w-56 h-56 bg-gray-300 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:opacity-50 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 p-3">
              <p className="text-white text-xs font-medium">{member.name}</p>
              <p className="text-white text-lg font-bold">{member.position}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-[#9a7e2f] text-3xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Freshman Section */}
      <h2 className="text-3xl font-semibold mb-6">Freshman</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        {[
          { img: "/sk.jpeg", name: "Saksham Saxena", position: "Technical Team Member", linkedin: "https://www.linkedin.com/in/sakkshm/" },
          { img: "/St.jpeg", name: "Satyam Singh", position: "Technical Team Member", linkedin: "https://www.linkedin.com/in/satyam-singh-972496204" },
          { img: "/shivam.jpeg", name: "Shivam Pandey", position: "Technical Team Member", linkedin: "https://www.linkedin.com/in/shivam-pandey-8b1186311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          { img: "/Va.jpeg", name: "Vaibhav Pal", position: "Technical Team Member", linkedin: "https://www.linkedin.com/in/vaibhav-pal-2b7bb0289/" },
          
        ].map((member, index) => (
          <div key={index} className="relative group w-56 h-56 bg-gray-300 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:opacity-50 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-60 p-3">
              <p className="text-white text-xs font-medium">{member.name}</p>
              <p className="text-white text-lg font-bold">{member.position}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-[#9a7e2f] text-3xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
