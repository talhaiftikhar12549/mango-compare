import Herohome from "../components/Home-Hero.jsx";
import DosagePlan from "../components/Dosage-Plan.jsx";
import PharmacyPartner from "../components/Pharmacy-Partner.jsx";
import HomeOurBlog from "../components/Home-Our-Blog.jsx";
import HowItWork from "../components/How-It-Work.jsx";
import WhyChooseMango from "../components/Why-Choose-Mango.jsx";
import SafetyAndEligibility from "../components/Safety-And-Eligibility.jsx";
import StartYourJourney from "../components/Start-Your-Journey.jsx";
import HomeFaqs from "../components/Home-Faqs.jsx";

export const Home = () => {
  return (
    <>
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
