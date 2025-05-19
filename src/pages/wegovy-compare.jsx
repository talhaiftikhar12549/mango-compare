import image1 from "../assets/wegovy compare/wegovyhero.png";
import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import PriceCalculatorSkeleton from "./PriceCalculatorSkeleton";
const WegovyCompare = () => {
  const faqItems = [
    {
      question: "Is Wegovy covered by the NHS?",
      answer:
        "Yes, but only for eligible patients. The NHS provides Wegovy for adults with a BMI of 35 or higher (or 32.5 for certain ethnic groups) and weight-related health conditions. A referral to a specialist weight management service is required.",
    },
    {
      question: "Is Wegovy cheaper than Mounjaro?",
      answer:
        "Wegovy and Mounjaro are similarly priced, but Wegovy may be slightly cheaper at lower doses. For example, Wegovy’s starting dose can be around £169, while Mounjaro starts at about £184. Prices vary by pharmacy and dosage—compare now with Mango to get the best deal!",
    },
    {
      question: "What is the cheapest price for Wegovy in the UK?",
      answer:
        "Private pharmacies offer Wegovy from around £159.99 per month. On the NHS, it costs £9.90 per prescription if you qualify. Prices fluctuate, so use Mango to find the best price in real-time!",
    },
    {
      question: "How to get Wegovy privately in the UK??",
      answer:
        "To get Wegovy privately, you’ll need a prescription. This involves an online or in-person consultation with a healthcare provider, ensuring you meet the eligibility criteria (BMI of 30+ or 27+ with weight-related conditions). Once you have your prescription, Mango helps you find it at the best price!",
    },
    {
      question: "Where can I buy Wegovy at the lowest price in the UK?",
      answer:
        "The lowest price for Wegovy depends on the pharmacy and ongoing offers. Mango compares prices across the UK to help you find the most affordable option.",
    },
    {
      question: "Do I need a prescription to purchase Wegovy?",
      answer:
        "Yes, Wegovy requires a prescription—whether you get it through the NHS or privately. Once you have your prescription, Mango helps you find the best deal available.",
    },
    {
      question: "Is it safe to buy Wegovy online in the UK?",
      answer:
        "Yes, as long as you buy from a registered and licensed pharmacy. Mango only lists GPhC-verified pharmacies to ensure safety and authenticity.",
    },
    {
      question: "Which UK pharmacy offers the best prices for Wegovy?",
      answer:
        "__ offers Wegovy at £___. However, prices vary, and the cheapest option can change frequently. Mango does the work for you—compare prices now and save!",
    },
    {
      question: "How often do Wegovy prices change?",
      answer:
        "There’s no fixed schedule, but prices can fluctuate based on pharmacy promotions and market competition. Check Mango regularly to stay updated on the best deals!",
    },
  ];
  const availableDoasge = ["0.25 mg", "0.5 mg", "1.0 mg", "1.7 mg", "2.4 mg"];
  const [apiDataM, setApiDataM] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchListings = async () => {
    try {
      const response = await api.get("/medicine");
        const data = response.data.data.filter(
          (item) => item.medicine === "Wegovy"
        );

      if (data.length !== 0) {
        setLoading(false);
      }

      // Sort alphabetically by pharmacy name
      const apiDta = data
        .slice()
        .sort((a, b) => a.pharmacy.localeCompare(b.pharmacy));

      setApiDataM(apiDta);
     
    } catch (error) {
      console.log("Failed to fetch listings", error);
    }
  };

  fetchListings();
}, []);
  return (
    <>
      <HeroSection
        heading="Cut your Wegovy costs by up to 28% compare prices with Mango!"
        text="Wegovy, the weekly self-injection for weight loss, can cost anywhere from £109 to £269 in the UK."
        image={image1}
      />

      <div className="max-w-[1280px] custom-width  w-full px-4 md:px-8 xl:px-0 mx-auto">
        <span className="block text-[22px] md:text-[24px] font-[600] font-montserrat text-[#202244]">
          Cut your Wegovy costs by up to 28%—compare prices with Mango!
        </span>
        <p className="text-[16px] md:text-[18px] pt-[12px] md:pt-[16px] font-[400] font-montserrat text-[#6A778B]">
          Wegovy, the weekly self-injection for weight loss, can cost anywhere
          from £109 to £269 in the UK.
        </p>
        <p className="text-[16px] md:text-[18px] pt-[20px] md:pt-[30px] font-[400] font-montserrat text-[#6A778B]">
          By using Mango’s price comparison, you can save up to 28%—that’s £74
          per four-week supply by choosing the most affordable option. Over a
          year, this adds up to £888 in savings! <br />
          <br className="hidden md:block" />
          Wegovy Dosage Options
        </p>
      </div>

      <div className="max-w-[1280px] custom-width  w-full px-4 md:px-8 xl:px-0 mx-auto pt-[40px] md:pt-[50px]">
        <span className="block text-[22px] md:text-[24px] font-[600] font-montserrat text-[#202244]">
          Mango finds you the best price without compromising your
          GP-recommended dosage
        </span>
        <p className="text-[16px] md:text-[18px] pt-[12px] md:pt-[16px] font-[400] font-montserrat text-[#6A778B]">
          Pharmacies associated with Mango are reputable, fully licensed, and
          highly trusted. We ensure the safe supply of weight loss injections
          while keeping your best interests at the forefront.
        </p>
      </div>

      {/* price calculator */}

      <div className="w-full overflow-x-auto">
        {loading ? (
          <PriceCalculatorSkeleton />
        ) : (
          <div className="min-w-[1024px]">
            <PriceCalculator
              maindata={apiDataM}
              availableDoasge={availableDoasge}
            />
          </div>
        )}
      </div>
      {/* price calculator */}
      {/* Faqs Section */}

      <FaqsSection items={faqItems} />

      {/* Faqs Section  */}
    </>
  );
};
export default WegovyCompare;
