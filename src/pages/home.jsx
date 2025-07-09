import Herohome from "../components/Home-Hero.jsx";
import DosagePlan from "../components/Dosage-Plan.jsx";
import PharmacyPartner from "../components/Pharmacy-Partner.jsx";
import HomeOurBlog from "../components/Home-Our-Blog.jsx";
import HowItWork from "../components/How-It-Work.jsx";
import WhyChooseMango from "../components/Why-Choose-Mango.jsx";
import SafetyAndEligibility from "../components/Safety-And-Eligibility.jsx";
import StartYourJourney from "../components/Start-Your-Journey.jsx";
import HomeFaqs from "../components/Home-Faqs.jsx";
import { Helmet } from "react-helmet";
import BMICalculator from "../components/BMICalculator.jsx";

export const Home = () => {
  return (
    <>
      <Helmet>
        {/* Meta Title */}
        <title>Weight Loss Treatment Price Comparison UK</title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Find the best prices for prescription weight loss treatments in the UK. Our free platform helps you compare trusted options like Mounjaro and Wegovy, making weight loss affordable for everyone."
        />
        {/* Focused Keyphrase (as keyword) */}
        <meta
          name="keywords"
          content="Weight Loss Treatment UK, Price Comparison for Weight Loss Treatments, Compare Weight Loss Injections UK, Best Weight Loss Treatment Prices UK, Affordable Weight Loss Medication UK"
        />

        <link rel="canonical" href="https://mangocompare.co.uk/" />
      </Helmet>
      {/* Home Hero */}
      <Herohome />
      {/* Home Hero */}

      {/* why choose mango */}
      <WhyChooseMango />
      {/* why choose mango */}

      {/* Home Dosage Plan */}
      <DosagePlan />
      {/* Home Dosage Plan */}

      {/* How it work */}
      <HowItWork />
      {/* How it work */}

      {/* Home Dosage Plan */}
      <PharmacyPartner />
      {/* Home Dosage Plan */}

      {/* Safety & Eligibility */}
      <SafetyAndEligibility />
      {/* Safety & Eligibility */}

      {/* BMI Calculator */}
      <BMICalculator />
      {/* BMI Calculator */}
      
      {/* Home Our Blog */}
      <HomeOurBlog />
      {/* Home Our Blog */}

      {/* Home Faqs */}
      <HomeFaqs />
      {/* Home Faqs */}

      {/* start your journey */}
      <StartYourJourney />
      {/* start your journey */}
    </>
  );
};
