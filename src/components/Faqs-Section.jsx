import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
export default function FaqsSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* <section className="max-w-[1280px] custom-width  w-full px-4 md:px-8 xl:px-0 mx-auto flex flex-col justify-start  md:py-[50px] pb-[40px]  ">
        <div className="w-full">
          <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-[700] text-center font-montserrat text-[#061C3D] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-5 flex flex-col gap-y-[16px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border w-full border-solid border-[#E6E8EC] cursor-pointer  p-[20px] md:p-[24px] ${
                activeIndex === index ? "bg-[#F5F6F7]" : "bg-white"
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[18px] md:text-[20px] font-[600] font-montserrat text-[#061C3D]">
                  {item.question}
                </h3>
                <FaPlus
                  className={`text-xl transform transition-transform duration-500 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-[16px] w-full flex-wrap">
                  <div className="flex gap-x-[8px]">
                    <div className="px-[2px] bg-[#FFC71D]"></div>
                    <div>
                      <p className="text-[15px] md:text-[16px] leading-[24px] font-[400] font-montserrat text-[#42526B]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="flex justify-center w-full">
        <div className="max-w-[1280px] flex flex-col items-center py-[48px] w-full">
          <div className="bg-white px-4 md:px-10 text-center w-full">
            <h2 className="!text-[24px] md:!text-[24px] !font-[600] text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 !text-[16px] max-w-2xl mx-auto mb-10">
              Get answers to common questions about using our price comparison
              service
            </p>

            <div className="max-w-2xl mx-auto space-y-4 text-left">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl w-full border border-gray-100 hover:border-[rgb(16_185_129)] duration-300`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="group w-full flex items-start justify-between px-6 py-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <p className="font-medium text-start text-sm md:text-base text-gray-800 duration-300 group-hover:text-[rgb(16_185_129)]">
                        {item.question}
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
                        <div className="py-2">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
