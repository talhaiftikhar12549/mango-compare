export default function HeroSection({ heading, text, image }) {
  return (
    <>
      <section className="max-w-[1280px] pb-[80px]">
        <div className="flex w-full gap-[101px]">
          <div className="w-[50%]">
            <h1 className="text-[54px] leading-[70px] font-[700] font-montserrat text-[#05222E]">
              {heading}
            </h1>
            <p className="text-[18px] leading-[28px] pt-[20px] font-[500] font-montserrat text-[#6A778B]">
              {text}
            </p>
          </div>

          <div className="flex w-[50%] justify-end items-center">
            <img className="h-full" src={image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
