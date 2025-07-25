import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeFaqs() {
  const Faqs = [
    {
      title: "What is Mango Compare and how does it work?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Mango Compare is a free UK-based tool to compare prices for weight loss injections. Choose your dose, and we’ll show you trusted UK pharmacies offering the lowest retail prices.",
    },
    {
      title: "Which products can I compare on Mango Compare?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "You can compare Wegovy and Mounjaro from licensed UK pharmacies. Set filters like dose, price range, and discounts, and compare prices with just a few clicks.",
    },
    {
      title:
        "Does Restarting Mounjaro or Wegovy After a Break Require a New Consultation?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Yes, if you’ve taken a break from Mounjaro or Wegovy, most UK providers will require a new consultation before allowing you to restart treatment. This helps ensure the medication is still safe and appropriate for you, especially if your health status or weight loss goals have changed. ",
    },
    {
      title: " How to Find Licensed UK Pharmacies for Weight Loss Treatments?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "The safest way to get genuine medication is by choosing pharmacies registered with the GPhC or approved by the MHRA. Mango Compare partners only with verified providers, saving you time and helping you find trusted options.",
    },
    {
      title: "How up‑to‑date are the price comparisons?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "We update pricing frequently to reflect the latest retail Mounjaro and Wegovy prices in the UK, so you're always comparing real-time pharmacy offers.",
    },
    {
      title: "Are the suppliers verified and safe?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Yes, Mango Compare only lists verified suppliers. All the pharmacies on our platform are registered with GPhC. We make sure your experience at Mango Compare is safe and reliable.",
    },
    
    {
      title: "What happens if I have a dispute or a bad claim experience?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Mango Compare doesn’t sell products. For order issues, contact the pharmacy directly. We only list verified UK suppliers.",
    },
    {
      title: "Where does Mango Compare operate — UK only or more countries?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Mango Compare operates in the United Kingdom only, showing verified prices from UK-based pharmacies for Wegovy and Mounjaro.",
    },
    {
      title: "How much does a Mounjaro consultation cost?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: (
        <>
          If you purchase Mounjaro from the same provider that handles both prescribing and dispensing, the consultation fee is usually included in the total cost. For example, Pharmacy2U charges {"  "}
          <a
            className="text-orange-500"
            href="https://www.pharmacy2u.co.uk/online-doctor/conditions/weight-loss/treatments/mounjaro"
            target="_blank"
            rel="noopener noreferrer"
          >
             £109
          </a>{" "}
          ,CheqUp{" "}
          <a
            className="text-orange-500"
            href="https://go.chequp.com/mon-alt/"
            target="_blank"
            rel="noopener noreferrer"
          >
             £119
          </a>{" "}
          , and The Family Chemist{" "}
          <a
            className="text-orange-500"
            href="https://www.thefamilychemist.co.uk/weight-loss/mounjaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
             £130
          </a>{" "}
          If you use a third-party prescribing service, the consultation fee may be charged separately.
        </>
      ),
    },
    {
      title: "Can I restart Mounjaro after a break?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Yes, but always consult your prescriber. Mango helps you compare prices if you're restarting Mounjaro in the UK after a pause.",
    },
    {
      title: "Does the NHS Cover Mounjaro for Weight Loss?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: "Yes, as of June 2025, Mounjaro (tirzepatide) is available on the NHS in the UK. It is prescribed only to people with a BMI of 40 or above, or 35 for some ethnic groups, along with at least four weight-related conditions such as type 2 diabetes, high blood pressure, heart disease, or sleep apnoea.",
    },
    {
      title: "How do customer reviews help build trust in a pharmacy?",
      icon: <FaInfoCircle className="text-[rgb(16_185_129)]" />,
      text: (
        <>
          Reviews show how a pharmacy performs in delivery speed and service
          quality. The Care Pharmacy has a{"  "}
          <a
            className="text-orange-500"
            href="https://www.trustpilot.com/review/thecarepharmacy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            5.0 rating
          </a>{" "}
          , Simple Online Pharmacy{" "}
          <a
            className="text-orange-500"
            href="https://www.trustpilot.com/review/simpleonlinepharmacy.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            4.7
          </a>{" "}
          , and MedExpress Pharmacy{" "}
          <a
            className="text-orange-500"
            href="https://www.trustpilot.com/review/www.medexpress.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            4.4
          </a>{" "}
          on Trustpilot. High ratings help customers choose with confidence.
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex justify-center">
      <div className="max-w-[1280px] flex flex-col items-center py-[48px]">
        <div className="bg-white px-4 md:px-10 text-center">
          <h2 className="!text-[24px] md:!text-[24px] !font-[600] text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 !text-[16px] max-w-2xl mx-auto mb-10">
            Get answers to common questions about using our price comparison
            service
          </p>

          <div className="max-w-2xl mx-auto space-y-4 text-left">
            {Faqs.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border border-gray-100 hover:border-[rgb(16_185_129)] duration-300`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group w-full flex items-start justify-between px-6 py-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="font-medium text-start text-sm md:text-base text-gray-800 duration-300 group-hover:text-[rgb(16_185_129)]">
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
        </div>
      </div>
    </section>
  );
}
