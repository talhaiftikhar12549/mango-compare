import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react";
export default function FaqsSection({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="max-w-[1280px] w-full px-4 md:px-8 xl:px-0 mx-auto flex flex-col justify-start pt-[60px] md:pt-[88px] pb-[120px] md:pb-[200px]">
        <div className="w-full pb-[40px] md:pb-[56px]">
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-[700] text-center font-montserrat text-[#061C3D] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="pt-[40px] md:pt-[56px] flex flex-col gap-y-[16px]">
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
      </section>
    </>
  );
}
