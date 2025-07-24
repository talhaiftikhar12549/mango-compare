import { ImFileText2 } from "react-icons/im";

export default function HeroSection({ heading, text, lowest, totalPharmacy, percentage  }) {
  return (
    <>
      {/* <section className="w-[100%]  custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto relative">
        <div
          className="flex flex-col lg:flex-row justify-between items-top h-full py-[70px] bg-no-repeat bg-cover  bg-center "
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
          <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto z-1 ">
            <div className="w-full lg:w-[60%] z-10">
              <h1 className="text-[32px] sm:text-[40px] text-start md:text-[42px] lg:text-[46px] font-[700] font-montserrat text-[#ffffff] leading-[1.25]">
                {heading}
              </h1>

              <p className="sm:text-[16px] hidden md:flex mt-[20px] leading-[190%] sm:leading-[190%] font-[500] font-montserrat text-[#ffffff] z-10">
                {text}
              </p>
              <p className="sm:text-[16px] hidden md:flex mt-[20px] leading-[190%] sm:leading-[190%] font-[500] font-montserrat text-[#ffffff] z-10">
                {text2}
              </p>

            </div>
          </div>
        </div>
      </section> */}
      <section className="relative w-[100%]  bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white md:!px-6 py-12 md:py-[48px] overflow-hidden">
        <section className="w-[100%]  custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0 "></div>
            <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative ">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                {/* <TrendingDown className="w-8 h-8 text-yellow-200" /> */}
                <div className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 rounded-4xl">
                  Live Price Comparison
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                 {heading} <span className="text-yellow-200"></span> 
              </h1>

              <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
                
                {text}
              </p>
              {/* <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
                
                {text2}
              </p> */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-200">£ {lowest}</div>
                  <div className="text-sm opacity-90">Best Price Found</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-200">{totalPharmacy}</div>
                  <div className="text-sm opacity-90">Pharmacies Compared</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-200">{percentage}%</div>
                  <div className="text-sm opacity-90">Average Weight Loss</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
