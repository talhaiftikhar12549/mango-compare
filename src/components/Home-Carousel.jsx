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
    centerPadding: "0px", // Center properly on all screens
  };

  return (
    <div className="w-[95%] max-w-[1280px] mx-auto py-10">
      <Slider {...settings}>
        {[
          "Wondering how much Mounjaro costs in the UK?",
          "Not sure where to buy Wegovy at the cheapest price in the UK?",
          "Mango is here to end the Mounjaro vs. Wegovy price debate with…",
          "Effortless price comparisons for weight loss meds in the UK!",
        ].map((text, index) => (
          <div
            key={index}
            className="flex justify-center items-center  px-4 sm:px-8 md:px-16"
          >
            <div className="w-full">
              <div className="bg-[#FF9E34] p-6 sm:p-10 md:p-16 md:min-h-[317px] rounded-[20px] min-h-[216px] sm:min-h-[242px] lg:min-h-[300px] xl:min-h-[416px]">
                <h2 className="text-white font-[900] text-[28px] sm:text-[36px] md:text-[42px] xl:text-[64px] font-montserrat text-center">
                  {text}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
