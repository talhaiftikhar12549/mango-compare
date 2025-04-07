import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 1,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[100%] d-flex justify-content-center align-items-center">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
            Wondering how much Mounjaro costs in the UK?
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[100%] d-flex justify-content-center align-items-center">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
              Not sure where to buy Wegovy at the cheapest price in the UK?
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[100%] d-flex justify-content-center align-items-center">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
            Mango is here to end the Mounjaro vs. Wegovy price debate with…
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
