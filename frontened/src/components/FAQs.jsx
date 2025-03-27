import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    let timer;
    if (hoverIndex !== null) {
      timer = setTimeout(() => setOpenIndex(hoverIndex), 300); // 300ms delay
    }
    return () => clearTimeout(timer);
  }, [hoverIndex]);

  const faqData = [
    {
      question: 'What is Model United Nations?',
      answer:
        'Model United Nations (MUN) is a simulation where students act as UN delegates, debating global issues and developing diplomatic skills.',
    },
    {
      question: 'I am a first-time MUN participant. What should I expect?',
      answer:
        'Expect an intellectual challenge—research your country’s stance, participate actively in debates, and collaborate to propose solutions.',
    },
    {
      question: 'Is attendance taken in committee sessions?',
      answer:
        'Yes, attendance is mandatory, and action may be taken against absentees.',
    },
    {
      question:
        'The agenda of my committee isn’t relevant to my assigned nation. Does this mean I won’t be part of the debate?',
      answer:
        'No, all delegates are encouraged to participate—integrate your country’s general policies into the debate creatively.',
    },
    {
      question: 'Do I get a participation certificate for attending the KIET MUN?',
      answer:
        'Yes, all participants will receive a certificate of participation.',
    },
    {
      question: 'What committees are being simulated at KIET MUN?',
      answer:
        'The committees being simulated at KIET MUN are: United Nations General Assembly (UNGA), United Nations Human Rights Council (UNHRC), United Nations Environment Programme (UNEP), and All India Political Parties Meet (AIPPM) alongside the International Press.',
    },
    {
      question: 'Do I need prior MUN experience to participate in KIET MUN?',
      answer:
        'No, KIET MUN is open to all students, regardless of their prior MUN experience.',
    },
    {
      question: 'What will be the dress code for the event?',
      answer:
        'The committees would include both Traditional and Western attire. Further details will be communicated by the organizing team.',
    },
    {
      question: 'What is a position paper?',
      answer:
        'A position paper is a statement that reveals your country’s stance on a particular topic. One paper needs to be completed for each topic in your committee.',
    },
    {
      question: 'What is caucusing?',
      answer:
        'Caucusing is an informal debate that occurs during the KIET MUN conference. It can be either moderated, where the chair calls on speakers, or unmoderated, where delegates discuss freely to build consensus.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start px-4 py-16 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#9a7e2f] text-center tracking-wide">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              className={`flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none transition-colors duration-300 ${
                openIndex === index
                  ? 'bg-gray-100'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <h2 className="text-base md:text-lg font-medium text-[#062045] flex-1">
                {item.question}
              </h2>
              <span className="text-xl md:text-2xl text-[#9a7e2f] ml-4 transform transition-transform duration-300">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700 text-base leading-relaxed transition-all duration-300">
                {item.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
