import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/home/img1.png";
import img2 from "../assets/home/img2.png";
import img3 from "../assets/home/img3.png";
import img4 from "../assets/home/img4.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const slides = [
    {
      text: "Wondering how much Mounjaro costs in the UK?",
      image: img1,
    },
    {
      text: "Not sure where to buy Wegovy at the cheapest price in the UK?",
      image: img2,
    },
    {
      text: "Mango is here to end the Mounjaro vs. Wegovy price debate with…",
      image: img3,
    },
    {
      text: "Effortless price comparisons for weight loss meds in the UK!",
      image: img4,
    },
  ];

  return (
    <div className="w-[95%] max-w-[1280px] mx-auto py-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-4 sm:px-8 md:px-16"
          >
            <div className="w-full">
              <div
                className="relative rounded-[20px] overflow-hidden min-h-[216px] sm:min-h-[242px] lg:min-h-[300px] xl:min-h-[416px] bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Orange overlay */}
                <div className="absolute inset-0 opacity-70"></div>

                {/* Text */}
                <h2 className="relative z-10 text-white font-[900] text-[28px] sm:text-[36px] md:text-[42px] xl:text-[48px] font-montserrat text-center px-4">
                  {slide.text}
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
