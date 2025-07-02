import { IoSearchSharp } from "react-icons/io5";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

export default function HowItWork() {
  return (
    <>
      <section id="how-it-work" className="max-w-[1280px] py-[20px] md:py-[48px] lg:px-[40px] xl:px-0  mx-auto ">
        <div className=" px-4 bg-white text-center">
          <h2 className="!text-[32px]  md:text-4xl !font-[600] text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            Get the best prices on your weight loss medication in three simple
            steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
            {/* Step 1 */}
            <div className="bg-white border-2 border-[#ffffff] hover:border-[#10b98133]  rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
            <div className="bg-white border-2 border-[#ffffff] hover:border-[#10b98133]  rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
            <div className="bg-white border-2 border-[#ffffff] hover:border-[#10b98133]  rounded-xl p-8 shadow-sm transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
            <a href="#price-compare" className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md hover:bg-orange-600 transition duration-300">
              Start Comparing Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
