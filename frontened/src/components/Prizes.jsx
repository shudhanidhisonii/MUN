import React from 'react';

const Prizes = () => {
  const prizeList = [
    {
      title: 'Best Delegate',
      amount: '₹10,000',
      quote: 'Leadership that inspires change.',
      image: 'Bdelegate.jpeg',
    },
    {
      title: 'High Commendation',
      amount: '₹5,000',
      quote: 'Recognizing exceptional contribution.',
      image: 'Commendation.jpeg',
    },
    {
      title: 'Special Mention',
      amount: '₹2,000',
      quote: 'For dedication and impactful presence.',
      image: 'Special.jpeg',
    },
    {
      title: 'Best Delegation',
      amount: '₹2,000',
      quote: 'Teamwork makes the dream work.',
      image: 'BestDel.jpeg',
    },
    {
      title: 'Best School Delegation',
      amount: '₹2,000',
      quote: 'Excellence in collective effort.',
      image: 'School.jpeg',
      fullWidth: true, // Custom flag for styling
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-[#062045] mb-4">📍 Prize Structure</h1>

        {/* Removed underline/divider */}
        <div className="mb-12"></div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {prizeList.map((prize, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white border border-[#9a7e2f] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden ${
                prize.fullWidth ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full h-64 md:h-80 overflow-hidden">
                <img
                  src={prize.image}
                  alt={prize.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <div className="p-8 text-left">
                <h2 className="text-3xl font-bold text-[#062045] mb-2">{prize.title}</h2>
                <p className="text-2xl text-[#9a7e2f] font-semibold mb-4">{prize.amount}</p>
                <p className="text-gray-600 italic">{prize.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
