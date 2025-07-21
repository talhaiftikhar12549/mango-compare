import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState, useRef } from "react";
import api from "../services/api.js";
import PriceCalculatorSkeleton from "./PriceCalculatorSkeleton";

// import wegovyImage from "../assets/images/wegovy.png";

import { FaCheck, FaStethoscope } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { BsCalendarWeek } from "react-icons/bs";
import { BiHealth } from "react-icons/bi";
import { TbActivityHeartbeat, TbChartLine } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { FiMusic } from "react-icons/fi";
import { FaHandsWash } from "react-icons/fa";
import { BiSearchAlt, BiMapPin, BiDroplet, BiInjection } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  FaInfoCircle,
  FaSkullCrossbones,
  FaRunning,
  FaSadTear,
} from "react-icons/fa";
import { AiFillHeart, AiOutlineWarning } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { BiSolidInjection, BiMap, BiUser } from "react-icons/bi";
import { FiClock, FiRepeat, FiBox } from "react-icons/fi";
import { FaShieldAlt, FaUserMd, FaSyringe } from "react-icons/fa";
import wegovyImage from "../assets/wegovy compare/wegovyinjection.webp";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import fatwomanimage from "../assets/wegovy compare/fatwomenimage.webp";
const MounjaroCompare = () => {
  const [lowestPrice, setLowestPrice] = useState("--");
  const [totalPharmacy, setTotalPharmacy] = useState("--");
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
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

      <div
        ref={contactRef}
        id="pricecalculatorwegovy"
        className="w-full overflow-x-auto"
      >
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

      {/* How mango compare help */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-full">
        <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto ">
          <div className="max-w-7xl mx-auto md:px-6 px-0">
            <div className="!text-[24px] md:!text-[24px] !pt-[0px] mb-4 flex items-center justify-center">
              <h2 className=" max-w-2xl !text-center  md:text-4xl !font-[600] !text-[#ffffff]">
                How Mango Compare helps you find cheap Mounjaro from
                GPhC-registered pharmacies?
              </h2>
              {/* <div className="w-24 h-1 bg-white mx-auto"></div> */}
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content Block */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <RiMedicineBottleLine className="text-white text-2xl " />
                  </div>
                  <p className="text-white mb-4">
                    Mango Compare is a trusted platform created with one vision
                    in mind: to make finding the best deals on weight loss
                    injections easier than ever.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <p className="text-white">
                      We partner exclusively with GPhC-verified pharmacies and
                      regularly update retail prices to ensure you get the
                      latest information on Mounjaro. Our platform also
                      highlights exclusive discounts, helping you save money and
                      find the best offers available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Block */}
              <div className="relative flex justify-center items-center">
                <img
                  className="w-[75%] rounded-[10px]"
                  src={wegovyImage}
                  alt="Wegovy Product"
                />
                <div className="absolute left-0 -bottom-6 md:-left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      GPHC
                    </div>
                    <div className="text-sm text-gray-600">
                      Register Pharmacies
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-md " />
                </div>
                <p className="text-white">
                  {" "}
                  For Adults Designed for adult patients with obesity
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarCheck className="text-white text-md " />
                </div>
                <p className="text-white">
                  Long-term Results Helps achieve sustainable weight loss
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {" "}
                  <MdHealthAndSafety className="text-white text-lg " />
                </div>
                <p className="text-white">
                  UK Available Prescription available in the UK
                </p>
              </div>
            </div> */}
          </div>{" "}
        </section>
      </div>
      {/* How mango cmpare help */}
      {/* How Does Wegovy Work? */}
      <section className="w-full bg-gray-50">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="max-w-7xl mx-auto md:px-6 px-0">
            <div className="text-center mb-16">
              <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
                Why Compare Mounjaro prices in the UK?
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Box */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <LuBrain className="text-2xl text-orange-600" />
                  </div>
                  {/* <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Natural Hormone Mimicry
                  </h3> */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As demand for Mounjaro grows rapidly, finding the best deals
                    among so many pharmacies can be challenging. It’s also
                    increasingly difficult to identify legitimate providers,
                    with reports of counterfeit Mounjaro being sold both online
                    and in local shops.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-6">
                    {/* <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Gradual Dose Increase
                    </h4> */}
                    <p className="text-gray-700 leading-relaxed">
                      Manually verifying each pharmacy while comparing prices
                      can be time-consuming and overwhelming. To save you the
                      hassle, Mango Compare does the work for you, tracking
                      real-time prices across verified UK pharmacies, so you can
                      buy with confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Medical illustration showing GLP-1 hormone mechanism in human body brain appetite control, scientific diagram style with clean background, medical education infographic, professional healthcare visualization&width=600&height=600&seq=mechanism1&orientation=squarish"
                  alt="How Wegovy Works"
                  className="w-full rounded-2xl shadow-lg object-cover h-96"
                />
                <div className="absolute -bottom-6 right-0 md:-right-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      real-time prices
                    </div>
                    <div className="text-sm text-gray-600">
                      Verified UK pharmacies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Does Wegovy Work? */}

      {/* healthier life */}
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-0 xl:px-0 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:px-8 px-0 md:py-12 py-0  bg-white">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 ">
              What makes a GPhC-Registered pharmacy different?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              The GPhC stands for the General Pharmaceutical Council. It is the
              official regulatory body for pharmacies and pharmacists in Great
              Britain.
            </p>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              When the GPhC regulates a pharmacy, it meets the standards
              required to sell medications legally in the UK. If a pharmacy is
              not registered with the GPhC, it’s a red flag, and you should
              avoid purchasing from it. To make verification easier, the GPhC
              provides a publicly accessible registry where you can check
              whether a pharmacy is properly registered.
            </p>
            {/* <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaShieldAlt className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Clinically Proven</p>
                  <p className="text-sm text-gray-500">
                    FDA-approved for chronic weight management
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaUserMd className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Professional Support</p>
                  <p className="text-sm text-gray-500">
                    Guidance from qualified healthcare providers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaSyringe className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Convenient Treatment</p>
                  <p className="text-sm text-gray-500">
                    Once-weekly injection for easy compliance
                  </p>
                </div>
              </div>
            </div> */}

            <div className="flex  gap-2 space-x-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-[10px]"
              >
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={fatwomanimage} // Replace with actual path
              alt="Healthy Woman"
              className="rounded-2xl shadow-lg w-full  object-cover"
            />

            <div className="absolute top-4 left-4 bg-white shadow-md px-4 py-2 rounded-lg">
              <p className="text-orange-500 font-bold text-lg">15%</p>
              <p className="text-xs text-gray-600">Average Weight Loss</p>
            </div>

            <div className="absolute bottom-4 right-4 bg-white shadow-md px-4 py-2 rounded-lg text-center">
              <p className="text-orange-500 font-bold">1x</p>
              <p className="text-xs text-gray-600">Weekly Dose</p>
            </div>
          </div>
        </div>
      </section>

      {/* healthier life */}

      {/* How Mounjaro works? */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-full">
        <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto ">
          <div className="max-w-7xl mx-auto md:px-6 px-0">
            <div className="!text-[24px] md:!text-[24px] !pt-[0px] mb-4 flex items-center justify-center">
              <h2 className=" max-w-2xl !text-center  md:text-4xl !font-[600] !text-[#ffffff]">
                How Mounjaro works?
              </h2>
              {/* <div className="w-24 h-1 bg-white mx-auto"></div> */}
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content Block */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <RiMedicineBottleLine className="text-white text-2xl " />
                  </div>
                  <p className="text-white mb-4">
                    Mounjaro is the first dual-action treatment of its kind,
                    offering a unique approach to weight management. It targets
                    both GIP and GLP-1 receptors in the body to reduce weight by
                    managing appetite and digestion.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <p className="text-white">
                      It is taken once a week using a pre-filled KwikPen
                      injection. Most treatment plans start with a low dose to
                      help your body adjust and minimise side effects like
                      nausea, diarrhoea, or mild stomach discomfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Block */}
              <div className="relative flex justify-center items-center">
                <img
                  className="w-[75%] rounded-[10px]"
                  src={wegovyImage}
                  alt="Wegovy Product"
                />
                <div className="absolute left-0 -bottom-6 md:-left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      GLP-1
                    </div>
                    <div className="text-sm text-gray-600">
                      Reduce Weight
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-md " />
                </div>
                <p className="text-white">
                  {" "}
                  For Adults Designed for adult patients with obesity
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarCheck className="text-white text-md " />
                </div>
                <p className="text-white">
                  Long-term Results Helps achieve sustainable weight loss
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {" "}
                  <MdHealthAndSafety className="text-white text-lg " />
                </div>
                <p className="text-white">
                  UK Available Prescription available in the UK
                </p>
              </div>
            </div> */}
          </div>{" "}
        </section>
      </div>
      {/* How Mounjaro works?*/}

      {/* Faqs Section */}
      <FaqsSection items={faqItems} />
      {/* Faqs Section  */}
    </>
  );
};
export default MounjaroCompare;
