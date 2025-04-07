import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react";
export default function FaqsSection() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <section className="max-w-[1280px] pt-[88px] pb-[200px]">
        <div className="w-full pb-[56px]">
          <h2 className="text-[56px] font-[700] font-montserrat text-[#061C3D]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="pt-[56px] flex flex-col gap-y-[16px]">
          <div
            className={`border border-solid border-[#E6E8EC]
 p-[24px] ${isActive ? "bg-[#F5F6F7]" : "bg-white"}`}
            onClick={handleClick}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-[600] font-montserrat text-[#061C3D]">
                Is Mounjaro cheaper than Wegovy in the UK?
              </h3>
              <FaPlus
                className={`text-xl transform font-lg transition-transform duration-500 ${
                  isActive ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
          </div>

          <div
            className={`border border-solid border-[#E6E8EC]
 p-[24px] ${isActive ? "bg-[#F5F6F7]" : "bg-white"}`}
            onClick={handleClick}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-[600] font-montserrat text-[#061C3D]">
                Is Mounjaro cheaper than Wegovy in the UK?
              </h3>
              <FaPlus
                className={`text-xl transform font-lg transition-transform duration-500 ${
                  isActive ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
          </div>
          <div
            className={`border border-solid border-[#E6E8EC]
 p-[24px] ${isActive ? "bg-[#F5F6F7]" : "bg-white"}`}
            onClick={handleClick}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-[600] font-montserrat text-[#061C3D]">
                Is Mounjaro cheaper than Wegovy in the UK?
              </h3>
              <FaPlus
                className={`text-xl transform font-lg transition-transform duration-500 ${
                  isActive ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
