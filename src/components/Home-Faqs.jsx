import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeFaqs() {
  const Faqs = [
    {
      title: "How do I know if these pharmacies are ler",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "All pharmacies on our platform are GPhC-registered...",
    },
    {
      title: "NHS Eligibility (June 2025)",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "From June 2025, Wegovy will be available via the NHS...",
    },
    {
      title: "Restarting After a Break",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "If you’ve taken a break from treatment...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex justify-center">
      <div className="max-w-[1280px] flex flex-col items-center py-[48px]">
        <div className="bg-white px-4 md:px-10 text-center">
          <h2 className="!text-[24px] md:!text-[24px] !font-[600] text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 !text-[16px] max-w-2xl mx-auto mb-10">
            Get answers to common questions about using our price comparison service
          </p>

          <div className="max-w-2xl mx-auto space-y-4 text-left">
            {Faqs.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border border-gray-100 hover:border-[rgb(16_185_129)] duration-300`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group w-full flex items-center justify-between px-6 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="font-medium text-sm md:text-base text-gray-800 duration-300 group-hover:text-[rgb(16_185_129)]">
                      {item.title}
                    </p>
                  </div>
                  <div
                    className={`text-sm text-gray-400 transform transition-transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <RiArrowUpSLine className="text-xl" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-6 text-sm text-gray-600"
                    >
                      <div className="py-2">{item.text}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
