import { NavLink } from "react-router-dom";
import { AiFillStop } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { useState, useEffect } from "react";
import MounjaroBoxHome from "./MounjaroBoxHome.jsx";
import WegovyBoxHome from "./WegovyBoxHome.jsx";
import HomeHeroSkeletonMounjaro from "./HomeHeroSkeletonMounjaro.jsx";
import api from "../services/api.js";

export default function HomeHero() {
  const [dataM, setDataM] = useState([]);
  const [dataW, setDataW] = useState([]);
  const [loadingM, setLoadingM] = useState(true);
  const [loadingW, setLoadingW] = useState(true);
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/medicine");
        const mdata = response.data.data.filter(
          (item) => item.medicine === "Mounjaro"
        );
        setDataM(mdata);
        if (mdata.length !== 0) {
          setLoadingM(false);
        }

        const wdata = response.data.data.filter(
          (item) => item.medicine === "Wegovy"
        );
        setDataW(wdata);
        if (wdata.length !== 0) {
          setLoadingW(false);
        }
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
        <div className="max-w-[1280px] custom-width lg:px-[40px] xl:px-0 mx-auto z-1 ">
          <div className="px-0 md:!px-6 py-12 md:py-[48px] flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="bg-green-100 text-[rgb(16_185_129)] text-xs font-semibold px-3 py-2 rounded-full w-max mb-4">
                🇬🇧 UK’s Most Trusted Price Comparison
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                No More Hassle – Get the{" "}
                <span className="text-[rgb(16_185_129)]">Cheapest</span>{" "}
                Mounjaro and Wegovy in the UK
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                Find the best deals from{" "}
                <span className="font-bold">GPhC-registered pharmacies</span>{" "}
                with our free price comparison tool for weight loss
                prescriptions. Get started in seconds.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <a
                  href="#price-compare"
                  className="bg-orange-500 inline-block cursor-pointer text-center md:text-start text-white font-semibold px-3 lg:px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-200"
                >
                  Compare Prices Now
                </a>
                <a
                  href="#how-it-work"
                  className="border inline-block cursor-pointer text-center md:text-start border-[rgb(16_185_129)] text-[rgb(16_185_129)] font-semibold px-3 lg:px-6 py-3 rounded-lg hover:bg-[rgb(16_185_129)] hover:text-[#ffffff] transition duration-200"
                >
                  Learn How It Works
                </a>
              </div>

              <div className="flex !justify-between md:!justify-start gap-1 md:gap-6 text-sm text-gray-600 font-medium">
                <span className="flex text-[9px] md:text-sm items-center gap-1">
                  <AiFillStop className=" text-lg text-orange-600" /> No Hidden
                  Fees
                </span>
                <span className="flex text-[9px] md:text-sm items-center gap-1">
                  <MdVerified className=" text-lg text-[rgb(16_185_129)]" />{" "}
                  Easy Process
                </span>
                <span className="flex text-[9px] md:text-sm items-center gap-1">
                  <BsFillLightningChargeFill className=" text-lg text-[#ee9c25]" />{" "}
                  Real-Time Discounts
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Mounjaro Card */}
              <NavLink aria-label="Mounjaro-compare" to="/mounjaro-compare">
                <div className="bg-white  rounded-xl shadow-md p-4 md:p-6 border-[2px] border-[#10b98133] transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-[12px] font-bold">Mounjaro 2.5mg</h2>
                    <span className="bg-green-100 text-[rgb(16_185_129)] text-xs px-3 py-1 rounded-full font-medium">
                      Best Price
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">4-week supply</p>
                  <div className="p-0 m-0">
                    {loadingM ? (
                      <HomeHeroSkeletonMounjaro />
                    ) : (
                      <>
                        <MounjaroBoxHome dataM={dataM} />
                      </>
                    )}
                  </div>
                </div>
              </NavLink>
              {/* Wegovy Card */}
              <NavLink aria-label="wegovy-compare" to="/wegovy-compare">
                <div className="bg-white  border-[#ee9c2533] border-[2px] rounded-xl shadow-md transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl p-4 md:p-6">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-lg font-semibold mb-1">
                      Wegovy 0.25mg
                    </h2>
                    <span className="bg-orange-50 text-[#ee9c25] text-xs px-3 py-1 rounded-full font-medium">
                      Best Price
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">4-week supply</p>
                  <div className="p-0 m-0">
                    {loadingW ? (
                      <HomeHeroSkeletonMounjaro />
                    ) : (
                      <>
                        <WegovyBoxHome dataW={dataW} />
                      </>
                    )}
                  </div>
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
