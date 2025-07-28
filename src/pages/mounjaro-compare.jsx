import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState, useRef } from "react";
import api from "../services/api.js";
import PriceCalculatorSkeleton from "./PriceCalculatorSkeleton";

// import wegovyImage from "../assets/images/wegovy.png";

import { FaCheck, FaStethoscope } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { BsCalendarWeek } from "react-icons/bs";
import { BiHealth } from "react-icons/bi";
import { TbActivityHeartbeat, TbChartLine } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import mounjarocompareprice from "../assets/mounjaro compare/mounaro Dosage.webp";
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
import { FaShieldAlt, FaUserMd, FaSyringe } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import fatwomanimage from "../assets/mounjaro compare/woman.webp";
import mounjarouseUsage from "../assets/mounjaro compare/Mounjaro Usage.webp";
import mounjaroInjection from "../assets/mounjaro compare/mounjaroInjection.webp";
import consultingDoctor from "../assets/mounjaro compare/consulting doctor.webp";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
const MounjaroCompare = () => {
  const [lowestPrice, setLowestPrice] = useState("--");
  const [totalPharmacy, setTotalPharmacy] = useState("--");
  const navigate = useNavigate();

  const goToContactSection = () => {
    navigate("/#bmicalculator");
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const steps = [
    {
      step: 1,
      icon: <FaHandsWash className="text-white text-lg" />,
      title: "Wash Your Hands",
      description:
        "Before handling the pen, wash your hands thoroughly with soap and water.",
    },
    {
      step: 2,
      icon: <BiSearchAlt className="text-white text-lg" />,
      title: "Check the Pen",
      description:
        "Make sure you have the correct dose and that the pen has not expired or been damaged.",
    },
    {
      step: 3,
      icon: <BiMapPin className="text-white text-lg" />,
      title: "Choose the Injection Site",
      description:
        "Pick an area on your stomach (at least 2 inches away from your belly button), your thigh, or the back of your upper arm. Rotate sites with each injection to avoid irritation.",
    },
    {
      step: 4,
      icon: <BiDroplet className="text-white text-lg" />,
      title: "Prepare the Skin",
      description:
        "Clean the area with an alcohol swab and let it dry completely.",
    },
    {
      step: 5,
      icon: <BiDroplet className="text-white text-lg" />,
      title: "Remove the Cap",
      description:
        "Take off the pen cap and follow the instructions provided with your pen to unlock it if needed.",
    },
    {
      step: 6,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Position the Pen",
      description:
        "Place the pen firmly against your skin at a 90-degree angle",
    },
    {
      step: 7,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Inject the Dose",
      description:
        "Press and hold the injection button until you hear a click, then continue holding it in place for about 10 seconds to ensure the full dose is delivered.",
    },
    {
      step: 8,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Remove and Dispose of the Pen",
      description:
        "Lift the pen straight off the skin. Safely dispose of it in a sharps container as recommended.",
    },
    {
      step: 9,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Check the Area",
      description:
        "If needed, gently press a cotton ball or gauze over the site. Do not rub the area.",
    },
  ];
  const faqItems = [
    {
      question: "What’s the cheapest place to buy Mounjaro in the UK?",
      answer: (
        <>
          Starting doses are usually the most affordable, but prices vary
          between pharmacies. For example, Pharmaesthetics Central starts at
          {"  "}
          <a
            className="text-orange-500"
            href="https://pharmaestheticscentral.com/product/mounjaro-injectable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            £104.99
          </a>{" "}
          Phlo Clinic from{" "}
          <a
            className="text-orange-500"
            href="https://phloclinic.co.uk/weight-loss-service/mounjaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            £109
          </a>{" "}
          , Medino at{" "}
          <a
            className="text-orange-500"
            href="https://www.medino.com/product/weight-loss-treatment-mounjaro-2-5mg-step-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            £114.99
          </a>{" "}
          , and The Care Pharmacy at £119.99. Use Mango Compare to view
          real-time offers from trusted GPhC-registered pharmacies and find the
          lowest price available today.
        </>
      ),
    },
    {
      question: "How do I use Mango Compare to compare Mounjaro prices?",
      answer:
        "Simply enter your preferred dose and set price filters on Mango Compare to view and filter Mounjaro price lists. You can sort offers, check delivery times, and see verified discounts in one place.",
    },
    {
      question: "Are online prescriptions for Mounjaro legal and safe?",
      answer:
        "Yes, online prescriptions are legal in the UK when issued by a licensed prescriber. Always buy Mounjaro from GPhC-regulated pharmacies to ensure safety and genuine medication. Make sure you undergo a full assessment by your clinician before receiving a Mounjaro prescription.",
    },
    {
      question: "How much can I save using discount codes on Mango Compare?",
      answer:
        "Discount codes on Mango Compare can help you save big on Mounjaro KwikPen prices. Check regularly for exclusive voucher codes and seasonal offers.",
    },
    {
      question: "Do all pharmacies sell the same Mounjaro brand (Eli Lilly)?",
      answer:
        "Yes, Mounjaro is manufactured by Eli Lilly and is sold in the UK as the same approved product. Only the pharmacy service, price, and delivery options differ.",
    },
    {
      question: "How does Mounjaro dosing work (2.5 mg to 15 mg)?",
      answer:
        "Treatment begins with a weekly dose of 2.5 mg to help your body adjust. The dose is typically increased every 4 weeks, based on how you respond and how well you tolerate the medication. Your prescriber will determine the right maintenance dose, which can go up to 15 mg, following regular medical assessments.",
    },
    {
      question: "What side effects should I expect with Mounjaro?",
      answer:
        "Common side effects include nausea, diarrhoea, constipation, and decreased appetite. These often improve over time, but always speak to your prescriber if symptoms persist.",
    },
    {
      question:
        "Can I get maintenance support from pharmacies on Mango Compare?",
      answer:
        "Many pharmacies listed on Mango Compare offer maintenance plans to help you stay on track with your treatment. However, consultation costs can vary between providers and may be charged separately from the medication. Make sure to check consultation fees before placing your order to avoid unexpected costs.",
    },
    {
      question: "Is local pharmacy purchase better than online?",
      answer:
        "Both options are safe if you choose GPhC-registered providers. Online pharmacies often offer cheaper Mounjaro pricing and discreet delivery, while local chemists provide in-person advice.",
    },
    {
      question: "How do I spot fake Mounjaro pens?",
      answer:
        "Always buy from licensed UK pharmacies and check the packaging for Eli Lilly branding, batch numbers, and tamper seals. Avoid unverified sellers or unusually low prices.",
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
  const benefitsData = [
    {
      icon: <AiOutlineHeart className="text-2xl" />,
      title: "Rapid weight loss",
      description: (
        <>
          <a
            className="text-orange-500"
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clinical proven
          </a>{" "}
          to help lose over 22.5% of initial weight over 72 weeks.
        </>
      ),
    },
    {
      icon: <GiKnifeFork className="text-2xl" />,
      title: "Satisfaction with smaller meals",
      description:
        "As you continue using the medication, your body adjusts to smaller meals.",
    },
    {
      icon: <TbActivityHeartbeat className="text-2xl" />,
      title: "Regulates blood-sugar levels",
      description:
        "Helps improve glucose control, especially for people with type 2 diabetes.",
    },
    {
      icon: <BiHealth className="text-2xl" />,
      title: "Promotes lifestyle changes",
      description:
        "Mounjaro is most effective when lifestyle changes are incorporated as the treatment continues.",
    },
    {
      icon: <TbChartLine className="text-2xl" />,
      title: "Convenient for busy people",
      description:
        "It is administered once a week, making it an ideal option for people with a busy schedule",
    },
    {
      icon: <BsCalendarWeek className="text-2xl" />,
      title: "Reduces the risk of weight-related conditions",
      description:
        "Lowers the chances of heart disease, high blood pressure, and other complications.",
    },
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

        // Sort alphabetically by ratting
        const apiDta = data.slice().sort((a, b) => b.rating - a.rating);

        setApiDataM(apiDta);
        console.log(apiDta);
      } catch (error) {
        console.log("Failed to fetch listings", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      {/* meta tag */}
      <Helmet>
        {/* Meta Title */}
        <title>Compare Mounjaro Prices UK – Find Trusted Pharmacy Deals</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Compare Mounjaro prices in the UK from trusted GPhC-registered pharmacies. Discover daily deals, save money, and start your weight loss journey today."
        />

        {/* Meta Keywords (Focused Keyphrases) */}
        <meta name="keywords" content="Mounjaro price comparison UK" />

        {/* Custom Meta Tags */}
        <meta
          name="category"
          content="weight loss treatments, prescription medication"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://mangocompare.co.uk/mounjaro-compare"
        />
      </Helmet>

      {/* meta tags */}
      <HeroSection
        heading="Mounjaro Price Comparison UK – Find Trusted Providers Instantly"
        text="Compare real-time prices from GPhC-registered pharmacies and find exclusive discounts.
Set your filters, view offers, and get your Mounjaro KwikPens delivered."
        lowest={lowestPrice}
        totalPharmacy={totalPharmacy}
        percentage={"22.5"}
      />

      {/* price calculator */}
      {/* <div
        ref={contactRef}
        id="pricecalculatorwegovy"
        className="w-full overflow-x-auto"
      > */}
      <div ref={contactRef} id="pricecalculatorwegovy" className="w-full">
        {loading ? (
          <PriceCalculatorSkeleton />
        ) : (
          <div className="">
            {/* <div className="min-w-[1024px]"> */}
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
                What is Mounjaro?
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
                    <strong>Prescription Weight Loss Treatment </strong>
                    Mounjaro is a weekly, prescription-only weight loss
                    injection that’s gaining popularity in the UK and globally
                    for rapid weight loss results. It helps achieve long-term
                    weight loss when combined with healthy lifestyle changes.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <p className="text-white">
                      <strong>Active Ingredient </strong>
                      The active ingredient is Tirzepatide, which works by
                      regulating appetite and blood sugar levels, helping you
                      feel full sooner and eat less.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image Block */}
              <div className="relative flex justify-center items-center">
                <img
                  className="w-[75%] rounded-[10px]"
                  src={mounjaroInjection}
                  alt="Mounjaro Product"
                />
                <div className="absolute left-0 -bottom-6 md:-left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      Mounjaro
                    </div>
                    <div className="text-sm text-gray-600">KwikPen</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-md " />
                </div>
                <p className="text-white"> Prescription-Only Treatment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarCheck className="text-white text-md " />
                </div>
                <p className="text-white">Once-Weekly Injection</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {" "}
                  <MdHealthAndSafety className="text-white text-lg " />
                </div>
                <p className="text-white">Dual-Receptor Action</p>
              </div>
            </div>
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
                How Mounjaro works?
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
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    GIP and GLP-1 Treatment:
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Mounjaro is the first dual-action treatment of its kind,
                    offering a unique approach to weight management. It targets
                    both GIP and GLP-1 receptors in the body to reduce weight by
                    managing appetite and digestion.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <p className="text-xl font-semibold text-gray-900 mb-3">
                      Dosage:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      It is taken once a week using a pre-filled KwikPen
                      injection. Most treatment plans start with a low dose to
                      help your body adjust and minimise side effects like
                      nausea, diarrhoea, or mild stomach discomfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src={mounjarocompareprice}
                  alt="How Mounjaro Works"
                  className="w-full rounded-2xl shadow-lg object-cover h-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Does Wegovy Work? */}

      {/* Eligible */}
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
        <div className="max-w-7xl mx-auto md:px-6 px-0 ">
          <div className="text-center mb-16">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              How to know if I am eligible for Mounjaro?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              Whether you're new to weight loss injections or considering
              switching to Mounjaro, it’s important to check your eligibility
              first to avoid complications later on.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 flex flex-col">
              <div className="w-full flex gap-3 items-center">
                <div className="w-16 aspect-square bg-orange-600 rounded-full flex items-center justify-center shrink-0 mb-6">
                  <RiUserHeartLine className="text-2xl text-white" />
                </div>
                <h3 className="mb-6 !text-xl md:!text-2xl !font-[600]">
                  Mounjaro Eligibility Criteria:
                </h3>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                In the UK, you are eligible for Mounjaro if you have:
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    A BMI of 30 or above, or
                  </h4>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      A BMI over 27 with at least one weight-related medical
                      condition.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="h-[100%] flex items-end">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 text-sm mb-4">
                    To help you get started, the Mango Compare BMI calculator
                    can quickly show your BMI and help you understand whether
                    you meet the basic criteria for treatment. Simply enter your
                    height and weight to calculate your BMI.
                  </p>
                  <button
                    onClick={goToContactSection}
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Calculate BMI
                  </button>
                </div>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-full flex gap-3 items-center">
                <div className="w-16 aspect-square bg-orange-600 rounded-full flex items-center justify-center shrink-0 mb-6">
                  <FaStethoscope className="text-2xl text-white" />
                </div>
                <h3 className="mb-6 !text-xl md:!text-2xl !font-[600]">
                  Why consult with a healthcare provider?
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Before starting Mounjaro, a proper health review helps ensure
                safe and effective treatment. During your consultation, a
                prescriber will:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Check BMI and health conditions",
                  "Compare with other treatment options",
                  "Screen for medication conflicts",
                  "Set up your dose plan",
                  "Monitor side effects and progress",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={consultingDoctor}
                  alt="Healthcare Consultation"
                  className="w-full rounded-xl object-cover h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Eligible */}

      {/* benifit */}
      <section className="w-full bg-gray-50 ">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="text-center mb-12">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              What are the benefits of Mounjaro?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              Mounjaro provides a more comprehensive approach than treatments
              that target only GLP-1 receptors in the body. It is a dual-action
              medication that helps achieve greater weight loss when combined
              with lifestyle changes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-[#F26D3D] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* benifit */}

      {/* side effect */}
      <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
        <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 text-center">
          Are there any side effects of Mounjaro?
        </h2>
        <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
          Mounjaro can cause some side effects, but most of these are mild and
          tend to improve over time as your body adjusts.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Common Side Effects */}
          <div className="bg-orange-50 p-6 rounded-[20px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                <FaInfoCircle size={20} />
              </div>
              <h3 className="!text-xl">Common Side Effects</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <FaSkullCrossbones className="text-orange-600" />
                <span className="text-gray-900">Nausea</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <FaRunning className="text-orange-600" />
                <span className="text-gray-900">Diarrhoea</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <FaSadTear className="text-orange-600" />
                <span className="text-gray-900">Hearburn</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <FaSadTear className="text-orange-600" />
                <span className="text-gray-900">Constipation</span>
              </div>
            </div>
          </div>

          {/* Severe Side Effects */}
          <div className="bg-red-50 p-6 rounded-[20px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <AiOutlineWarning size={20} />
              </div>
              <h3 className="!text-xl">Rare Side Effects</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <AiOutlineWarning className="text-red-600" />
                <span className="text-gray-900">Pancreatitis</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <MdReportProblem className="text-red-600" />
                <span className="text-gray-900">Severe allergic reactions</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <AiFillHeart className="text-red-600" />
                <span className="text-gray-900">Gallbladder issues</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <MdReportProblem className="text-red-600" />
                <span className="text-gray-900">Hypoglycemia</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-500 mt-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
          If you notice any unusual or severe symptoms, contact your healthcare
          professional right away.
        </p>
      </div>
      {/* side effect */}

      {/* steps */}
      <section className="w-full ">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 text-center">
              How to use Mounjaro for the first time?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
              Mounjaro is usually injected once a week in the stomach, thighs,
              or the upper thigh area. It is always best to consult your GP or
              prescriber to choose your injection site. Here’s a general
              breakdown of how to use Mounjaro for the first time:
            </p>
            <div className="mt-8 flex justify-center">
              <img
                className="rounded-[10px] w-[100%]"
                src={mounjarouseUsage}
                alt="Mounjaro guide sheet"
              />
            </div>
          </div>
        </div>
      </section>
      {/* steps */}

      {/* healthier life */}
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-0 xl:px-0 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 justify-between md:px-8 px-0 md:py-12 py-0  bg-white">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 ">
              Ready to start your weight loss journey with Mango Compare?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              Take control of your health and feel the difference. In{" "}
              <a
                className="text-orange-500"
                href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
                target="_blank"
                rel="noopener noreferrer"
              >
                clinical studies
              </a>{" "}
              , Mounjaro has shown up to 22.5% weight loss when paired with
              lifestyle improvements.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaShieldAlt className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Compare Prices</p>
                  <p className="text-sm text-gray-500">
                    Mango Compare helps you find the best deals on Mounjaro in
                    the UK
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaUserMd className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Stay Consistent</p>
                  <p className="text-sm text-gray-500">
                    Find credible pharmacies that provide ongoing support
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaSyringe className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Achieve Health Goals</p>
                  <p className="text-sm text-gray-500">
                    Embracing a more confident version of yourself has never
                    been easier
                  </p>
                </div>
              </div>
            </div>

            <div className="flex  gap-2 space-x-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-[10px]"
              >
                Start Comparing Today.
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={fatwomanimage}
              alt="Healthy Woman"
              className="rounded-2xl shadow-lg w-full  object-cover"
            />

            <div className="absolute top-4 left-4 bg-white shadow-md px-4 py-2 rounded-lg">
              <p className="text-orange-500 font-bold text-lg">22.5%</p>
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

      {/* Faqs Section */}
      <FaqsSection items={faqItems} />
      {/* Faqs Section  */}
    </>
  );
};
export default MounjaroCompare;
