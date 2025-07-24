import { useState } from "react";
import { FaInfoCircle, FaSearch, FaRedo } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function SafetyAndEligibility() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const Information = [
    {
      title: "BMI Requirements for Mounjaro and Wegovy",
      icon: <FaSearch className="text-gray-600" />,
      text: "To be eligible for weight loss injections in the UK, such as Mounjaro (tirzepatide) or Wegovy (semaglutide), most patients need a BMI of 30 or higher. Those with a BMI of 27 or above may also qualify if they have a weight-related condition like type 2 diabetes, PCOS, high blood pressure, or high cholesterol.",
    },
    {
      title: "Prescription-Only Treatments",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Both Mounjaro and Wegovy are prescription-only medicines in the UK. They cannot be bought over the counter or online without a valid prescription issued by a UK-registered prescriber. Normally, patients are required to complete a medical consultation, either online or in person. This step ensures the treatment is suitable based on your health history, BMI, and any existing conditions. It also helps prevent unsafe use and protects you from unregulated weight loss medications often found online.",
    },
    {
      title: "Requirement for Ongoing Supervision",
      icon: <FaRedo className="text-orange-400" />,
      text: "GLP-1 medications like Mounjaro and Wegovy require continuous medical monitoring for safe and effective use. Normally, the treatment begins at a lower dose to reduce the risk of side effects such as nausea, bloating, or fatigue. Over time, your dose may be adjusted depending on how your body reacts to the medication. Regular consultations are important for tracking results, managing any side effects, and keeping your treatment plan medically safe.",
    },
  ];

  return (
    <section className="flex justify-center">
      <div className="max-w-[1280px] flex flex-col items-center py-[50px]">
        <div className="bg-white px-4 md:px-10 text-center">
          {/* Badge */}
          <div className="inline-block text-sm bg-green-100 text-[rgb(16_185_129)] px-3 py-2 rounded-full font-semibold mb-3">
            Safety First
          </div>

          {/* Heading */}
          <h2 className="!text-[24px] md:!text-[24px] font-[600] text-gray-900 mb-2">
            Important Safety & Eligibility Information
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 !text-[16px] max-w-2xl mx-auto mb-10">
            Everything you need to know about accessing weight loss treatments
            safely and legally in the UK
          </p>

          {/* Accordion */}
          <div className="max-w-2xl mx-auto space-y-4 text-left">
            {Information.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 hover:border-[rgb(16_185_129)] duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group w-full flex items-center justify-between px-6 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl transform transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <p className="font-medium text-start text-sm md:text-base text-gray-800 group-hover:text-[rgb(16_185_129)] duration-300">
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

                {/* Animated content */}
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

          {/* Verification Box */}
          <div className="bg-green-50 border border-green-200 text-left rounded-xl px-6 py-5 max-w-2xl mx-auto mt-10">
            <p className="font-semibold text-sm text-[rgb(16_185_129)] flex items-center gap-2 mb-1">
              <FaInfoCircle className="text-[rgb(16_185_129)]" />
              GPhC Registration Verification
            </p>
            <p className="text-sm text-gray-600">
              All pharmacies listed on our platform are registered with the
              General Pharmaceutical Council (GPhC). You can verify any
              pharmacy's registration status on the official GPhC website using
              their registration number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
