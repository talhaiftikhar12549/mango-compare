import image1 from "../assets/mounjaro compare/mounjarohero.png";
import HeroSection from "../components/Hero-Section.jsx";
import PriceCalculator from "../components/Price-Calculator.jsx"
export const MounjaroCompare = () => {
  return (
    <>
      <HeroSection
        heading="Save up to 27% on Mounjaro with Mango!"
        text="A weekly self-injectable weight loss pen, Mounjaro retails at £125 to £219 in the UK."
        image={image1}
      />
      <div className="max-w-[1280px] text-[20px] font-[500] font-montserrat text-[#202244] item-center">
        <p>
          By comparing Mounjaro prices across the UK, the average user can save
          up to 27%—that’s £67.01 per four-week supply just by choosing the
          cheapest option. Over a year, that adds up to a massive £804.12 in
          savings!
        </p>
      </div>
{/* price calculator */}
<PriceCalculator/>
{/* price calculator */}
      <div className="max-w-[1280px]">
        <p className="text-[18px] font-[400] font-montserrat text-[#6A778B]">
          These dosages are administered subcutaneously once a week, with the
          starting dose typically being 2.5 mg and increasing as needed up to a
          maximum of 15 mg.
        </p>
        <span className="text-[24px] font-[600] font-montserrat text-[#202244]">
          Mango helps you get the best price without compromising your
          GP-recommended dosage
        </span>
        <p className="text-[18px] font-[400] font-montserrat text-[#6A778B]">
          Pharmacies associated with Mango are reputable, fully licensed, and
          highly trusted. We ensure the safe supply of weight loss injections
          while keeping your best interests at the forefront.
        </p>
      </div>
    </>
  );
};
