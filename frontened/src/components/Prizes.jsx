import React from 'react';
import { FaMedal, FaTrophy, FaAward, FaUsers, FaSchool } from 'react-icons/fa';

const Prizes = () => {
  const prizeList = [
    {
      title: 'Best Delegate',
      amount: '₹10,000',
      quote: 'Leadership that inspires change.',
      icon: <FaTrophy className="text-[#9a7e2f] text-5xl" />,
    },
    {
      title: 'High Commendation',
      amount: '₹5,000',
      quote: 'Recognizing exceptional contribution.',
      icon: <FaMedal className="text-[#9a7e2f] text-5xl" />,
    },
    {
      title: 'Special Mention',
      amount: '₹2,000',
      quote: 'For dedication and impactful presence.',
      icon: <FaAward className="text-[#9a7e2f] text-5xl" />,
    },
    {
      title: 'Best Delegation',
      amount: '₹2,000',
      quote: 'Teamwork makes the dream work.',
      icon: <FaUsers className="text-[#9a7e2f] text-5xl" />,
    },
    {
      title: 'Best School Delegation',
      amount: '₹2,000',
      quote: 'Excellence in collective effort.',
      icon: <FaSchool className="text-[#9a7e2f] text-5xl" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-[#062045] mb-6">📍 Prize Structure</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {prizeList.slice(0, 4).map((prize, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-[#9a7e2f] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="mb-4">{prize.icon}</div>
              <h2 className="text-3xl font-bold text-[#062045] mb-2">{prize.title}</h2>
              <p className="text-2xl text-[#9a7e2f] font-semibold mb-4">{prize.amount}</p>
              <p className="text-gray-600 italic">{prize.quote}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center bg-white border border-[#9a7e2f] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 ease-in-out w-full md:w-1/2">
            <div className="mb-4">{prizeList[4].icon}</div>
            <h2 className="text-3xl font-bold text-[#062045] mb-2">{prizeList[4].title}</h2>
            <p className="text-2xl text-[#9a7e2f] font-semibold mb-4">{prizeList[4].amount}</p>
            <p className="text-gray-600 italic">{prizeList[4].quote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;