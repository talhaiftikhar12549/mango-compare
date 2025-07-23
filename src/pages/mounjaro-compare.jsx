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
import mounjarouseguide from "../assets/mounjaro compare/mounjarouseguide.webp";
import mounjarowork from "../assets/mounjaro compare/mounjarowork.webp";
import mounjaroInjection from "../assets/mounjaro compare/mounjaroInjection.jpg";
import mounjarocompareprice from "../assets/mounjaro compare/mounjarocompareprice.jpg";
import healthyman from "../assets/mounjaro compare/healthyman.jpg";
import runningwoman from "../assets/mounjaro compare/ladyrunning.webp";
const MounjaroCompare = () => {
  const [lowestPrice, setLowestPrice] = useState("--");
  const [totalPharmacy, setTotalPharmacy] = useState("--");
  const navigate = useNavigate();

  const goToContactSection = () => {
    navigate("/#bmicalculator");
  };
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
        "Clean your hands thoroughly with soap and water before handling the pen.",
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
      answer:
        "The cheapest Mounjaro prices in the UK can vary by pharmacy and dose. Use Mango Compare to find real-time offers from trusted GPhC-registered pharmacies and see which provider has the lowest cost today.",
    },
    {
      question: "How do I use Mango Compare to compare Mounjaro prices?",
      answer:
        "Simply enter your preferred dose and set price filters on Mango Compare to view and filter Mounjaro price lists. You can sort offers, check delivery times, and see verified discounts in one place.",
    },
    {
      question: "Are online prescriptions for Mounjaro legal and safe?",
      answer:
        "Yes, online prescriptions are legal in the UK when issued by a licensed prescriber. Always buy Mounjaro from GPhC-regulated pharmacies to ensure safety and genuine medication.",
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
        "Treatment starts with a 2.5 mg weekly dose to help your body adjust. Your prescriber may gradually increase the dose up to 15 mg to support your weight loss goals.",
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
        "Many GPhC-registered pharmacies listed on Mango Compare offer repeat prescriptions and maintenance plans to help you stay on track with treatment.",
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
      description:
        "Clinically proven to help lose over 22.5% of initial weight over a short period.",
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
      title: "Reduces Risk of Weight-Related Conditions",
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
                    <strong>Trusted Weight Loss Comparison: </strong>
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
                  src={mounjaroInjection}
                  alt="Mounjaro Product"
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
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    The Challenge to Find Legitimate Providers
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As demand for Mounjaro grows rapidly, finding the best deals
                    among so many pharmacies can be challenging. It’s also
                    increasingly difficult to identify legitimate providers,
                    with reports of counterfeit Mounjaro being sold both online
                    and in local shops.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <p className="text-xl font-semibold text-gray-900 mb-3">
                      Mango Compares Bridges the Gap for You
                    </p>
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
                  src={mounjarocompareprice}
                  alt="How Mounjaro Works"
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
              avoid purchasing from it.
            </p>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              To make verification easier, the GPhC provides a publicly
              accessible registry where you can check whether a pharmacy is
              properly registered.
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
              src={healthyman} // Replace with actual path
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
                    <strong>GIP and GLP-1 Treatment: </strong>
                    Mounjaro is the first dual-action treatment of its kind,
                    offering a unique approach to weight management. It targets
                    both GIP and GLP-1 receptors in the body to reduce weight by
                    managing appetite and digestion.
                  </p>
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <p className="text-white">
                      <strong>Dosage: </strong>
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
                  src={mounjarowork}
                  alt="Wegovy Product"
                />
                <div className="absolute left-0 -bottom-6 md:-left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      GLP-1
                    </div>
                    <div className="text-sm text-gray-600">Reduce Weight</div>
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
      {/* benifit */}
      <section className="w-full bg-gray-50 ">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="text-center mb-12">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              What are the Benefits of Mounjaro?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              Mounjaro provides a more comprehensive approach than treatments
              that target only one hormone. In clinical studies, many patients
              achieved up to 20% reduction in total body weight, which is higher
              than what is normally seen with other treatments.Some of the
              benefits of using Mounjaro are:
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
      {/* Eligible */}
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
        <div className="max-w-7xl mx-auto md:px-6 px-0 ">
          <div className="text-center mb-16">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              How to know if I am eligible for Mounjaro?
            </h2>
            {/* <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              If you're considering Wegovy for weight loss, it's important to
              understand who can use it and how to get started. In the UK,
              healthcare providers prescribe Wegovy based on your BMI and any
              related health conditions.
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <RiUserHeartLine className="text-2xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                In the UK, you are eligible for Mounjaro you have:
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

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 text-sm mb-4">
                  To help you get started, the Mango Compare BMI calculator can
                  quickly show your BMI and help you understand whether you meet
                  the basic criteria for treatment. Simply enter your height and
                  weight to calculate your BMI.
                </p>
                <button
                  onClick={goToContactSection}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Calculate BMI
                </button>
              </div>
            </div>

            {/* Consultation Card */}
            {/* <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
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
            </div> */}
            <div className=" rounded-2xl px-8">
              <img
                className="w-[100%] rounded-[10px]"
                src={runningwoman}
                alt="woman running"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Eligible */}
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
                <span className="text-gray-900">Vomiting</span>
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
              <h3 className="!text-xl">Severe or Rare Side Effects</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <AiOutlineWarning className="text-red-600" />
                <span className="text-gray-900">
                  Pancreatitis (inflammation of the pancreas)
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <MdReportProblem className="text-red-600" />
                <span className="text-gray-900">Severe allergic reactions</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border-l-4 border-red-500 shadow">
                <AiFillHeart className="text-red-600" />
                <span className="text-gray-900">Gallbladder problems</span>
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
      {/* image section */}
      <section className="max-w-[1280px] custom-width w-full px-4 md:px-8 xl:px-0 mx-auto">
        <div className="mt-8 flex justify-center">
          <img
            className="rounded-[10px] w-[50%]"
            src={mounjarouseguide}
            alt="Mounjaro guide sheet"
          />
        </div>
      </section>
      {/* image section */}
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

            <div
              className=" rounded-xl p-6 md:p-10 shadow-md bg-white
            "
            >
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
        </div>
      </section>
      {/* steps */}
      {/* Faqs Section */}
      <FaqsSection items={faqItems} />
      {/* Faqs Section  */}
    </>
  );
};
export default MounjaroCompare;
