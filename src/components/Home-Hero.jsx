import { NavLink } from "react-router-dom";
import { AiFillStop } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import PriceListSkeleton from "./HomeHeroSkeleton.jsx";
export default function HomeHero() {
  const [apiDataM, setApiDataM] = useState([]);
  const [apiDataW, setApiDataW] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/medicine");

        const dataM = response.data.data.filter(
          (item) => item.medicine === "Mounjaro"
        );
        const dataW = response.data.data.filter(
          (item) => item.medicine === "Wegovy"
        );

        if (dataM.length !== 0) {
          setLoading(false);
        }
        if (dataW.length !== 0) {
          setLoading(false);
        }
        const filteredByMgM = dataM.filter((item) => item.dosage === "2.5 mg");
        console.log("Filtered Data Manjaro:", filteredByMgM);
        const apiDtaM = filteredByMgM
          .slice()
          .sort((a, b) => a.price - b.price)
          .slice(0, 3);
        setApiDataM(apiDtaM);

        const filteredByMgW = dataW.filter((item) => item.dosage === "0.25 mg");
        console.log("Filtered Data Wegovy:", filteredByMgW);
        const apiDtaW = filteredByMgW
          .slice()
          .sort((a, b) => a.price - b.price)
          .slice(0, 2);
        setApiDataW(apiDtaW);

        console.log("API Data Mounjaro:", apiDtaM);
        console.log("API Data Wegovy:", apiDtaW);
      } catch (error) {
        console.log("Failed to fetch listings", error);
      }
    };

    fetchListings();
  }, []);
  return (
    <>
      {/* New Home */}
      <section className="w-[100%] custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto relative bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)]">
        <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto z-1 ">
          <div className=" px-6 py-12 md:py-[48px] flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="bg-green-100 text-[rgb(16_185_129)] text-xs font-semibold px-3 py-2 rounded-full w-max mb-4">
                🇬🇧 UK’s Most Trusted Price Comparison
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                No More Hassle – Find the{" "}
                <span className="text-[rgb(16_185_129)]">Cheapest</span> Weight
                Loss Treatments in the UK
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                Compare GPhC-registered pharmacies in seconds. Save up to{" "}
                <span className="text-[#ee9c25] font-semibold">27%</span> on
                your treatment.
              </p>

              <div className="flex gap-4 mb-6">
                <button className="bg-orange-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-200">
                  Compare Prices Now
                </button>
                <button className="border cursor-pointer border-[rgb(16_185_129)] text-[rgb(16_185_129)] font-semibold px-6 py-3 rounded-lg hover:bg-[rgb(16_185_129)] hover:text-[#ffffff] transition duration-200">
                  Learn How It Works
                </button>
              </div>

              <div className="flex gap-6 text-sm text-gray-600 font-medium">
                <span className="flex items-center gap-1">
                  <MdVerified className="text-lg text-[rgb(16_185_129)]" /> GPhC
                  Verified
                </span>
                <span className="flex items-center gap-1">
                  <AiFillStop className="text-lg text-red-400" /> No Hidden Fees
                </span>
                <span className="flex items-center gap-1">
                  <BsFillLightningChargeFill className="text-lg text-[#ee9c25]" />{" "}
                  Instant Results
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Mounjaro Card */}
              <NavLink to="/mounjaro-compare">
                <div className="bg-white  rounded-xl shadow-md p-6 border-[2px] border-[#10b98133] transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-[12px] font-bold">Mounjaro 2.5mg</h2>
                    <span className="bg-green-100 text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full font-medium">
                      Best Price
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">4-week supply</p>
                  <div className="p-0 m-0">
                    {loading ? (
                      <PriceListSkeleton />
                    ) : (
                      <ul className="!list-none !pl-0 !ml-0 space-y-2 text-gray-800">
                        {apiDataM.map((item, index) => (
                          <li
                            key={index}
                            className={`list-none rounded-xl flex justify-between p-4 ${
                              index === 0
                                ? "bg-[rgb(16_185_129/_0.05)]"
                                : "bg-[rgb(249_250_251)]"
                            }`}
                          >
                            <div className="flex justify-between items-center w-full">
                              <div className="!text-[16px] font-[600]">
                                {item.pharmacy}
                              </div>
                              <div>
                                <span
                                  className={`font-bold ${
                                    index === 0
                                      ? "text-[rgb(16_185_129)]"
                                      : "text-[#000000]"
                                  }`}
                                >
                                  £{item.price}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="list-none flex justify-between !text-[16px] font-[600] p-4 mt-[8px] bg-orange-50 text-[#ee9c25] rounded-xl">
                      💰 Save £30 vs highest price
                    </div>
                  </div>
                </div>
              </NavLink>
              {/* Wegovy Card */}
              <NavLink to="/wegovy-compare">
                <div className="bg-white  border-[#ee9c2533] border-[2px] rounded-xl shadow-md transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-6">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-lg font-semibold mb-1">
                      Wegovy 0.25mg
                    </h2>
                    <span className="bg-orange-50 text-[#ee9c25] text-xs px-3 py-1 rounded-full font-medium">
                      Best Price
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">4-week supply</p>

                  <ul className="!list-none !pl-0 !ml-0 space-y-2 text-gray-800">
                    {apiDataW.map((item, index) => (
                      <li
                        key={index}
                        className={`list-none rounded-xl flex justify-between p-4 ${
                          index === 0 ? "bg-orange-50" : "bg-[rgb(249_250_251)]"
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <div className="!text-[16px] font-[600]">
                            {item.pharmacy}
                          </div>
                          <div>
                            <span
                              className={`font-bold ${
                                index === 0
                                  ? "text-[#ee9c25]"
                                  : "text-[#000000]"
                              }`}
                            >
                              £{item.price}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* New Home */}
    </>
  );
}
