import image1 from "../assets/mounjaro compare/mounjarohero.png";
import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";

const MounjaroCompare = () => {
  const faqItems = [
    {
      question: "Is Mounjaro cheaper than Wegovy in the UK?",
      answer:
        "Generally, Mounjaro and Wegovy are priced similarly, but the starting dose of Wegovy (£169) is slightly less than Mounjaro (£184) at some pharmacies. However, at higher doses, Wegovy can be more expensive, with a maximum dose costing up to £269, while Mounjaro's highest dose costs around £204",
    },
    {
      question: "What is the cheapest price for Mounjaro in the UK?",
      answer:
        "The cheapest price for Mounjaro in the UK starts from around £139 for the 2.5 mg and 5 mg doses.",
    },
    {
      question: "Does the NHS cover Mounjaro for weight loss?",
      answer:
        "Currently, there is no specific information indicating that Mounjaro is covered by the NHS for weight loss. However, some weight-loss medications like Wegovy are available on the NHS under certain conditions.",
    },
    {
      question: "Where can I buy Wegovy at the lowest price in the UK?",
      answer:
        "Click Pharmacy offers one of the most affordable options for purchasing Wegovy online in the UK at £159.99 per month. You can navigate the lowest prices with Mango. ",
    },
    {
      question: "How to get Mounjaro privately in the UK?",
      answer:
        "To get Mounjaro privately in the UK, you'll need a private prescription. Once you have it, Mango helps you find the best prices from trusted pharmacies across the UK.",
    },

    {
      question: "Is it safe to buy Mounjaro Online in the UK?",
      answer:
        "It is safe to buy Mounjaro online from legitimate, licensed UK pharmacies. Mango ensures you get access to the best and most trusted options. ",
    },
    {
      question: "Do I need a prescription to purchase Mounjaro?",
      answer:
        "Yes, you need a prescription to purchase Mounjaro. This can be obtained through a private consultation with a healthcare provider..",
    },
    {
      question: "Which UK pharmacy offers the best prices for Mounjaro?",
      answer:
        "Mounjaro prices vary across UK pharmacies, but /// offers Mounjaro at £ 0.00 Mango makes it easy to find the best deal. Compare prices from trusted pharmacies and save up to 27% on your prescription—Find the best price now!",
    },
  ];
  const availableDoasge = [
    "2.5 mg",
    "5 mg",
    "7.5 mg",
    "10 mg",
    "12.5 mg",
    "15 mg",
  ];
const [apiDataM, setApiDataM] = useState ([])
const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/medicine");
        console.log("API data",response.data.data)
         const data = response.data.data.filter((item) => item.medicine === "Mounjaro");
        
        if (data.length !== 0) {
          setLoading(false)
        }
        const apiDta = data
        console.log("Api Data Mounjaro", apiDta );
        setApiDataM(apiDta)
      } catch (error) {
        console.log("Failed to fetch listings", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <HeroSection
        heading="Save up to 27% on Mounjaro with Mango!"
        text="A weekly self-injectable weight loss pen, Mounjaro retails at £125 to £219 in the UK."
        image={image1}
      />
      <div className="max-w-[1280px] custom-width  mx-auto px-4 lg:px-8 xl:px-0 text-[16px] sm:text-[18px] md:text-[20px] font-[500] font-montserrat text-[#202244] text-center md:text-left">
        <p>
          By comparing Mounjaro prices across the UK, the average user can save
          up to 27%—that’s £67.01 per four-week supply just by choosing the
          cheapest option. Over a year, that adds up to a massive £804.12 in
          savings!
        </p>
      </div>

      {/* price calculator */}

      <div className="w-full overflow-x-auto">
      {loading ? <div className="w-[100vw] h-[50vh] justify-center items-center bg-gray-100 p-52">Loading</div>
      :
    
        <div className="min-w-[1024px]">
          <PriceCalculator
            maindata={apiDataM}
            // maindata={mounjaroData}
            availableDoasge={availableDoasge}
            isResetter={true}
          />
        </div>
    }
      </div>

      {/* price calculator */}
      <div className="max-w-[1280px] custom-width  mx-auto px-4 lg:px-8 xl:px-0 space-y-6">
        <p className="text-[16px] sm:text-[18px] font-[400] font-montserrat text-[#6A778B] text-center md:text-left">
          These dosages are administered subcutaneously once a week, with the
          starting dose typically being 2.5 mg and increasing as needed up to a
          maximum of 15 mg.
        </p>

        <span className="block text-[20px] sm:text-[24px] font-[600] font-montserrat text-[#202244] text-center md:text-left">
          Mango helps you get the best price without compromising your
          GP-recommended dosage
        </span>

        <p className="text-[16px] sm:text-[18px] font-[400] font-montserrat text-[#6A778B] text-center md:text-left">
          Pharmacies associated with Mango are reputable, fully licensed, and
          highly trusted. We ensure the safe supply of weight loss injections
          while keeping your best interests at the forefront.
        </p>
      </div>

      {/* Faqs Section */}

      <FaqsSection items={faqItems} />

      {/* Faqs Section  */}
    </>
  );
};
export default MounjaroCompare;
