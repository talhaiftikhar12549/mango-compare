import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Carousel = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true} // Enables continuous looping
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 1,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex justify-center items-center w-auto">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
              Wondering how much Mounjaro costs in the UK?
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-auto">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
              Wondering how much Mounjaro costs in the UK?
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-auto">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
              Wondering how much Mounjaro costs in the UK?
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center w-auto">
          <div className="bg-[#FF9E34] w-[80%] p-[90px] rounded-[20px]">
            <h2 className="text-[#ffffff] font-[900] text-[64px] font-montserrat">
              Wondering how much Mounjaro costs in the UK?
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
