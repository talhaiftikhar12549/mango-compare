import image1 from "../assets/mounjaro compare/mounjarohero.png";
import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import mounjaroData from "../components/mounjaro-data.js";
const MounjaroCompare = () => {
  const faqItems = [
    {
      question: 'Is Mounjaro cheaper than Wegovy in the UK?',
      answer: "Generally, Mounjaro and Wegovy are priced similarly, but the starting dose of Wegovy (£169) is slightly less than Mounjaro (£184) at some pharmacies. However, at higher doses, Wegovy can be more expensive, with a maximum dose costing up to £269, while Mounjaro's highest dose costs around £204",
    },
    {
      question: 'What is the cheapest price for Mounjaro in the UK?',
      answer: "The cheapest price for Mounjaro in the UK starts from around £139 for the 2.5 mg and 5 mg doses.",
    },
    {
      question: 'Does the NHS cover Mounjaro for weight loss?',
      answer: "Currently, there is no specific information indicating that Mounjaro is covered by the NHS for weight loss. However, some weight-loss medications like Wegovy are available on the NHS under certain conditions.",
    },
    {
      question: 'Where can I buy Wegovy at the lowest price in the UK?',
      answer: "Click Pharmacy offers one of the most affordable options for purchasing Wegovy online in the UK at £159.99 per month. You can navigate the lowest prices with Mango. ",
    },
    {
      question: 'How to get Mounjaro privately in the UK?',
      answer: "To get Mounjaro privately in the UK, you'll need a private prescription. Once you have it, Mango helps you find the best prices from trusted pharmacies across the UK.",
    },
   
    {
      question: 'Is it safe to buy Mounjaro Online in the UK?',
      answer: "It is safe to buy Mounjaro online from legitimate, licensed UK pharmacies. Mango ensures you get access to the best and most trusted options. ",
    },
    {
      question: 'Do I need a prescription to purchase Mounjaro?',
      answer: "Yes, you need a prescription to purchase Mounjaro. This can be obtained through a private consultation with a healthcare provider..",
    },
    {
      question: 'Which UK pharmacy offers the best prices for Mounjaro?',
      answer: "Mounjaro prices vary across UK pharmacies, but /// offers Mounjaro at £ 0.00 Mango makes it easy to find the best deal. Compare prices from trusted pharmacies and save up to 27% on your prescription—Find the best price now!",
    },
    
  ];
  const availableDoasge = [
      "2.5 mg/0.5 mL",
      "5 mg/0.5 mL",
      "7.5 mg/0.5 mL",
      "10 mg/0.5 mL",
      "12.5 mg/0.5 mL",
      "15 mg/0.5 mL",
  ]

  return (
    <>
      <HeroSection
        heading="Save up to 27% on Mounjaro with Mango!"
        text="A weekly self-injectable weight loss pen, Mounjaro retails at £125 to £219 in the UK."
        image={image1}
      />
      <div className="max-w-[1280px] text-[20px] font-[500] font-montserrat text-[#202244] item-center">
        <p>
          By comparing Mounjaro prices across the UK, the average user can save
          up to 27%—that’s £67.01 per four-week supply just by choosing the
          cheapest option. Over a year, that adds up to a massive £804.12 in
          savings!
        </p>
      </div>
      {/* price calculator */}
      <PriceCalculator maindata={mounjaroData} availableDoasge={availableDoasge}/>
      {/* price calculator */}
      <div className="max-w-[1280px]">
        <p className="text-[18px] font-[400] font-montserrat text-[#6A778B]">
          These dosages are administered subcutaneously once a week, with the
          starting dose typically being 2.5 mg and increasing as needed up to a
          maximum of 15 mg.
        </p>
        <span className="text-[24px] font-[600] font-montserrat text-[#202244]">
          Mango helps you get the best price without compromising your
          GP-recommended dosage
        </span>
        <p className="text-[18px] font-[400] font-montserrat text-[#6A778B]">
          Pharmacies associated with Mango are reputable, fully licensed, and
          highly trusted. We ensure the safe supply of weight loss injections
          while keeping your best interests at the forefront.
        </p>
      </div>

      {/* Faqs Section */}
     
      <FaqsSection items={faqItems}/>
  
     
      {/* Faqs Section  */}
    </>
  );
};
 export default MounjaroCompare