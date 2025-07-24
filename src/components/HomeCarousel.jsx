import React from "react";
import Slider from "react-slick";
import { FaTruck, FaClock, FaCheckCircle, FaStar } from "react-icons/fa";

const TopRatedPharmacies = () => {
  const pharmacies = [
    {
      name: "The Care Pharmacy",
      rating: 5,
      wegovy: "99.99",
      mounjaro: "119.99",
      deliveryFee: "Free",
      deliveryTime: "Same day delivery",
      maintenance: true,
      trustPilot: "5/5",
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9010308",
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
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/name/simple%20online%20pharmacy*",
    },
    {
      name: "Peak Pharmacy",
      rating: 4.5,
      wegovy: "128.00",
      mounjaro: "128.50",
      deliveryFee: "£7.99",
      deliveryTime: "Next working day (Cheaper delivery options available)",
      maintenance: true,
      trustPilot: "4.5/5",
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/9012214",
    },
    {
      name: "Numan",
      rating: 4.5,
      wegovy: "169.00",
      mounjaro: "209.00",
      deliveryFee: "Free Delivery",
      deliveryTime: "2 working days",
      maintenance: true,
      trustPilot: "4.5/5",
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/9011408",
    },
    {
      name: "Superdrug Online Doctor",
      rating: 4.3,
      wegovy: "195",
      mounjaro: "215",
      deliveryFee: "£3.99",
      deliveryTime: "Next Day (Free delivery options with extended times)",
      maintenance: true,
      trustPilot: "4.3/5",
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9010736",
    },
    {
      name: "Pharmacy Planet",
      rating: 4.5,
      wegovy: "119.00",
      mounjaro: "128.00",
      deliveryFee: "£4.99",
      deliveryTime: "Within a week",
      maintenance: true,
      trustPilot: "4.5/5",
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9010288",
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
    <>
      <section className="w-full max-w-[1280px] py-10 px-4 md:py-12 md:px-6 lg:px-10 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Top-Rated Pharmacies
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Compare UK’s top pharmacies offering Wegovy and Mounjaro. Transparent
          delivery fees, timelines, and maintenance plans to help you choose
          confidently.
        </p>
        <div className="max-w-[1080px] mx-auto h-full">
          <Slider {...settings}>
            {pharmacies.map((pharmacy, index) => (
              <div
                key={index}
                className="h-[100%] flex border border-gray-200 rounded-2xl shadow-md "
              >
                <div className="h-[100%] flex grow">
                  <div className="bg-white min-h-[234px] 0 p-4 md:p-0 rounded-2xl  flex flex-col md:flex-row md:items-stretch md:justify-between w-full">
                    {/* Logo + Name */}
                    <div className="flex flex-col items-center justify-center text-center w-full md:w-[25%] h-full">
                      <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                        Logo
                      </div>
                      <div className="text-sm sm:text-base font-semibold mt-2 text-gray-800">
                        {pharmacy.name}
                      </div>
                    </div>

                    {/* Price + Delivery Info */}
                    <div className="flex-1 w-full pt-4 md:pt-0 flex flex-col gap-6 md:w-[50%] md:border-l md:border-r border-gray-200 h-full">
                      <div className="w-full rounded-xl text-sm font-medium text-gray-800 flex text-center sm:text-left">
                        <div className="flex flex-col justify-center items-center gap-2 bg-[#f49e0b] px-6 py-6 w-[50%]">
                          <p className="text-white text-lg">Wegovy</p>
                          <p className="font-semibold text-white text-lg">
                            £{pharmacy.wegovy}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-col justify-center items-center bg-[#10b982] px-6 py-6 w-[50%]">
                          <p className="text-white text-lg">Mounjaro</p>
                          <p className="font-semibold text-white text-lg">
                            £{pharmacy.mounjaro}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center gap-6 text-sm text-gray-600 pb-4">
                        <div className="flex flex-col items-center gap-2 w-[33%]">
                          <FaTruck className="text-[#10b982] text-lg md:text-2xl mt-0.5" />
                          <p className="!text-xs !md:text-xl text-center">
                            Delivery: {pharmacy.deliveryFee}
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-[33%]">
                          <FaClock className="text-[#10b982] text-lg md:text-2xl mt-0.5" />
                          <p className="!text-xs !md:text-xl text-center">
                            {pharmacy.deliveryTime}
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-[33%]">
                          <FaCheckCircle className="text-[#10b982] text-lg md:text-2xl mt-0.5" />
                          <p className="!text-xs !md:text-xl text-center">
                            Maintenance Plan
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rating + Button */}
                    <div className="w-full md:w-[25%] flex flex-col items-center justify-center md:items-end gap-4 text-center md:text-right h-full">
                      <div className="flex flex-col items-center gap-1 text-2xl font-semibold justify-center text-gray-800 w-full">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-3xl" />
                          {pharmacy.trustPilot}
                        </div>
                        <p className="text-xs text-gray-400">Trust Pilot</p>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <a
                          target="_blank"
                          href={pharmacy.gphc}
                          className="bg-[#10b982] cursor-pointer hover:shadow-md text-white text-xs font-semibold px-10 py-2 rounded-md hover:bg-[#0fa776] transition-colors w-full sm:w-auto"
                        >
                          View Details
                        </a>
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <p className="text-xs text-gray-400 mt-1">
                          GPhC Registered Pharmacy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TopRatedPharmacies;
