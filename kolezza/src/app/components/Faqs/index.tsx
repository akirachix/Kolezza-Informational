"use client"; // Ensure this is necessary and used correctly in your project setup

const FaQs = () => {
  // Array of FAQ items
  const faqs = [
    {
      question: "Where can I get the device?",
      answer: "You can get it at any hospital and organizations that support people with a speech disorder e.g SLT.",
    },
    {
      question: "Will Sawatok replace speech therapy?",
      answer: "No, Sawatok is designed to complement speech therapy, not replace it. For best results, children should use Sawatok as part of a comprehensive speech therapy program.",
    },
    {
      question: "How long does it take to see results?",
      answer: "With consistent daily use, most children see improvements in fluency within 2-3 months.",
    },
    {
      question: "Is Sawatok effective for all types of stammering?",
      answer: "Yes, Sawatok is designed to assist with various types of stammering, but individual results may vary.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 bg-white">
      {/* Title */}
      <h1 className="text-center text-[26px] sm:text-[26px] md:text-[54px] lg:text-[54px] font-bold mb-6 mt-2 text-[#052049] font-nunito drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 gap-y-12 gap-x-6 mt-12 md:grid-cols-2 md:gap-y-8 md:gap-x-12 md:mt-16 lg:grid-cols-2 lg:gap-x-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex items-start ${index === 2 ? 'pt-0' : ''}`} // Align FAQ 3 with FAQ 4
          >
            <span className="font-bold text-[35px] sm:text-[35px] md:text-[34px] lg:text-[34px] text-black mr-2 sm:mr-2 md:mr-3 lg:mr-4 font-nunito">
              {String(index + 1).padStart(2, '0')}. {/* Automatically assign numbers */}
            </span>
            <div className="mr-2 sm:mr-2 md:mr-3 lg:mr-4">
              <h2 className="font-bold text-[24px] sm:text-[24px] md:text-[30px] lg:text-[30px] font-nunito">
                {faq.question}
              </h2>
              <p className="text-gray-700 mt-1 sm:mt-1 md:mt-2 lg:mt-2 text-[15px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-nunito">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaQs;
