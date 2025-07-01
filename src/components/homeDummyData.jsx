import React, { useState } from "react";
import { FaInfoCircle, FaCheckCircle, FaSearch, FaRedo } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
export default function HomeDummyData() {
  const faqs = [
    {
      title: "Consultation Requirements",
      icon: <FaSearch className="text-gray-600" />,

      text: "You’ll need to complete an online consultation to ensure treatment is suitable and safe for you.",
    },
    {
      title: "NHS Eligibility (June 2025)",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,

      text: "From June 2025, Wegovy will be available via the NHS for certain patients who meet eligibility criteria.",
    },
    {
      title: "Restarting After a Break",
      icon: <FaRedo className="text-orange-400" />,

      text: "If you’ve taken a break from treatment, you may need to restart at a lower dose. Consult with your provider.",
    },
  ];
  const realFaqs = [
    {
      title: "How do I know if these pharmacies are ler",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,

      text: "All pharmacies on our platform are GPhC-registered (General Pharmaceutical Council) and fully licensed to operate in the UK. We regularly verify their credentials and only work with established, reputable pharmacies.",
    },
    {
      title: "NHS Eligibility (June 2025)",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,

      text: "From June 2025, Wegovy will be available via the NHS for certain patients who meet eligibility criteria.",
    },
    {
      title: "Restarting After a Break",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,

      text: "If you’ve taken a break from treatment, you may need to restart at a lower dose. Consult with your provider.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[1280px] flex flex-col items-center py-[50px]">
          <div className="bg-white py-16 px-4 md:px-10 text-center">
            {/* Badge */}
            <div className="inline-block text-sm bg-green-100 text-[rgb(16_185_129)] px-3 py-2 rounded-full font-semibold mb-3">
              Safety First
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Important Safety & Eligibility Information
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
              Everything you need to know about accessing weight loss treatments
              safely and legally in the UK
            </p>

            {/* Accordion */}
            <div className="max-w-2xl mx-auto space-y-4 text-left">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border border-gray-100 hover:border-[rgb(16_185_129)] duration-300 overflow-hidden`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="group w-full flex items-center justify-between px-6 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl transform transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <p className="font-medium text-sm md:text-base text-gray-800 transition-colors duration-300 group-hover:text-[rgb(16_185_129)]">
                        {item.title}
                      </p>
                    </div>
                    <div
                      className={`text-sm text-gray-400 transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <RiArrowUpSLine className="text-xl" />
                    </div>
                  </button>

                  <div
                    className={`px-6 transition-all duration-500 ease-in-out overflow-hidden text-sm text-gray-600 ${
                      activeIndex === index
                        ? "max-h-40 opacity-100 pb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="py-2">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Box */}
            <div className="bg-green-50 border border-green-200 text-left rounded-xl px-6 py-5 max-w-2xl mx-auto mt-10">
              <p className="font-semibold text-sm text-[rgb(16_185_129)] flex items-center gap-2 mb-1">
                <FaInfoCircle className="text-[rgb(16_185_129)]" />
                GPhC Registration Verification
              </p>
              <p className="text-sm text-gray-600">
                All pharmacies listed on our platform are registered with the
                General Pharmaceutical Council (GPhC). You can verify any
                pharmacy's registration status on the official GPhC website
                using their registration number.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* **********************************************88888888888888888888888888888888888888888***************************************************** */}
      <div className="flex justify-center">
        <div className="max-w-[1280px] flex flex-col items-center py-[50px]">
          <div className="bg-white py-16 px-4 md:px-10 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
              Get answers to common questions about using our price comparison
              service
            </p>

            {/* Accordion */}
            <div className="max-w-2xl mx-auto space-y-4 text-left">
              {realFaqs.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border border-gray-100 hover:border-[rgb(16_185_129)] duration-300 overflow-hidden`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="group w-full flex items-center justify-between px-6 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl transform transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <p className="font-medium text-sm md:text-base text-gray-800 transition-colors duration-300 group-hover:text-[rgb(16_185_129)]">
                        {item.title}
                      </p>
                    </div>
                    <div
                      className={`text-sm text-gray-400 transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <RiArrowUpSLine className="text-xl" />
                    </div>
                  </button>

                  <div
                    className={`px-6 transition-all duration-500 ease-in-out overflow-hidden text-sm text-gray-600 ${
                      activeIndex === index
                        ? "max-h-40 opacity-100 pb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="py-2">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* **********************************************88888888888888888888888888888888888888888***************************************************** */}
      <div className="flex justify-center bg-gradient-to-br from-teal-400 via-yellow-400 to-orange-500">
        <div className="max-w-[1280px] flex flex-col items-center py-[50px]">
          <div className="flex items-center justify-center  px-4">
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-3xl w-full text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Your Weight <br className="md:hidden" /> Loss Journey
                Today
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Join thousands of UK patients who have saved money on their
                weight loss medications. Compare prices from trusted pharmacies
                in seconds.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(16_185_129)] text-xl">✔</span> 100% GPhC
                  Verified
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(16_185_129)] text-xl">✔</span> No Hidden
                  Fees
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[rgb(16_185_129)] text-xl">✔</span> Save Up to
                  27%
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition">
                Compare Wegovy & Mounjaro Prices →
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Free to use • Instant results • Secure and confidential
              </p>

              <hr className="my-8 border-gray-200" />

              <div className="flex justify-center gap-10 text-center">
                <div>
                  <p className="text-[rgb(16_185_129)] font-bold text-xl">15,000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-[#ee9c25] font-bold text-xl">£2.1M+</p>
                  <p className="text-sm text-gray-600">Total Savings</p>
                </div>
                <div>
                  <p className="text-orange-500 font-bold text-xl">50+</p>
                  <p className="text-sm text-gray-600">Partner Pharmacies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
