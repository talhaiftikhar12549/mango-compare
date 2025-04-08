import image1 from "../assets/wegovy compare/wegovyhero.png";
import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
export const WegovyCompare = () => {
  const faqItems = [
    {
      question: "Is Wegovy covered by the NHS?",
      answer:
        "Private pharmacies offer Wegovy from around £159.99 per month. On the NHS, it costs £9.90 per prescription if you qualify. Prices fluctuate, so use Mango to find the best price in real-time!",
    },
    {
      question: "Is Wegovy cheaper than Mounjaro?",
      answer:
        "Private pharmacies offer Wegovy from around £159.99 per month. On the NHS, it costs £9.90 per prescription if you qualify. Prices fluctuate, so use Mango to find the best price in real-time!",
    },
    {
      question: "What is the cheapest price for Wegovy in the UK?",
      answer:
        "Private pharmacies offer Wegovy from around £159.99 per month. On the NHS, it costs £9.90 per prescription if you qualify. Prices fluctuate, so use Mango to find the best price in real-time!",
    },
  ];
  return (
    <>
      <HeroSection
        heading="Cut your Wegovy costs by up to 28% compare prices with Mango!"
        text="Wegovy, the weekly self-injection for weight loss, can cost anywhere from £109 to £269 in the UK."
        image={image1}
      />
      <div className="max-w-[1280px]">
        <span className="text-[24px] font-[600] font-montserrat text-[#202244]">
          Cut your Wegovy costs by up to 28%—compare prices with Mango!
        </span>
        <p className="text-[18px] pt-[16px] font-[400] font-montserrat text-[#6A778B]">
          Wegovy, the weekly self-injection for weight loss, can cost anywhere
          from £109 to £269 in the UK.
        </p>
        <p className="text-[18px] pt-[30px] font-[400] font-montserrat text-[#6A778B]">
          By using Mango’s price comparison, you can save up to 28%—that’s £74
          per four-week supply by choosing the most affordable option. Over a
          year, this adds up to £888 in savings! <br />Wegovy Dosage Options
        </p>
      </div>

      <div className="max-w-[1280px] pt-[50px]">
        <span className="text-[24px] font-[600] font-montserrat text-[#202244]">
          Mango finds you the best price without compromising your
          GP-recommended dosage
        </span>
        <p className="text-[18px] pt-[16px] font-[400] font-montserrat text-[#6A778B]">
          Pharmacies associated with Mango are reputable, fully licensed, and
          highly trusted. We ensure the safe supply of weight loss injections
          while keeping your best interests at the forefront.
        </p>
      </div>
      {/* price calculator */}
      <PriceCalculator />
      {/* price calculator */}
      {/* Faqs Section */}

      <FaqsSection items={faqItems} />

      {/* Faqs Section  */}
    </>
  );
};
