import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";
import React, { useState } from "react";
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

  return (
    <div className="bg-[#f9fafa] py-12 px-4 md:px-10 text-center">
      <p className="mb-2 inline-block text-sm border border-green-200 px-4 py-1 rounded-full text-green-500">
        Compare Treatments
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Which Treatment is Right for You?
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8">
        Compare Mounjaro and Wegovy side by side to find the best option for
        your weight loss journey
      </p>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("mounjaro")}
          className={`px-6 py-3 w-40 rounded-l-full font-medium flex items-center justify-center gap-2 text-white transition-all duration-300 ${
            activeTab === "mounjaro"
              ? "bg-green-500 shadow-md"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <FaBolt /> Mounjaro
        </button>
        <button
          onClick={() => setActiveTab("wegovy")}
          className={`px-6 py-3 w-40 rounded-r-full font-medium flex items-center justify-center gap-2 text-white transition-all duration-300 ${
            activeTab === "wegovy"
              ? "bg-green-500 shadow-md"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <BsGraphUpArrow /> Wegovy
        </button>
      </div>

      {/* Accordion Card */}
      {activeTab === "mounjaro" && (
        
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
          <div className="bg-white rounded-xl p-6 text-left shadow-lg w-full max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaBolt className="text-green-500 text-xl" />
              <h3 className="font-bold text-xl">Mounjaro</h3>
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full ml-auto">
                Popular
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Tirzepatide injection</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">FREQUENCY</p>
                <p className="font-medium">Weekly injection</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">MECHANISM</p>
                <p className="font-medium">Dual hormone action</p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2 text-green-600 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Key Benefits
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>GLP-1 and GIP receptor agonist</li>
                <li>Targets both appetite and blood sugar</li>
                <li>Clinical studies show 15-20% weight loss</li>
                <li>May improve cardiovascular health</li>
                <li>Gradual dose escalation protocol</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Available Doses</p>
              <div className="flex flex-wrap gap-2">
                {["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"].map((dose) => (
                  <span
                    key={dose}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                  >
                    {dose}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-6 w-full max-w-md shadow-sm">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-4xl font-bold text-green-600">£169</p>
            <p className="text-sm text-gray-500 mb-4">4-week supply</p>

            <div className="bg-green-100 text-sm text-green-800 py-2 px-4 rounded mb-3">
              💰 Compare prices from 15+ UK pharmacies
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-full font-semibold shadow-md">
              Compare Mounjaro Prices
            </button>

            <p className="text-xs text-gray-400 mt-3">
              All prices from GPhC-registered pharmacies
            </p>
            <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
              <span>✅ GPhC Verified</span>
              <span>✅ No Hidden Fees</span>
            </div>
          </div>
        </div>
      )}

      {/* Wegovy placeholder */}
      {activeTab === "wegovy" && (
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
          <div className="bg-white rounded-xl p-6 text-left shadow-lg w-full max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <FaBolt className="text-green-500 text-xl" />
              <h3 className="font-bold text-xl">Wegovy</h3>
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full ml-auto">
                Popular
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Tirzepatide injection</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">FREQUENCY</p>
                <p className="font-medium">Weekly injection</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">MECHANISM</p>
                <p className="font-medium">Dual hormone action</p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2 text-green-600 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Key Benefits
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>GLP-1 and GIP receptor agonist</li>
                <li>Targets both appetite and blood sugar</li>
                <li>Clinical studies show 15-20% weight loss</li>
                <li>May improve cardiovascular health</li>
                <li>Gradual dose escalation protocol</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Available Doses</p>
              <div className="flex flex-wrap gap-2">
                {["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"].map((dose) => (
                  <span
                    key={dose}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                  >
                    {dose}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-6 w-full max-w-md shadow-sm">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-4xl font-bold text-green-600">£169</p>
            <p className="text-sm text-gray-500 mb-4">4-week supply</p>

            <div className="bg-green-100 text-sm text-green-800 py-2 px-4 rounded mb-3">
              💰 Compare prices from 15+ UK pharmacies
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-full font-semibold shadow-md">
              Compare Mounjaro Prices
            </button>

            <p className="text-xs text-gray-400 mt-3">
              All prices from GPhC-registered pharmacies
            </p>
            <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
              <span>✅ GPhC Verified</span>
              <span>✅ No Hidden Fees</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12">
        <p className="text-sm text-gray-500 mb-2">
          Not sure which treatment is right for you?
        </p>
        <button className="border border-green-500 text-green-600 px-5 py-2 rounded-full font-medium hover:bg-green-50 transition">
          Learn More About Treatment Options
        </button>
      </div>
    </div>
  );
}


export default Carousel;
