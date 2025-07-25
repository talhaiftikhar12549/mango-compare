import Slider from "react-slick";
import care from "../assets/home/TCP.webp";
import peak from "../assets/home/Peak Pharmacy (1).webp";
import pharmacyPlanet from "../assets/home/Pharmacy Planet (2).webp";
import superdrug from "../assets/home/Superdrug.webp";
import numan from "../assets/home/Numans (1).webp";
import simpleonline from "../assets/home/Simple Online Pharmacy (2).webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTruck, FaClock, FaCheckCircle, FaStar } from "react-icons/fa";
import review1 from "../assets/home/review1.webp";
import review2 from "../assets/home/review2.webp";
import review3 from "../assets/home/review3.webp";
import review4 from "../assets/home/review4.webp";
import { MdVerifiedUser } from "react-icons/md";

const TopRatedPharmacies = () => {
  const pharmacies = [
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
      img: peak,
      ratting: review1,
      link: "https://www.peakpharmacy.co.uk/medications/Mounjaro",
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
      img: numan,
      ratting: review1,
      link: "https://www.numan.com/weight-loss/mounjaro",
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
      gphc: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9010308",
      img: care,
      ratting: review2,
      link: "https://thecarepharmacy.com/condition/weight-loss/",
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
      img: superdrug,
      ratting: review4,
      link: "https://onlinedoctor.superdrug.com/weight-loss-treatments.html",
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
      img: pharmacyPlanet,
      ratting: review1,
      link: "https://www.pharmacyplanet.com/mounjaro.html",
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
      img: simpleonline,
      ratting: review3,
      link: "https://www.simpleonlinepharmacy.co.uk/online-doctor/weight-loss/mounjaro/",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          Our Top Recommendations
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Compare UK’s top pharmacies offering Wegovy and Mounjaro. Transparent
          delivery fees, timelines, and maintenance plans to help you choose
          confidently.
        </p>
        <div className="max-w-[1080px] mx-auto h-full">
          <Slider {...settings}>
            {pharmacies.map((pharmacy, index) => (
              <div key={index}>
                <div className="h-full flex border border-gray-200 rounded-2xl">
                  <div className="bg-white min-h-[650px] md:min-h-[234px] p-4 md:p-0 rounded-2xl flex flex-col md:flex-row md:items-stretch md:justify-between w-full">
                    {/* Logo + Name */}
                    <div className="flex flex-col items-center justify-center text-center w-full md:w-[25%] h-full">
                      <div className="sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center text-sm text-gray-500">
                        <img
                          className="w-[80px] h-[80px]"
                          src={pharmacy.img}
                          alt=""
                        />
                      </div>
                      <div className="text-sm sm:text-base font-semibold mt-2 text-gray-800">
                        {pharmacy.name}
                      </div>
                      <div className="w-full gap-1 flex justify-center items-center">
                        <MdVerifiedUser className="mt-2 text-[#02d68c]" />

                        <a
                          target="_blank"
                          href={pharmacy.gphc}
                          className="!text-xs text-gray-400 hover:text-[#02d68c] mt-3 cursor-pointer"
                        >
                          GPhC Registered Pharmacy
                        </a>
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
                        <img
                          className="w-[200px]"
                          src={pharmacy.ratting}
                          alt=""
                        />
                      </div>
                      <div className="w-full flex justify-center items-center">
                        <a
                          target="_blank"
                          href={pharmacy.link}
                          className="bg-[#10b982] cursor-pointer hover:shadow-md text-white text-xs font-semibold px-10 py-2 rounded-md hover:bg-[#0fa776] transition-colors w-full sm:w-auto"
                        >
                          View Details
                        </a>
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
