import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx";
import FaqsSection from "../components/Faqs-Section.jsx";
import { useEffect, useState, useRef } from "react";
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
import howwegovywork from "../assets/wegovy compare/howdoeswegovywork.webp";
import wegovyuseguide from "../assets/wegovy compare/wegovyuseguide.webp";
const WegovyCompare = () => {
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
    {
      step: 7,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Administer the Injection",
      description:
        "Press and hold the injection button until you hear the first click. Keep holding the pen in place until you hear a second click, confirming the injection is complete (this usually takes about 10 seconds).",
    },
    {
      step: 8,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Dispose of the Pen Safely",
      description:
        "Remove the pen straight off the skin. Place it in a sharps disposal container as instructed.",
    },
    {
      step: 9,
      icon: <BiInjection className="text-white text-lg" />,
      title: "Check the Injection Site",
      description:
        "If necessary, gently press a cotton ball or gauze over the area. Avoid rubbing the site.",
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
      question: "How much does Wegovy cost in the UK?",
      answer:
        "The price of Wegovy in the UK varies depending on the pharmacy and dosage. However, The Care Pharmacy offers one of the most competitive prices, starting at £99.99. On Pharmacia, it starts at £199.99. You can compare Wegovy injection costs and find the best deals using Mango Compare.",
    },
    {
      question: "Is Wegovy available on the NHS in the UK?",
      answer:
        "Yes, Wegovy UK is approved for NHS prescriptions for certain patients with obesity or weight-related conditions. Availability may differ by region, and you’ll need an NHS assessment to qualify.",
    },
    {
      question: "How much is Wegovy per month privately?",
      answer:
        "Private Wegovy injection costs UK typically range between £150 and £300 monthly, depending on the dose and the pharmacy. Prices can be lower when you use Wegovy discount codes or special offers.",
    },
    {
      question: "Can I buy Wegovy legally online in the UK?",
      answer:
        "Yes, you can buy Wegovy online UK from GPhC-registered pharmacies. Always ensure you have a valid Wegovy prescription UK, as it is a prescription-only medication.",
    },
    {
      question: "Where can I buy Wegovy online in the UK?",
      answer:
        "You can order Wegovy through trusted online pharmacy UK platforms that are regulated by the GPhC. Mango Compare helps you find reputable providers and compare Wegovy prices easily.",
    },
    {
      question: "Does the NHS cover Wegovy for weight loss?",
      answer:
        "The NHS Wegovy price UK may be subsidised if you meet certain clinical criteria. Speak to your GP or specialist about eligibility and whether you qualify for an NHS prescription for weight loss.",
    },
    {
      question: "Is Wegovy available without a prescription in the UK?",
      answer:
        "No, you cannot buy Wegovy without prescription UK. It is illegal to purchase Wegovy without approval from a licensed prescriber in the UK.",
    },
    {
      question: "Are there any discounts or deals for Wegovy in the UK?",
      answer:
        "Yes, many online pharmacies UK offer Wegovy deals UK, including voucher codes and seasonal discounts. Comparing prices regularly helps you find the best value.",
    },
    {
      question: "What is the cheapest dose of Wegovy available?",
      answer:
        "The cheapest Wegovy dose is usually the 0.25 mg starter pen. This lower dose costs less per month, but your prescriber will recommend when to increase to higher strengths.",
    },
    {
      question: "Is Wegovy worth the price for weight loss?",
      answer:
        "Many patients find that Wegovy weight loss injection UK is worth the investment, as studies show up to 15% body weight reduction. Always consider your health goals and speak to a professional.",
    },
    {
      question: "How does Wegovy pricing vary by UK pharmacy?",
      answer:
        "Wegovy cost comparison shows significant differences between pharmacies. Prices can vary based on supply, dispensing fees, and whether you buy Wegovy privately or through the NHS.",
    },
    {
      question: "Can I get Wegovy through private healthcare in the UK?",
      answer:
        "Yes, many patients choose to get a Wegovy prescription UK through private clinics or online consultations. This allows faster access and flexibility in choosing your pharmacy.",
    },
    {
      question: "How long will a Wegovy pen last?",
      answer:
        "Each Wegovy pen provides one weekly dose, so it typically lasts for 7 days. You’ll need a new pen for each week of treatment as you progress through your dosing schedule.",
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
        heading="Wegovy Price Comparison UK - Find the Best Deals in One Place"
        text="Compare Wegovy injection cost in the UK with the most trusted platform available online. Start your weight loss journey and save hundreds on the treatment."
        text2="  By using Mango’s price comparison, you can save up to 28%—that’s £74
          per four-week supply by choosing the most affordable option. Over a
          year, this adds up to £888 in savings!"
        lowest={lowestPrice}
        totalPharmacy={totalPharmacy}
        percentage={"28"}
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
              totalPharmacy={totalPharmacy}
            />
          </div>
        )}
      </div>
      {/* price calculator */}

      {/* what is wegovy */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-full">
        <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto ">
          <div className="max-w-7xl mx-auto md:px-6 px-0">
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
                <p className="text-white"> Prescription-Only</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCalendarCheck className="text-white text-md " />
                </div>
                <p className="text-white">Weekly Injection</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {" "}
                  <MdHealthAndSafety className="text-white text-lg " />
                </div>
                <p className="text-white">Clinically Proven Weight Loss</p>
              </div>
            </div>
          </div>{" "}
        </section>
      </div>
      {/* what is wegovy */}

      {/* How Does Wegovy Work? */}
      <section className="w-full bg-gray-50">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="max-w-7xl mx-auto md:px-6 px-0">
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
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    Targets the GLP-1 Receptors:
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    When you inject Wegovy, Semaglutide activates GLP-1
                    receptors in the brain. It directly targets the areas of the
                    brain responsible for hunger control, such as the
                    hypothalamus and brainstem.
                  </p>
                  <div className="bg-orange-50 rounded-xl p-6">
                    <p className="text-xl font-semibold text-gray-900 mb-3">
                      Gradual Dose Increase
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The dose is increased every 4 weeks after consultation
                      with a healthcare provider to help your body adjust and
                      reduce side effects. It starts at 0.25 mg and gradually
                      increases to 0.5 mg, 1 mg, 1.7 mg, and finally 2.4 mg. It
                      is the maintenance dose that should be sustained until the
                      end of the treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <img
                  src={howwegovywork}
                  alt="How Wegovy Works"
                  className="w-full rounded-2xl shadow-lg object-cover h-96"
                />
                <div className="absolute -bottom-6 right-0 md:-right-6 bg-white rounded-xl p-6 shadow-lg">
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
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
        <div className="max-w-7xl mx-auto md:px-6 px-0 ">
          <div className="text-center mb-16">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              How to Know if I am Eligible for Wegovy?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              If you’re considering Wegovy for weight loss, it’s important to
              understand who can use it and how to get started. In the UK,
              healthcare providers prescribe Wegovy based on your BMI and any
              related health conditions. Here’s what you need to know before
              beginning treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-full flex gap-3 items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <RiUserHeartLine className="text-2xl text-white" />
                </div>
                <h3 className=" mb-6 !text-2xl !font-[600]">
                  Wegovy Eligibility Criteria
                </h3>
              </div>

              <p className="!text-xl !font-[500] text-gray-900 mb-6">
                You are eligible for Wegovy if you have:
              </p>

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
                    <ul className="space-y-2 text-gray-700 !list-none !ml-0 !pl-0">
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
              <div className="">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional healthcare consultation scene with doctor and patient discussing treatment options in modern medical office, friendly healthcare provider explaining medication, medical consultation photography&width=500&height=300&seq=consultation1&orientation=landscape"
                  alt="Healthcare Consultation"
                  className="w-full rounded-xl object-cover h-48"
                />
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="w-full flex gap-3 items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <FaStethoscope className="text-2xl text-white" />
                </div>
                <h3 className=" mb-6 !text-2xl !font-[600]">
                  How Medical Consultation Can Help?
                </h3>
              </div>

              <p className="!text-xl !font-[500] text-gray-900 mb-6">
                Consultation with a qualified healthcare provider is important,
                as they:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Review your medical history",
                  "Discuss whether Wegovy is suitable for you",
                  "Inform you about potential side effects",
                  "Determine eligibility and provide prescription",
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

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-600 text-sm mb-4">
                  If you are unsure about your BMI, the Mango Compare BMI
                  calculator can help you see if you meet the basic criteria.
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
        </div>
      </section>
      {/* Eligible */}
      {/* benifit */}
      <section className="w-full bg-gray-50 ">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="text-center mb-12">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600] text-[#ffffff] mb-4 text-center">
              What are the benefits of Wegovy?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              Wegovy has been shown to help many people lose a significant
              amount of weight. In clinical trials, patients using Wegovy
              injections lost an average of 15% of their body weight. Some of
              the well-known benefits of Wegovy are:
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
          Are there any Side Effects of Wegovy?
        </h2>
        <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
          There are some side effects of Wegovy, but they improve as your body
          adjusts to the medication. Always speak to your healthcare
          professional if you notice anything unusual or severe while using
          Wegovy.
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
                <span className="text-gray-900">Hair loss and dehydration</span>
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
      {/* image */}
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
        <div className="mt-8 flex justify-center">
          <img
            className="rounded-[10px] w-[50%]"
            src={wegovyuseguide}
            alt="wegovy guide sheet"
          />
        </div>
      </section>
      {/* image */}
      {/* steps */}
      <section className="w-full ">
        <div className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 text-center">
              How to Use Wegovy Safely?
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
              Wegovy is injected once a week into the stomach, thigh, or upper
              arm. Be sure to consult your GP or prescriber to confirm the right
              technique and injection site for you.
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
                    Here’s a general step-by-step guide to using Wegovy for the
                    first time:
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
            <p className="text-gray-500 mt-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
              Wegovy is injected once a week into the stomach, thigh, or upper
              arm. Be sure to consult your GP or prescriber to confirm the right
              technique and injection site for you.
            </p>
          </div>
        </div>
      </section>
      {/* steps */}
      {/* How to use */}
      {/* <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-8 xl:px-0 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 text-center">
            How to Use Wegovy Safely?
          </h2>
          <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto text-center">
            Wegovy is injected once a week into the stomach, thigh, or upper
            arm. Be sure to consult your GP or prescriber to confirm the right
            technique and injection site for you.
          </p>

 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className=" p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Recommended Injection Sites
              </h3>

              <div className="space-y-3">
             
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


            <div className=" p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Important Reminders
              </h3>

              <div className="space-y-3">
  
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
      </section> */}
      {/* how to use */}
      {/* healthier life */}
      <section className="max-w-[1280px] custom-width w-full py-[40px] md:py-[48px] px-4 md:px-0 xl:px-0 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 justify-between md:px-8 px-0 md:py-12 py-0  bg-white">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="!text-[24px] md:!text-[24px] !pt-[0px]  md:text-4xl !font-[600]  mb-4 ">
              Take the First Step <br /> Towards a Healthier You
            </h2>
            <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-5xl mx-auto">
              Don't let weight hold you back from living your best life. Wegovy is proven to help people lose weight up to 15% if taken properly with lifestyle changes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaShieldAlt className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Compare Prices from Trusted UK Pharmacies</p>
                  {/* <p className="text-sm text-gray-500">
                    FDA-approved for chronic weight management
                  </p> */}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaUserMd className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Stay on Track with Ongoing Support</p>
                  {/* <p className="text-sm text-gray-500">
                    Guidance from qualified healthcare providers
                  </p> */}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaSyringe className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold">Embrace a More Confident You</p>
                  {/* <p className="text-sm text-gray-500">
                    Once-weekly injection for easy compliance
                  </p> */}
                </div>
              </div>
            </div>

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
      {/* Faqs Section */}
      <FaqsSection items={faqItems} />
      {/* Faqs Section  */}
    </>
  );
};
export default WegovyCompare;
