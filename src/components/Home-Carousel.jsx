import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
  };

  return (
    <div className="w-[95%] max-w-[1280px] mx-[20px] py-10 ">
      <Slider {...settings}>
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Wondering how much Mounjaro costs in the UK?
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Not sure where to buy Wegovy at the cheapest price in the UK?
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Mango is here to end the Mounjaro vs. Wegovy price debate with…
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Effortless price comparisons for weight loss meds in the UK!
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "10px",
//   };

//   return (
//     <div className="w-[95%] max-w-[1280px] mx-[20px] py-10 ">
//       <Slider {...settings}>
//         <div className="flex justify-center items-center">
//           <div className="w-[100%] px-[90px]">
//             <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
//               <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
//                 Wondering how much Mounjaro costs in the UK?
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="w-[100%] px-[90px]">
//             <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
//               <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
//                 Not sure where to buy Wegovy at the cheapest price in the UK?
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="w-[100%] px-[90px]">
//             <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
//               <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
//                 Mango is here to end the Mounjaro vs. Wegovy price debate with…
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="w-[100%] px-[90px]">
//             <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
//               <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
//                 Effortless price comparisons for weight loss meds in the UK!
//               </h2>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;







// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Card } from "@/components/ui/card";
// import "@fontsource/montserrat/900.css";

// const slides = [
//   {
//     text: "Wondering how much Mounjaro costs in the UK?",
//   },
//   {
//     text: "Not sure where to buy Wegovy at the cheapest price in the UK?",
//   },
//   {
//     text: "Mango is here to end the Mounjaro vs. Wegovy price debate with…",
//   },
//   {
//     text: "Effortless price comparisons for weight loss meds in the UK!",
//   },
// ];

// export const MedicationCarousel = () => {
//   return (
//     <div className="w-[95%] max-w-[1280px] mx-auto py-10">
//       <Carousel
//         opts={{
//           align: "center",
//           loop: true,
//           slidesToScroll: 1,
//           containScroll: false,
//         }}
//         className="w-full cursor-grab active:cursor-grabbing"
//       >
//         <CarouselContent className="-ml-4">
//           {slides.map((slide, index) => (
//             <CarouselItem key={index} className="pl-4 basis-full md:basis-[60%] relative">
//               <div className="p-1">
//                 <Card className="bg-[#FF9E34] p-8 md:p-12 lg:p-16 rounded-[20px] flex items-center justify-center min-h-[300px]">
//                   <h2 className="text-white font-montserrat font-[900] text-2xl md:text-3xl lg:text-4xl text-center">
//                     {slide.text}
//                   </h2>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="hidden md:flex" />
//         <CarouselNext className="hidden md:flex" />
//       </Carousel>
//     </div>
//   );
// };