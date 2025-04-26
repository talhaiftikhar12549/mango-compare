import React from "react";
import heroImage from "../assets/home/heroImage.png";
import { NavLink } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="max-w-[1280px] lg:px-[40px] xl:px-0 px-[10px] mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[105px]">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px]  font-[700] font-montserrat text-[#05222E]">
            Giving you the best price comparison in the UK
          </h1>

          <p className="sm:text-[18px] pt-[20px] leading-[190%] sm:leading-[190%] font-[500] font-montserrat text-[#6A778B]">
            Mango is the UK’s go-to price comparison platform for weight loss
            medications, helping you find the best deals on GP-prescribed
            Mounjaro and Wegovy. We compare prices across trusted, licensed
            pharmacies—so you get the right medication at the right price,
            hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-[20px] md:pt-[40px]">
            <NavLink to="/contact-us">
              <button className="text-[#FFFFFF] cursor-pointer w-full sm:w-auto py-[15px] px-[52px] rounded-[10px] border-[1px] border-[#FCC821] bg-[#FCC821] hover:text-[#000000] hover:bg-[#FFFFFF] hover:border-[#000000] transition duration-700">
                Contact Us
              </button>
            </NavLink>

            <button
              onClick={() => {
                const element = document.getElementById("dosage-plan-section");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-[#000000] cursor-pointer py-[15px] px-[56px] rounded-[10px] border-[1px] border-[#000000] bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#FCC821] hover:border-[#FCC821] transition duration-700"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[40%] hidden md:flex justify-center">
          <img className="h-full" src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import heroImage from "../assets/home/heroImage.png";
// import { NavLink } from "react-router-dom";

// export default function HomeHero() {
//   return (
//     <section className="max-w-[1280px] lg:px-[40px] xl:px-0 px-[10px] mx-auto py-10">
//       <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
//         {/* Hero Left */}
//         <div className="w-full lg:w-[60%]">
//           <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-[700] font-montserrat text-[#05222E] leading-tight">
//             Giving you the best price comparison in the UK
//           </h1>

//           <p className="text-[16px] sm:text-[18px] pt-[20px] leading-relaxed font-[500] font-montserrat text-[#6A778B]">
//             Mango is the UK’s go-to price comparison platform for weight loss
//             medications, helping you find the best deals on GP-prescribed
//             Mounjaro and Wegovy. We compare prices across trusted, licensed
//             pharmacies—so you get the right medication at the right price,
//             hassle-free.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 pt-[30px]">
//             <NavLink to="/contact-us">
//               <button className="text-[#FFFFFF] w-full sm:w-auto py-[15px] px-[32px] rounded-[10px] border border-[#FCC821] bg-[#FCC821] hover:text-[#000000] hover:bg-[#FFFFFF] hover:border-[#000000] transition duration-700">
//                 Contact Us
//               </button>
//             </NavLink>

//             <button
//               onClick={() => {
//                 const element = document.getElementById("dosage-plan-section");
//                 if (element) {
//                   element.scrollIntoView({ behavior: "smooth" });
//                 }
//               }}
//               className="text-[#000000] w-full sm:w-auto py-[15px] px-[32px] rounded-[10px] border border-[#000000] bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#FCC821] hover:border-[#FCC821] transition duration-700"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Hero Right */}
//         <div className="w-full lg:w-[40%] flex justify-center">
//           <img className="max-w-full h-auto" src={heroImage} alt="Hero" />
//         </div>
//       </div>
//     </section>
//   );
// }
