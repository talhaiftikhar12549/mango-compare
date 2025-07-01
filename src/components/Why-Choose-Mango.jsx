import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
export default function WhyChooseMango() {
  return (
    <>
      <section className="max-w-[1280px] py-[40px] md:py-[48px] lg:px-[40px] xl:px-0  mx-auto ">
        <div className=" px-4 bg-white text-center">
          <h2 className="!text-[32px] !pt-[0px]  md:text-4xl !font-[600] text-gray-900 mb-4">
            Why Choose Mango Compare?
          </h2>
          <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            We make finding affordable weight loss treatments simple, safe, and
            transparent
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
            {/* Step 1 */}
            <div className="group bg-white border-2 border-[#ffffff] hover:border-[#10b98133] rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
            <div className="group bg-white border-2 border-[#ffffff] hover:border-[#10b98133]  rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
            <div className="group bg-white border-2  border-[#ffffff] hover:border-[#10b98133] rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
        </div>
      </section>
    </>
  );
}
