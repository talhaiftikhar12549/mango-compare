export default function HeroSection({ heading, text, image }) {
  return (
    <>
      <section className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto pb-[80px]">
        <div className="flex flex-col md:flex-row w-full gap-[40px] md:gap-[80px] items-start">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight md:leading-[70px] font-[700] font-montserrat text-[#05222E]">
              {heading}
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-[24px] md:leading-[28px] pt-[16px] font-[500] font-montserrat text-[#6A778B]">
              {text}
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <img className="max-w-full h-auto" src={image} alt="Hero Section" />
          </div>
        </div>
      </section>
    </>
  );
}
