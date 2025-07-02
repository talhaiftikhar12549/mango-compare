import { FaBolt, FaCheckCircle } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiFillStop } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function DosagePlan() {
  const [activeTab, setActiveTab] = useState("mounjaro");
  const [fadeClass, setFadeClass] = useState("animate-fade-in");
  useEffect(() => {
    setFadeClass("animate-fade-out");
    const timeout = setTimeout(() => {
      setFadeClass("animate-fade-in");
    }, 100); // Delay to trigger fade animation
    return () => clearTimeout(timeout);
  }, [activeTab]);
  return (
    <>
      <section id="price-compare" className=" bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)]">
        <div className=" max-w-[1280px] mx-auto py-[48px]">
          <div className="px-4 md:px-10 text-center">
            <p className="mb-2 inline-block text-sm border border-green-200 px-4 py-1 rounded-full bg-green-100 text-[rgb(16_185_129)] font-semibold">
              Compare Treatments
            </p>
            <h2 className="!text-[32px] md:text-4xl text-gray-900 mb-2 !font-[600]">
              Which Treatment is Right for You?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Compare Mounjaro and Wegovy side by side to find the best option
              for your weight loss journey
            </p>

            {/* Toggle Buttons */}
            <div className="flex justify-center rounded-lg mb-6 w-full p-2 bg-[#ffffff]">
              <div
                onClick={() => setActiveTab("mounjaro")}
                className={`px-6 py-3 w-full rounded-lg font-medium flex items-center cursor-pointer justify-center gap-2 text-white transition-all duration-300 ${
                  activeTab === "mounjaro"
                    ? "bg-[rgb(16_185_129)] shadow-md !font-bold"
                    : "bg-[#ffffff] !text-gray-600 !font-bold"
                }`}
              >
                <FaBolt /> Mounjaro
              </div>
              <div
                onClick={() => setActiveTab("wegovy")}
                className={`px-6 py-3 w-full rounded-lg font-medium flex items-center cursor-pointer justify-center gap-2 text-white transition-all duration-300 ${
                  activeTab === "wegovy"
                    ? "bg-[rgb(245_158_11)] shadow-md !font-bold"
                    : "bg-[#ffffff] !text-gray-600 !font-bold"
                }`}
              >
                <BsGraphUpArrow /> Wegovy
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className={`flex flex-col lg:flex-row gap-6 justify-between items-stretch ${fadeClass}`}
            >
              {activeTab === "mounjaro" && (
                <>
                  {/* Left Card */}
                  <div className="bg-white rounded-xl p-10 text-left shadow-sm w-full flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-100 p-4 rounded-lg">
                        <FaBolt className="text-[rgb(16_185_129)] text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-bold text-2xl">Mounjaro</h3>
                        <p className="text-sm text-gray-500">
                          Tirzepatide injection
                        </p>
                      </div>
                      <span className="bg-green-100 text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full ml-auto">
                        Popular
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-500">
                          FREQUENCY
                        </p>
                        <p className="font-semibold">Weekly injection</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-500">
                          MECHANISM
                        </p>
                        <p className="font-semibold">Dual hormone action</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-[rgb(16_185_129)] flex items-center gap-2">
                        <FaCheckCircle /> Key Benefits
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        {[
                          "GLP-1 and GIP receptor agonist",
                          "Targets both appetite and blood sugar",
                          "Clinical studies show 15–20% weight loss",
                          "May improve cardiovascular health",
                          "Gradual dose escalation protocol",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="[&::marker]:text-green-500 font-medium"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold mb-2">
                        Available Doses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "2.5mg",
                          "5mg",
                          "7.5mg",
                          "10mg",
                          "12.5mg",
                          "15mg",
                        ].map((dose) => (
                          <span
                            key={dose}
                            className="border border-gray-200 text-sm font-medium px-3 py-1 rounded-full"
                          >
                            {dose}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="bg-green-50 border border-green-100 rounded-xl p-10 w-full shadow-sm flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-4xl py-1 font-bold text-[rgb(16_185_129)]">
                        £169
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        4-week supply
                      </p>
                      <div className="bg-green-100 text-sm text-green-800 py-2 px-4 rounded mb-3">
                        💰 Compare prices from 15+ UK pharmacies
                      </div>
                      <NavLink to="/mounjaro-compare">
                      <button className="bg-[rgb(16_185_129)] cursor-pointer text-white w-full py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition">
                        Compare Mounjaro Prices
                      </button>
                      </NavLink>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400">
                        All prices from GPhC-registered pharmacies
                      </p>
                      <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1"><MdVerified className="text-lg text-[rgb(16_185_129)]"/> GPhC Verified</div>
                        <div className="flex items-center gap-1"> <AiFillStop className="text-lg text-orange-600"/> No Hidden Fees</div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "wegovy" && (
                <>
                  {/* Left Card */}
                  <div className="bg-white rounded-xl p-10 text-left shadow-sm w-full flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#f8f5ee] p-4 rounded-lg">
                        <BsGraphUpArrow className="text-[#ee9c25] text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-bold text-2xl">Wegovy</h3>
                        <p className="text-sm text-gray-500">
                          Semaglutide injection
                        </p>
                      </div>
                      <span className="bg-[#f8f5ee] text-[#ee9c25] text-xs px-3 py-1 rounded-full ml-auto">
                        Popular
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-500">
                          FREQUENCY
                        </p>
                        <p className="font-semibold">Weekly injection</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-500">
                          MECHANISM
                        </p>
                        <p className="font-semibold">Appetite regulation</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-[#ee9c25] flex items-center gap-2">
                        <FaCheckCircle /> Key Benefits
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        {[
                          "GLP-1 receptor agonist",
                          "Proven appetite suppression",
                          "Clinical studies show 10-15% weight loss",
                          "Well-established safety profile",
                          "FDA and MHRA approved",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="[&::marker]:text-[#ee9c25] font-medium"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold mb-2">
                        Available Doses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg"].map(
                          (dose) => (
                            <span
                              key={dose}
                              className="border border-gray-200 text-sm font-medium px-3 py-1 rounded-full"
                            >
                              {dose}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="bg-[#f8f5ee] border border-[#ffe2b7] rounded-xl p-10 w-full shadow-sm flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-4xl py-1 font-bold text-[#ee9c25]">
                        £219
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        4-week supply
                      </p>
                      <div className="bg-[#fff2df] text-sm text-[#ee9c25] py-2 px-4 rounded mb-3">
                        💰 Compare prices from 15+ UK pharmacies
                      </div>
                      <NavLink to="/wegovy-compare">
                      <button className="bg-[#ee9c25] cursor-pointer text-white w-full py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition">
                        Compare Wegovy Prices
                      </button>
                      </NavLink>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400">
                        All prices from GPhC-registered pharmacies
                      </p>
                      <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1"><MdVerified className="text-lg text-[rgb(16_185_129)]"/> GPhC Verified</div>
                        <div className="flex items-center gap-1"> <AiFillStop className="text-lg text-orange-600"/> No Hidden Fees</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-2">
                Not sure which treatment is right for you?
              </p>

              <a href="#blogs" className="border border-[rgb(16_185_129)] text-[rgb(16_185_129)] font-semibold px-5 py-2 rounded-lg hover:bg-[rgb(16_185_129)] hover:text-[#ffffff] transition duration-200 cursor-pointer">
                Learn More About Treatment Options
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
