import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
export default function WhyChooseMango() {
  return (
    <>
      <section className="max-w-[1280px] py-[40px] md:py-[48px] lg:px-[40px] xl:px-0  mx-auto ">
        <div className=" px-4 bg-white text-center">
          <h2 className="!text-[24px] md:!text-[24px]  !pt-[0px]  md:text-4xl !font-[600] text-gray-900 mb-4">
            Why Choose Mango Compare?
          </h2>
          <p className="text-gray-500 mb-12 !text-[16px] md:!text-[18px] max-w-2xl mx-auto">
            We make finding the best deals on weight loss injections in the UK
            easy, fast, and accessible.
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
                Verified Pharmacies Only
              </h3>

              <p className="text-md text-gray-500 mt-2">
                We only list UK pharmacies that are fully licensed and{" "}
                <span className="font-bold">GPhC-registered</span>. We make sure
                your experience as a customer is both safe and reliable.
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
                Transparent Pricing
              </h3>

              <p className="text-md text-gray-500 mt-2">
                We show you the full cost upfront, including delivery fees. With
                us, there are no hidden costs, and you’ll always know exactly
                what you’re paying for.
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
                Find the Best Deals
              </h3>

              <p className="text-md text-gray-500 mt-2">
                Our price comparison tool and exclusive discounts help you find the lowest treatment price. Get the treatment you need at the best available price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
