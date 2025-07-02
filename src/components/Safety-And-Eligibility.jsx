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

  return (
    <section className="flex justify-center">
      <div className="max-w-[1280px] flex flex-col items-center py-[50px]">
        <div className="bg-white px-4 md:px-10 text-center">
          {/* Badge */}
          <div className="inline-block text-sm bg-green-100 text-[rgb(16_185_129)] px-3 py-2 rounded-full font-semibold mb-3">
            Safety First
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:!text-[38px] font-[600] text-gray-900 mb-2">
            Important Safety & Eligibility Information
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
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
                    <p className="font-medium text-sm md:text-base text-gray-800 group-hover:text-[rgb(16_185_129)] duration-300">
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
              pharmacy's registration status on the official GPhC website
              using their registration number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
