import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Icon

const Task1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do plumbers deal with heating?",
      answer:
        "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
    },
    {
      question: "Do you charge a call out fee?",
      answer: "We provide transparent pricing with no hidden charges.",
    },
    {
      question: "How quickly can your company send out an engineer?",
      answer: "Usually within 24 hours, depending on your location.",
    },
    {
      question: "What should I do if you get a water leak?",
      answer: "Turn off your water supply and call us immediately.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#C0C0C0] p-4 sm:p-6 md:p-12 lg:p-24">
      <div className="w-full max-w-[1600px] h-auto flex flex-col gap-24">

        <div className="bg-white flex flex-col w-full sm:max-w-[920px] gap-8 p-6 sm:p-8 shadow-md mx-auto">

          {/* Title */}
          <div className="w-full flex justify-center items-center mt-8  md:my-6 lg:my-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold font-inter leading-snug sm:leading-tight md:leading-[58px] tracking-[-0.03em] text-center text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>


          {/* FAQ Items */}
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 text-black">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg md:text-[28px] leading-[32px] md:leading-[40px] tracking-[-0.03em] font-inter">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-base md:text-[18px] leading-[26px] md:leading-[30px] tracking-[0em] font-inter font-normal text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Task1;
