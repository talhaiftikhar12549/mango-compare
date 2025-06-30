import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeHero() {
  return (
    <>
      {/* <section className="w-[100%]  custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto relative">
      <div
        className="flex flex-col lg:flex-row justify-between items-top h-full py-[70px] bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
        <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto z-1 ">
          <div className="w-full lg:w-[60%] z-10">
            <h1 className="text-[32px] sm:text-[40px] md:text-[42px] lg:text-[46px] font-[700] font-montserrat text-[#ffffff] leading-[1.25]">
              Giving you the best price comparison in the UK
            </h1>

            <p className="sm:text-[16px] mt-[20px] leading-[190%] sm:leading-[190%] font-[500] font-montserrat text-[#ffffffad]">
              Mango is the UK’s go-to price comparison platform for weight loss
              medications, helping you find the best deals on GP-prescribed
              Mounjaro and Wegovy. We compare prices across trusted, licensed
              pharmacies—so you get the right medication at the right price,
              hassle-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-[20px] pt-[30px] md:pt-[40px]">
              <NavLink to="/contact-us">
                <button className="text-[#ffffff]  font-semibold cursor-pointer w-full sm:w-auto py-[12px] px-[32px] rounded-[10px] border-[1px] border-[#FCC821] bg-[#FCC821] hover:text-[#000000] hover:bg-[#FFFFFF] hover:border-[#000000] transition duration-700">
                  Contact Us
                </button>
              </NavLink>

              <button
                onClick={() => {
                  const element = document.getElementById(
                    "dosage-plan-section"
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[#000000] font-semibold cursor-pointer py-[12px] px-[32px] rounded-[10px] border-[1px] border-[#000000] bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#FCC821] hover:border-[#FCC821] transition duration-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      {/* New Home */}
      <section className="w-[100%]  custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto relative bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)]">
        <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto z-1 ">
          <div className=" px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="bg-green-100 text-[rgb(16_185_129)] text-xs font-semibold px-3 py-2 rounded-full w-max mb-4">
                🇬🇧 UK’s Most Trusted Price Comparison
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                No More Hassle – Find the{" "}
                <span className="text-[rgb(16_185_129)]">Cheapest</span> Wegovy
                & Mounjaro in the UK
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                Compare GPhC-registered pharmacies in seconds. Save up to{" "}
                <span className="text-orange-500 font-semibold">27%</span> on
                your treatment.
              </p>

              <div className="flex gap-4 mb-6">
                <button className="bg-orange-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-200">
                  Compare Prices Now
                </button>
                <button className="border cursor-pointer border-[rgb(16_185_129)] text-[rgb(16_185_129)] font-semibold px-6 py-3 rounded-lg hover:bg-[rgb(16_185_129)] hover:text-[#ffffff] transition duration-200">
                  Learn How It Works
                </button>
              </div>

              <div className="flex gap-6 text-sm text-gray-600 font-medium">
                <span className="flex items-center gap-1">
                  ✅ GPhC Verified
                </span>
                <span className="flex items-center gap-1">
                  🚫 No Hidden Fees
                </span>
                <span className="flex items-center gap-1">
                  ⚡ Instant Results
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Mounjaro Card */}
              <div className="bg-white rounded-xl shadow-md p-6 border-[2px] border-[#10b98133] transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <div className="flex justify-between items-center ">
                  <h2 className="text-[12px] font-bold">Mounjaro 2.5mg</h2>
                  <span className="bg-green-100 text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full font-medium">
                    Best Price
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">4-week supply</p>
                <div className="p-0 m-0">
                  <ul className="!list-none !pl-0 !ml-0 space-y-2 text-gray-800">
                    <li className="list-none rounded-xl flex justify-between p-4 bg-[rgb(16_185_129/_0.05))]">
                      <div className="flex justify-between items-center">
                        <div className="!text-[16px] font-[600]">
                          {" "}
                          Boots Online{" "}
                        </div>
                        <div>
                          <span className="font-bold text-[rgb(16_185_129)]">
                            £169
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="list-none flex justify-between  p-4 bg-[rgb(249_250_251)] rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="!text-[16px] font-[600]">
                          Superdrug Health{" "}
                        </div>
                        <div>
                          <span className="font-bold">£189</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-none flex justify-between p-4 bg-[rgb(249_250_251)] rounded-xl">
                      <div className="flex justify-between items-center">
                        <div className="!text-[16px] font-[600]">Numan</div>
                        <div>
                          <span className="font-bold">£199</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-none flex justify-between !text-[16px] font-[600] p-4 bg-orange-50 text-orange-600 rounded-xl">
                      💰 Save £30 vs highest price
                    </li>
                  </ul>
                </div>
              </div>

              {/* Wegovy Card */}
              <div className="bg-white rounded-xl shadow-md transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-6">
                <h2 className="text-lg font-semibold mb-1">Wegovy 1mg</h2>
                <p className="text-sm text-gray-500 mb-4">4-week supply</p>
                <ul className="space-y-2 text-gray-800 !list-none !pl-0 !ml-0">
                  <li className="list-none flex justify-between p-4 bg-orange-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div className="!text-[16px] font-[600]">
                        LloydsDirect{" "}
                      </div>
                      <div>
                        <span className="font-bold text-orange-600">£219</span>
                      </div>
                    </div>
                  </li>
                  <li className="list-none flex justify-between  p-4 bg-[rgb(249_250_251)] rounded-xl">
                    <div className="flex justify-between items-center">
                      <div className="!text-[16px] font-[600]">
                        Pharmacy First{" "}
                      </div>
                      <div>
                        <span className="font-bold">£239</span>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Home */}
    </>
  );
}
