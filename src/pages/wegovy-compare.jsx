import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import PriceCalculatorSkeleton from "./PriceCalculatorSkeleton";
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
const WegovyCompare = () => {
  const [lowestPrice, setLowestPrice] = useState("--");
  const [totalPharmacy, setTotalPharmacy] = useState("--");
  const steps = [
    {
      step: 1,
      icon: <FaHandsWash className="text-white text-lg" />,
      title: "Wash Your Hands",
      description:
        "Clean your hands thoroughly with soap and water before handling the pen.",
    },
    {
      step: 2,
      icon: <BiSearchAlt className="text-white text-lg" />,
      title: "Inspect the Pen",
      description:
        "Check that you have the correct dose. Make sure the pen is not damaged and that the expiration date has not passed.",
    },
    {
      step: 3,
      icon: <BiMapPin className="text-white text-lg" />,
      title: "Select the Injection Site",
      description:
        "Choose an area on your stomach (avoiding a 5-cm radius around your belly button), your thigh, or the back of your upper arm. Rotate sites each week to help prevent irritation.",
    },
    {
      step: 4,
      icon: <BiDroplet className="text-white text-lg" />,
      title: "Clean the Skin",
      description:
        "Use an alcohol swab to clean the injection area and allow it to dry completely.",
    },
    {
      step: 5,
      icon: <BiDroplet className="text-white text-lg" />,
      title: "Remove the Cap",
      description: "Pull off the pen cap. Do not touch the needle shield.",
    },
    {
      step: 6,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Position the Pen",
      description:
        "Place the pen firmly against your skin at a 90-degree angle.",
    },
  ];
  const benefitsData = [
    {
      icon: <AiOutlineHeart className="text-2xl" />,
      title: "Proven Weight Loss Results",
      description:
        "Clinical trials show patients lost up to 15% of their body weight on average",
    },
    {
      icon: <GiKnifeFork className="text-2xl" />,
      title: "Appetite Control",
      description: "Proven to reduce appetite and control cravings effectively",
    },
    {
      icon: <TbActivityHeartbeat className="text-2xl" />,
      title: "Cardiovascular Health",
      description:
        "Lowers the risk of heart attack, stroke, and cardiovascular diseases",
    },
    {
      icon: <BiHealth className="text-2xl" />,
      title: "Blood Sugar Control",
      description:
        "Improves blood sugar control in people with type 2 diabetes",
    },
    {
      icon: <TbChartLine className="text-2xl" />,
      title: "Better Health Markers",
      description: "Leads to better cholesterol and blood pressure levels",
    },
    {
      icon: <BsCalendarWeek className="text-2xl" />,
      title: "Convenient Dosing",
      description: "Taken once a week, making it convenient for most people",
    },
  ];

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
        "Swift Doctor offers Wegovy at £99. However, prices vary, and the cheapest option can change frequently. Mango does the work for you-compare prices now and save!",
    },
    {
      question: "How often do Wegovy prices change?",
      answer:
        "There’s no fixed schedule, but prices can fluctuate based on pharmacy promotions and market competition. Check Mango regularly to stay updated on the best deals!",
    },
  ];
  const availableDoasge = ["0.25 mg", "0.5 mg", "1 mg", "1.7 mg", "2.4 mg"];
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
        heading="Cut your Wegovy costs by up to 28% compare prices with Mango!"
        text="Wegovy, the weekly self-injection for weight loss, can cost anywhere from £109 to £269 in the UK."
        text2="  By using Mango’s price comparison, you can save up to 28%—that’s £74
          per four-week supply by choosing the most affordable option. Over a
          year, this adds up to £888 in savings!"
        lowest={lowestPrice}
        totalPharmacy={totalPharmacy}
        percentage={"28"}
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
              totalPharmacy={totalPharmacy}
            />
          </div>
        )}
      </div>
      {/* price calculator */}

      {/* what is wegovy */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-full">
        <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              What is Wegovy?
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
                    <strong>Prescription Weight Loss Treatment:</strong> Wegovy
                    is a prescription weight loss injection available in the UK,
                    used to help adults with obesity or weight-related health
                    conditions achieve long-term results.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <p className="text-white">
                      <strong>Active Ingredient: Semaglutide</strong> – This
                      works by mimicking GLP-1, a hormone that controls appetite
                      and helps you feel full sooner.
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
                    <div className="text-sm text-gray-600">Hormone Mimicry</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
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
            </div>
          </div>{" "}
        </section>
      </div>
      {/* what is wegovy */}

      {/* How Does Wegovy Work? */}
      <section className="w-full bg-gray-50">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
                How Does Wegovy Work?
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Natural Hormone Mimicry
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Semaglutide acts in the body like a natural hormone called
                    GLP-1. This hormone targets areas of the brain responsible
                    for regulating appetite. By helping you feel fuller more
                    quickly and reducing hunger, Wegovy promotes weight loss
                    when used alongside a balanced diet and increased physical
                    activity.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      Gradual Dose Increase
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      The dose is increased gradually over several weeks to help
                      your body adjust and reduce side effects, starting from
                      0.25 mg and rising up to the full maintenance dose of 2.4
                      mg once a week.
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
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      2.4mg
                    </div>
                    <div className="text-sm text-gray-600">
                      Weekly Maintenance Dose
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Does Wegovy Work? */}
      {/* Eligible */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              How to Know if I am Eligible for Wegovy?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              If you're considering Wegovy for weight loss, it's important to
              understand who can use it and how to get started. In the UK,
              healthcare providers prescribe Wegovy based on your BMI and any
              related health conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <RiUserHeartLine className="text-2xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                You are eligible for Wegovy if you have:
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    BMI of 30 or more
                  </h4>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      BMI of 27 or more along with weight-related health
                      conditions, such as:
                    </h4>
                    <ul className="space-y-2 text-gray-700 !list-none !mr-0 !pr-0">
                      <li className="!flex !items-center !space-x-2">
                        <BsArrowRight className="text-orange-600" />
                        <span>Type 2 diabetes</span>
                      </li>
                      <li className="!flex !items-center !space-x-2">
                        <BsArrowRight className="text-orange-600" />
                        <span>High cholesterol</span>
                      </li>
                      <li className="!flex !items-center !space-x-2">
                        <BsArrowRight className="text-orange-600" />
                        <span>High blood pressure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 text-sm mb-4">
                  If you are unsure about your BMI, the Mango Compare BMI
                  calculator can help you see if you meet the basic criteria.
                </p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
                  Calculate BMI
                </button>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <FaStethoscope className="text-2xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Consultation with Healthcare Provider
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Consultation with a qualified healthcare provider is important,
                as they:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Review your medical history",
                  "Discuss whether Wegovy is suitable for you",
                  "Inform you about potential side effects",
                  "Provide you a prescription if appropriate",
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

              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional healthcare consultation scene with doctor and patient discussing treatment options in modern medical office, friendly healthcare provider explaining medication, medical consultation photography&width=500&height=300&seq=consultation1&orientation=landscape"
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
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What are the Benefits of Wegovy?
            </h2>
            <p className="text-lg text-gray-700">
              Wegovy has been shown to help many people lose a significant
              amount of weight. In clinical trials, patients using Wegovy
              injections lost up to 15% of their body weight on average.
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
      <div className="px-4 md:px-10 py-10 bg-white">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
          Are there any Side Effects of Wegovy?
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          There are some side effects of Wegovy that improve as your body gets
          used to the medication. Always speak to your healthcare professional
          if you notice anything unusual or severe while using Wegovy.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Common Side Effects */}
          <div className="bg-orange-50 p-6 rounded-[20px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                <FaInfoCircle size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Common Side Effects
              </h2>
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
                <span className="text-gray-900">Vomiting</span>
              </div>
            </div>
          </div>

          {/* Severe Side Effects */}
          <div className="bg-red-50 p-6 rounded-[20px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <AiOutlineWarning size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Severe or Rare Side Effects
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <AiOutlineWarning className="text-red-600" />
                <span className="text-gray-900">Pancreatitis</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <AiFillHeart className="text-red-600" />
                <span className="text-gray-900">Gallbladder problems</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <MdReportProblem className="text-red-600" />
                <span className="text-gray-900">Severe allergic reactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side effect */}
      {/* steps */}
      <section className="bg-white w-full py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How to Use Wegovy Safely?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Wegovy is injected once a week into the stomach, thigh, or upper
            arm. Be sure to consult your GP or prescriber to confirm the right
            technique and injection site for you.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center text-orange-500 mr-3">
                <FiMusic />
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Step-by-Step Injection Guide
                </h3>
                <p className="text-sm text-gray-600">
                  Follow these steps for safe and effective administration
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map(({ step, icon, title, description }) => (
                <div
                  key={step}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-2">
                      {step}
                    </div>
                    <div className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                      {icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-md mb-1">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* steps */}
      {/* How to use */}
      <section className="bg-white w-full py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How to Use Wegovy Safely?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Wegovy is injected once a week into the stomach, thigh, or upper
            arm. Be sure to consult your GP or prescriber to confirm the right
            technique and injection site for you.
          </p>

          {/* TWO COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Injection Sites */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Recommended Injection Sites
              </h3>

              <div className="space-y-3">
                {/* Stomach */}
                <div className="bg-orange-50 flex items-center p-4 rounded-lg">
                  <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <BiSolidInjection size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Stomach Area</p>
                    <p className="text-sm text-gray-600">
                      Avoid 5cm radius around belly button
                    </p>
                  </div>
                </div>

                {/* Thigh */}
                <div className="bg-orange-50 flex items-center p-4 rounded-lg">
                  <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <BiMap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Thigh</p>
                    <p className="text-sm text-gray-600">
                      Front or side of thigh
                    </p>
                  </div>
                </div>

                {/* Upper Arm */}
                <div className="bg-orange-50 flex items-center p-4 rounded-lg">
                  <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <BiUser size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Upper Arm</p>
                    <p className="text-sm text-gray-600">Back of upper arm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Important Reminders */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Important Reminders
              </h3>

              <div className="space-y-3">
                {/* Weekly Schedule */}
                <div className="flex items-start">
                  <div className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <FiClock size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Weekly Schedule
                    </p>
                    <p className="text-sm text-gray-600">
                      Inject once a week on the same day
                    </p>
                  </div>
                </div>

                {/* Rotate Sites */}
                <div className="flex items-start">
                  <div className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <FiRepeat size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Rotate Sites</p>
                    <p className="text-sm text-gray-600">
                      Change injection location each week
                    </p>
                  </div>
                </div>

                {/* Storage */}
                <div className="flex items-start">
                  <div className="bg-orange-100 text-orange-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <FiBox size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Storage</p>
                    <p className="text-sm text-gray-600">
                      Keep refrigerated until use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how to use */}
      {/* healthier life */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-12 bg-white">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold leading-snug text-gray-900">
            Take the First Step <br /> Towards a Healthier You
          </h1>
          <p className="text-gray-600">
            Don't let weight hold you back from living your best life. Wegovy
            has helped thousands achieve sustainable weight loss results with
            the support of healthcare professionals.
          </p>

          <div className="space-y-4">
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
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full">
              Start Your Journey
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-full text-gray-700 font-semibold">
              Speak to Expert
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="/31717984-3df3-4a0a-8d95-61054f9c5345.png" // Replace with actual path
            alt="Healthy Woman"
            className="rounded-2xl shadow-lg"
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
      {/* healthier life */}
      {/* Faqs Section */}
      <FaqsSection items={faqItems} />
      {/* Faqs Section  */}
    </>
  );
};
export default WegovyCompare;
