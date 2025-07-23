import React from "react";
import Slider from "react-slick";
import { FaTruck, FaClock, FaCheckCircle, FaStar } from "react-icons/fa";

const TopRatedPharmacies = () => {
  const pharmacies = [
    {
      name: "Pharmacy Planet",
      rating: 4.5,
      wegovy: "119.00",
      mounjaro: "128.00",
      deliveryFee: "£4.99",
      deliveryTime: "Within a week",
      maintenance: true,
      trustPilot: "4.5/5",
    },
    {
      name: "The Care Pharmacy",
      rating: 5,
      wegovy: "99.99",
      mounjaro: "119.99",
      deliveryFee: "Free",
      deliveryTime: "Same day delivery",
      maintenance: true,
      trustPilot: "5/5",
    },
    {
      name: "Simple Online Pharmacy",
      rating: 4.7,
      wegovy: "118.98",
      mounjaro: "128.98",
      deliveryFee: "£6.49",
      deliveryTime: "1 working day",
      maintenance: true,
      trustPilot: "4.7/5",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-[100%] max-w-[1280px] py-10 px-4 md:py-12 md:px-6 lg:px-10 mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Top-Rated Pharmacies
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        Compare UK’s top pharmacies offering Wegovy and Mounjaro. Transparent
        delivery fees, timelines, and maintenance plans to help you choose
        confidently.
      </p>
      <div className="max-w-[1080px]  mx-auto">
        <div>
          <Slider {...settings}>
            {pharmacies.map((pharmacy, index) => (
              <div key={index} className="px-2">
                <div className="bg-white border border-gray-200 rounded-2xl !justify-center !items-center shadow-md  flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Logo + Name */}
                  <div className="flex flex-col items-center md:items-start !h-[100%] w-full md:w-[30%] text-center md:text-left">
                    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                      Logo
                    </div>
                    <div className="text-sm sm:text-base font-semibold mt-2 text-gray-800">
                      {pharmacy.name}
                    </div>
                  </div>

                  {/* Price + Delivery Info */}
                  <div className="flex-1 w-full flex flex-col gap-6 border-l border-l-gray-200 border-r border-r-gray-200">
                    <div className="w-[100%] rounded-xl text-sm font-medium text-gray-800 flex text-center sm:text-left">
                      <div className="flex flex-col justify-center items-center gap-2 bg-[#f49e0b] px-6 py-9 w-[50%]">
                        <p className="text-white text-lg">Wegovy</p>
                        <p className="font-semibold text-white text-lg">
                          £{pharmacy.wegovy}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-col justify-center items-center bg-[#10b982] px-6 py-9 w-[50%]">
                        <p className="text-white text-lg">Mounjaro</p>
                        <p className="font-semibold text-white text-lg">
                          £{pharmacy.mounjaro}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                      <div className="flex flex-col items-start gap-2 items-center">
                        <div className="flex items-center justify-center w-full">
                          <FaTruck className="text-[#10b982] text-2xl mt-0.5" />
                        </div>
                        <div className="text-center w-full">
                          <p>Delivery: {pharmacy.deliveryFee}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-2 items-center">
                        <div className="flex items-center justify-center w-full">
                          <FaClock className="text-[#10b982] text-2xl mt-0.5" />
                        </div>
                        <div className="text-center w-full">
                          <p>{pharmacy.deliveryTime}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-2 items-center">
                        <div className="flex items-center justify-center w-full">
                          <FaCheckCircle className="text-[#10b982] text-2xl mt-0.5" />
                        </div>
                        <div className="text-center w-full">
                          <p>Maintenance Plan</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating + Button */}
                  <div className="w-full md:w-[30%] flex flex-col items-center md:items-end gap-4 text-center md:text-right">
                    <div className="flex items-center gap-1 text-2xl font-semibold justify-center text-gray-800 w-[100%]">
                      <FaStar className="text-yellow-400 text-3xl" />
                      {pharmacy.trustPilot}
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <button className="bg-[#10b982] cursor-pointer hover:shadow-md text-white text-xs font-semibold px-10 py-2 rounded-md hover:bg-[#0fa776] transition-colors w-full sm:w-auto">
                        View Details
                      </button>
                    </div>
                    <div className="w-[100%] flex justify-center items-center">
                      <p className="text-xs text-gray-400 mt-1 ">
                        GPhC Registered Pharmacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopRatedPharmacies;
