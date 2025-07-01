import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";
import React, { useState, useEffect } from "react";
import { FaBolt, FaCheckCircle } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     arrows: false,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//   };

//   const slides = [
//     {
//       text: "Wondering how much Mounjaro costs in the UK?",
//       image: img1,
//     },
//     {
//       text: "Not sure where to buy Wegovy at the cheapest price in the UK?",
//       image: img2,
//     },
//     {
//       text: "Mango is here to end the Mounjaro vs. Wegovy price debate with…",
//       image: img3,
//     },
//     {
//       text: "Effortless price comparisons for weight loss meds in the UK!",
//       image: img4,
//     },
//   ];

//   return (
//     <div className="w-[95%] max-w-[1280px] mx-auto py-[50px]">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex justify-center items-center px-4 sm:px-8 md:px-16"
//           >
//             <div className="w-full">
//               <div
//                 className="relative rounded-[20px] overflow-hidden min-h-[216px] sm:min-h-[242px] lg:min-h-[300px] xl:min-h-[416px] bg-cover bg-center flex items-center justify-center"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                 }}
//               >
//                 {/* Orange overlay */}
//                 <div className="absolute inset-0 opacity-70"></div>

//                 {/* Text */}
//                 <h2 className="relative z-10 text-white font-[900] text-[24px] sm:text-[36px] md:text-[42px] xl:text-[48px] font-montserrat text-center px-4">
//                   {slide.text}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
function Carousel() {
  const [activeTab, setActiveTab] = useState("mounjaro");
  const [fadeClass, setFadeClass] = useState("animate-fade-in");
  const partners = [
    { name: "Boots", icon: "🏥" },
    { name: "Superdrug", icon: "💊" },
    { name: "LloydsDirect", icon: "🏪" },
    { name: "Numan", icon: "🔬" },
    { name: "Pharmacy First", icon: "🧪" },
    { name: "Well Pharmacy", icon: "🌡️" },
  ];
  useEffect(() => {
    setFadeClass("animate-fade-out");
    const timeout = setTimeout(() => {
      setFadeClass("animate-fade-in");
    }, 100); // Delay to trigger fade animation
    return () => clearTimeout(timeout);
  }, [activeTab]);
  return (
    <>
      <div className="bg-[#f9fafa]">
        <div className=" max-w-[1280px] mx-auto py-[50px]">
          <div className="py-12 px-4 md:px-10 text-center">
            <p className="mb-2 inline-block text-sm border border-green-200 px-4 py-1 rounded-full bg-green-100 text-[rgb(16_185_129)] font-semibold">
              Compare Treatments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
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
                className={`px-6 py-3 w-full rounded-lg font-medium flex items-center justify-center gap-2 text-white transition-all duration-300 ${
                  activeTab === "mounjaro"
                    ? "bg-[rgb(16_185_129)] shadow-md !font-bold"
                    : "bg-[#ffffff] !text-gray-600 !font-bold"
                }`}
              >
                <FaBolt /> Mounjaro
              </div>
              <div
                onClick={() => setActiveTab("wegovy")}
                className={`px-6 py-3 w-full rounded-lg font-medium flex items-center justify-center gap-2 text-white transition-all duration-300 ${
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
                      <button className="bg-[rgb(16_185_129)] text-white w-full py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition">
                        Compare Mounjaro Prices
                      </button>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400">
                        All prices from GPhC-registered pharmacies
                      </p>
                      <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                        <span>✅ GPhC Verified</span>
                        <span>✅ No Hidden Fees</span>
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
                      <button className="bg-[#ee9c25] text-white w-full py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition">
                        Compare Wegovy Prices
                      </button>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400">
                        All prices from GPhC-registered pharmacies
                      </p>
                      <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                        <span>✅ GPhC Verified</span>
                        <span>✅ No Hidden Fees</span>
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

              <button className="border border-[rgb(16_185_129)] text-[rgb(16_185_129)] font-semibold px-5 py-2 rounded-lg hover:bg-[rgb(16_185_129)] hover:text-[#ffffff] transition duration-200 cursor-pointer">
                Learn More About Treatment Options
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ********************************88888888888888888888888888888888888888888888888888888888888************************* */}
      <div className=" max-w-[1280px] mx-auto py-[50px]">
        <div className="bg-white py-16 px-4 md:px-10 text-center">
          {/* Badge */}
          <div className="inline-block text-sm border border-green-200 px-4 py-1 rounded-full bg-green-100 text-[rgb(16_185_129)] font-semibold mb-3">
            GPhC Registered Partners
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Trusted UK Pharmacy Partners
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            We only work with fully licensed, GPhC-registered pharmacies to
            ensure your safety and peace of mind
          </p>

          {/* Partner Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white py-6 border-gray-50 border-1 px-4 flex flex-col items-center justify-center hover:border-[#10b98133] rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl mb-3">{partner.icon}</div>
                <p className="text-sm font-medium">{partner.name}</p>
                <p className="text-xs text-[rgb(16_185_129)] flex items-center gap-1 mt-1">
                  <FaCheckCircle className="text-[rgb(16_185_129)]" /> Verified
                </p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-green-50 border border-[#10b98133] text-center rounded-xl px-6 py-6 max-w-3xl mx-auto">
            <p className="font-semibold text-sm text-[rgb(16_185_129)] flex justify-center items-center gap-2 mb-1">
              <FaCheckCircle className="text-[rgb(16_185_129)]" />
              100% GPhC Registered
            </p>
            <p className="text-sm text-gray-600">
              Every pharmacy partner is verified by the General Pharmaceutical
              Council (GPhC) and licensed to dispense prescription medications
              in the UK.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
