import React from "react";
import heroImage from "../assets/home/heroImage.png";

export default function HomeHero() {
  return (
    <section className="max-w-[1400px]">
      <div className="flex items-center ">
        <div className="w-[60%]">
          <h1 className="text-[60px] font-[700] font-montserrat text-[#05222E]">
            Giving you the best price comparison in the UK
          </h1>

          <p className="text-[18px] pt-[20px] font-[500] font-montserrat text-[#6A778B]">
            Mango is the UK’s go-to price comparison platform for weight loss
            medications, helping you find the best deals on GP-prescribed
            Mounjaro and Wegovy. We compare prices across trusted, licensed
            pharmacies—so you get the right medication at the right price,
            hassle-free.
          </p>
          <div className="flex gap-[20px] pt-[40px]"> 
            <button className="text-[#FFFFFF] py-[15px] px-[56px] rounded-[10px] border-[1px] border-solid-[#FCC821] bg-[#FCC821]">
              Contact Us
            </button>
            <button className="text-[#000000] py-[15px] px-[56px] rounded-[10px] border-[1px] border-solid-[#FCC821] bg-[#FFFFFF]">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[40%] flex justify-center">
          <img className="h-full" src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
