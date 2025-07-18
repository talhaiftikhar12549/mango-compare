import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import PriceCalculatorSkeleton from "./PriceCalculatorSkeleton";
const MounjaroCompare = () => {
  const [lowestPrice, setLowestPrice] = useState("--");
  const [totalPharmacy, setTotalPharmacy] = useState("--");
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
        "Mounjaro prices vary across UK pharmacies, but Medicine Marketplace offers Mounjaro at £99. Mango makes it easy to find the best deal. Compare prices from trusted pharmacies and save up to 27% on your prescription—Find the best price now!",
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
  const [apiDataM, setApiDataM] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/medicine");

        const data = response.data.data.filter(
          (item) => item.medicine === "Mounjaro"
        );

        if (data.length !== 0) {
          setLoading(false);
        }
        const lowPrice = Math.min(...data.map((item) => item.price));
        setLowestPrice(lowPrice);

        const pharmacyCounts = {};

        data.forEach((item) => {
          const pharmacyName = item.pharmacy;
          pharmacyCounts[pharmacyName] =
            (pharmacyCounts[pharmacyName] || 0) + 1;
        });
        const totalUniquePharmacies = Object.keys(pharmacyCounts).length + 1;
        setTotalPharmacy(totalUniquePharmacies);

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
        heading="Mounjaro Price Comparison UK – Find Trusted Providers Instantly"
        text="Compare real-time prices from GPhC-registered pharmacies and find exclusive discounts.
Set your filters, view offers, and get your Mounjaro KwikPens delivered.
"
        lowest={lowestPrice}
        totalPharmacy={totalPharmacy}
        percentage={"27"}
      />

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
      <div className="max-w-[1280px] custom-width mx-auto px-4 lg:px-8 xl:px-0 space-y-6"></div>

      {/* Faqs Section */}

      <FaqsSection items={faqItems} />

      {/* Faqs Section  */}
    </>
  );
};
export default MounjaroCompare;
