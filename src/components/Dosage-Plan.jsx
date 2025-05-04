import tickMark from "../assets/home/tickMark.png";
import cardPattren from "../assets/home/cardPattren.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function DosagePlan() {
  return (
    <>
      <section className="max-w-[1280px] pb-[100px] lg:px-[40px] xl:px-0 px-[16px] mx-auto">
        <div>
          <div className="md:w-[80%] w-[100%] mx-auto text-center pt-[100px]">
            <h2 className="md:text-[28px] text-[18px] font-[700] font-montserrat text-[#05222E]">
              Stick to your GP’s recommended dosage and get the best deals that
              fit your budget.
            </h2>
          </div>

          <div
            id="dosage-plan-section"
            className="flex md:flex-row flex-col items-center justify-between lg:justify-center gap-[20px]  w-[100%] lg:gap-[80px] pt-[30px]"
          >
            {/* Card 1 */}
            <div className="relative rounded-[40px] lg:w-[50%] w-[100%] px-[40px] pt-[60px] pb-[40px] max-w-[450px] bg-[#FEF4D3] shadow-2xl">
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
            {/* Card 1 */}

            {/* Card 2 */}
            <div className="rounded-[40px] relative px-[40px] lg:w-[50%] w-[100%] pt-[60px] pb-[40px] max-w-[450px] bg-[##FFFFFF] shadow-2xl">
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
                  <button className="bg-[#FFFFFF] cursor-pointer w-full align-items-center justify-center py-[16px] rounded-[14px]  text-[18px] font-[700] font-montserrat text-[#FCC821] inline-flex  hover:text-[#FFFFFF] hover:bg-[#FCC821] transition duration-700 border-[2px] border-[#FCC821]">
                    Compare{" "}
                    <span className="flex items-center content-center">
                      <FaArrowRight className="ml-2 items-center" />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
            {/* Card 2 */}
          </div>
        </div>
      </section>
    </>
  );
}
