import React from "react";
import heroImage from "../assets/home/heroImage.png";
import { NavLink } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="w-[100%]  custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto relative">
      <div
        className="flex flex-col lg:flex-row justify-between items-top h-full py-[70px] bg-no-repeat bg-cover bg-right  object-fill "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
        <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto z-1 ">
          <div className="w-full lg:w-[60%] z-10">
            <h1 className="text-[32px] sm:text-[40px] md:text-[42px] lg:text-[46px] font-[700] font-montserrat text-[#ffffff] leading-[1.25]">
              Giving you the best price comparison in the UK
            </h1>

            <p className="sm:text-[16px] mt-[20px] leading-[190%] sm:leading-[190%] font-[500] font-montserrat text-[#ffffffad]">
              Mango is the UK’s go-to price comparison platform for weight loss
              medications, helping you find the best deals on GP-prescribed
              Mounjaro and Wegovy. We compare prices across trusted, licensed
              pharmacies—so you get the right medication at the right price,
              hassle-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-[20px] pt-[30px] md:pt-[40px]">
              <NavLink to="/contact-us">
                <button className="text-[#ffffff]  font-semibold cursor-pointer w-full sm:w-auto py-[12px] px-[32px] rounded-[10px] border-[1px] border-[#FCC821] bg-[#FCC821] hover:text-[#000000] hover:bg-[#FFFFFF] hover:border-[#000000] transition duration-700">
                  Contact Us
                </button>
              </NavLink>

              <button
                onClick={() => {
                  const element = document.getElementById(
                    "dosage-plan-section"
                  );
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-[#000000] font-semibold cursor-pointer py-[12px] px-[32px] rounded-[10px] border-[1px] border-[#000000] bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#FCC821] hover:border-[#FCC821] transition duration-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
