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
    <div className="w-[95%] max-w-[1280px] mx-auto py-10 ">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Wondering how much Mounjaro costs in the UK?
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Not sure where to buy Wegovy at the cheapest price in the UK?
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[100%] px-[90px]">
            <div className="bg-[#FF9E34]  p-[90px] rounded-[20px]">
              <h2 className="text-[#ffffff] font-[900] text-[64px] lg:text-[42px] font-montserrat">
                Mango is here to end the Mounjaro vs. Wegovy price debate with…
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
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
