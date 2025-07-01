import { useState } from "react";
import { FaInfoCircle} from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
export default function HomeFaqs() {
  const Faqs = [
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
      <section className="flex justify-center">
        <div className="max-w-[1280px] flex flex-col items-center py-[48px]">
          <div className="bg-white px-4 md:px-10 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:!text-[38px] !font-[600] text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
              Get answers to common questions about using our price comparison
              service
            </p>

            {/* Accordion */}
            <div className="max-w-2xl mx-auto space-y-4 text-left">
              {Faqs.map((item, index) => (
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
      </section>
    </>
  );
}
