import image1 from "../assets/wegovy compare/wegovyhero.png";
import HeroSection from "../components/Hero-Section.jsx";
export const WegovyCompare = () => {
  return (
    <>
      <HeroSection
        heading="Cut your Wegovy costs by up to 28% compare prices with Mango!"
        text="Wegovy, the weekly self-injection for weight loss, can cost anywhere from £109 to £269 in the UK."
        image={image1}
      />
    </>
  );
};
