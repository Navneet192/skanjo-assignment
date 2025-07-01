'use client';
import { useState } from 'react';
const faqs = [
  {
    question: 'Is it safe to share candidate information with Skanjo?',
    answer:
      'Yes. Skanjo does not store or retain any candidate information. The tool performs real-time analysis on the CVs you upload and returns the screening results immediately. All data stays within your control, and the results are downloadable for internal use.',
  },
  {
    question: 'Do I need technical support to install it?',
    answer:"No. Skanjo is a native Zoho Recruit plugin and can be installed in minutes."
  },
  {
    question: 'Does it work for all industries?',
    answer:
      "Yes. Skanjo’s algorithm adapts across tech, sales, operations, and more.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="faqs">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center w-full">FAQs</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {item.question}
                <svg
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m-7-7h14"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 text-base">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}