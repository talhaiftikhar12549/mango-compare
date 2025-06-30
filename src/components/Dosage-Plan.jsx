import tickMark from "../assets/home/tickMark.png";
import cardPattren from "../assets/home/cardPattren.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
export default function DosagePlan() {
  return (
    <>
      {/* <section className="bg-[#fffdf8] w-full">
        <div className="max-w-[1280px] py-[40px] md:py-[50px] lg:px-[40px] xl:px-0 px-[16px] mx-auto ">
          <div>
            <div className="md:w-[80%] w-[100%] mx-auto text-center ">
              <h2 className="md:text-[28px] text-[18px] font-[700] font-montserrat text-[#05222E]">
                Stick to your GP’s recommended dosage and get the best deals
                that fit your budget.
              </h2>
            </div>

            <div
              id="dosage-plan-section"
              className="flex md:flex-row flex-col items-center justify-between lg:justify-center gap-[20px]  w-[100%] lg:gap-[80px] pt-[30px]"
            >
             
              <div className="relative rounded-[40px] lg:w-[50%] w-[100%] sm:px-[40px] px-[24px] pt-[60px] pb-[40px] bg-[#fff] max-w-[450px] hover:bg-[#FEF4D3] transition duration-700 shadow-md">
                <img
                  className="absolute top-0 right-0 z-0"
                  src={cardPattren}
                  alt=""
                />

                <h3 className="relative z-50 text-[48px] font-[700] font-montserrat text-[#05222E]">
                  Mounjaro
                </h3>
                <p className="text-[16px] md:max-w-[397px] pt-[11px] pb-[44px] font-[400] font-montserrat text-[#5D6B6F]">
                  A dual-action injectable that helps control appetite and blood
                  sugar—get the best prices with Mango!
                </p>
                <div className="flex flex-col gap-y-[16px]">
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Price Comparison
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Dose Quantity{" "}
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Reviews
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Rating
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Website Link
                    </p>
                  </div>
                </div>

                <div className="pt-[40px]">
                  <NavLink to="/mounjaro-compare">
                    <button className="bg-[#FCC821] cursor-pointer w-full align-items-center justify-center py-[16px] rounded-[14px]  text-[18px] font-[700] font-montserrat text-[#FFFFFF] inline-flex hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 border-[2px] border-[#FCC821]">
                      Compare{" "}
                      <span className="flex items-center content-center">
                        <FaArrowRight className="ml-2 items-center" />
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
             
              <div className="rounded-[40px] relative px-[40px] lg:w-[50%] w-[100%] pt-[60px] pb-[40px] max-w-[450px] bg-[##FFFFFF] bg-[#fff] shadow-md hover:bg-[#FEF4D3] transition duration-700">
                <img
                  className="absolute top-0 right-0"
                  src={cardPattren}
                  alt=""
                />
                <h3 className="text-[48px] font-[700] font-montserrat text-[#05222E]">
                  Wegovy
                </h3>
                <p className="text-[16px] pt-[11px] pb-[44px] font-[400] font-montserrat text-[#5D6B6F]">
                  A once-weekly injection designed to reduce appetite and aid
                  weight loss—find the best deals with Mango!
                </p>
                <div className="flex flex-col gap-y-[16px]">
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Price Comparison
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Dose Quantity{" "}
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Reviews
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Rating
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={tickMark} alt="" />
                    <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">
                      Website Link
                    </p>
                  </div>
                </div>

                <div className="pt-[40px]">
                  <NavLink to="/wegovy-compare">
                    <button className="bg-[#FCC821] cursor-pointer w-full align-items-center justify-center py-[16px] rounded-[14px]  text-[18px] font-[700] font-montserrat text-[#ffffff] inline-flex  hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 border-[2px] border-[#FCC821]">
                      Compare{" "}
                      <span className="flex items-center content-center">
                        <FaArrowRight className="ml-2 items-center" />
                      </span>
                    </button>
                  </NavLink>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section> */}

      <div className="max-w-[1280px] py-[20px] md:py-[80px] lg:px-[40px] xl:px-0  mx-auto ">
        <section className=" px-4 bg-white text-center">
          <h2 className="!text-[38px]  md:text-4xl !font-[700] text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            Get the best prices on your weight loss medication in three simple
            steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
            {/* Step 1 */}
            <div className="bg-white border-[#ffffff] hover:border-[#10b98133] border-1 rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="flex justify-center text-black mb-4">
                {/* <Search className="w-6 h-6" /> */}
                <IoSearchSharp className="text-[38px]" />
              </div>
              <div className="text-5xl font-bold text-gray-900">01</div>
              <h3 className="!text-xl !font-bold mt-2">
                Choose Your Treatment
              </h3>
              <p className="text-md text-gray-500 mt-2">
                Select between Wegovy or Mounjaro based on your prescription
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-[#ffffff] hover:border-[#10b98133] border-1 rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="flex justify-center text-black mb-4">
                {/* <ChevronRight className="w-6 h-6" /> */}
                <IoColorFilterOutline className="text-[38px]" />
              </div>
              <div className="text-5xl font-bold text-gray-900">02</div>
              <h3 className="text-lg font-semibold mt-2">Set Your Filters</h3>
              <p className="text-md text-gray-500 mt-2">
                Specify dose, price range, and preferred pharmacy locations
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-[#ffffff] hover:border-[#10b98133] border-1 rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="flex justify-center text-black mb-4">
                {/* <Check className="w-6 h-6" /> */}
                <FaRegCheckCircle className="text-[38px]" />
              </div>
              <div className="text-5xl font-bold text-gray-900">03</div>
              <h3 className="text-lg font-semibold mt-2">
                Compare & Order Online
              </h3>
              <p className="text-md text-gray-500 mt-2">
                View results instantly and get redirected to purchase securely
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md hover:bg-orange-600 transition duration-300">
              Start Comparing Now
            </button>
          </div>
        </section>
      </div>

      {/* *********************************888888888888888888888888888888888888888888888888888888888*************************** */}

      <div className="max-w-[1280px] py-[40px] md:py-[80px] lg:px-[40px] xl:px-0  mx-auto ">
        <section className=" px-4 bg-white text-center">
          <h2 className="!text-[38px]  md:text-4xl !font-[700] text-gray-900 mb-4">
            Why Choose Mango Compare?
          </h2>
          <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            We make finding affordable weight loss treatments simple, safe, and
            transparent
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
            {/* Step 1 */}
            <div className="group bg-white border-[#ffffff] hover:border-[#10b98133] border-1 rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4">
                <span className="bg-green-100 !mb-[30px] text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full font-medium">
                  Trust & Safety
                </span>
              </div>

              <div className="flex justify-center text-black mb-4 transition-transform duration-300">
                <IoSearchSharp className="text-[38px] transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="!text-lg !font-semibold mt-2 transition-colors duration-300 group-hover:!text-[rgb(16_185_129)]">
                Verified UK Pharmacies Only
              </h3>

              <p className="text-md text-gray-500 mt-2">
                All pharmacies are GPhC-registered and fully licensed to operate
                in the UK
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white border-[#ffffff] hover:border-[#10b98133] border-1 rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4">
                <span className="bg-green-100 !mb-[30px] text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full font-medium">
                  Transparency
                </span>
              </div>

              <div className="flex justify-center text-black mb-4 transition-transform duration-300">
                <IoColorFilterOutline className="text-[38px] transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="!text-lg !font-semibold mt-2 transition-colors duration-300 group-hover:!text-[rgb(16_185_129)]">
                Transparent Pricing with No Hidden Fees
              </h3>

              <p className="text-md text-gray-500 mt-2">
                See exactly what you'll pay upfront - no surprises or additional
                charges
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white border-[#ffffff] hover:border-[#10b98133] border-1 rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4">
                <span className="bg-green-100 !mb-[30px] text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full font-medium">
                  Savings
                </span>
              </div>

              <div className="flex justify-center text-black mb-4 transition-transform duration-300">
                <FaRegCheckCircle className="text-[38px] transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="!text-lg !font-semibold mt-2 transition-colors duration-300 group-hover:!text-[rgb(16_185_129)]">
                Save Up to 27% Instantly
              </h3>

              <p className="text-md text-gray-500 mt-2">
                Our comparison engine finds the lowest prices across all major
                UK pharmacies
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
