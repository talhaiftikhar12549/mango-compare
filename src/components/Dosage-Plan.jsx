import tickMark from "../assets/home/tickMark.png";
import cardPattren from "../assets/home/cardPattren.png";
export default function DosagePlan() {
  return (
    <>
      <section className="max-w-[1280px] pb-[100px]">
        <div>
          <div className="w-[80%] mx-auto text-center pt-[100px]">
            <h2 className="text-[28px] font-[700] font-montserrat text-[#05222E]">
              Stick to your GP’s recommended dosage and get the best deals that
              fit your budget.
            </h2>
          </div>

          <div className="flex justify-center gap-[100px] pt-[40px]">


            <div className="rounded-[40px] relative px-[40px] pt-[100px] pb-[40px] max-w-[494px] bg-[#FEF4D3] shadow-2xl">

                <img className="absolute top-0 right-0" src={cardPattren} alt="" />
              <h3 className="text-[48px] font-[700] font-montserrat text-[#05222E]">Mounjaro</h3>
              <p className="text-[16px] max-w-[397px] pt-[11px] pb-[44px] font-[400] font-montserrat text-[#5D6B6F]">
              A dual-action injectable that helps control appetite and blood sugar—get the best prices with Mango!
              </p>
              <div className="flex flex-col gap-y-[30px]"> 
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Price Comparison</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Dose Quantity </p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Reviews</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Rating</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Website Link</p>
                </div>
              </div>

              <div className="pt-[80px]">
                <button className="bg-[#FCC821] cursor-pointer w-full py-[16px] rounded-[14px]  text-[18px] font-[700] font-montserrat text-[#FFFFFF]">Compare</button> 
              </div>
            </div>


           
            <div className="rounded-[40px] relative px-[40px] pt-[100px] pb-[40px] max-w-[494px] bg-[##FFFFFF] shadow-2xl">

                <img className="absolute top-0 right-0" src={cardPattren} alt="" />
              <h3 className="text-[48px] font-[700] font-montserrat text-[#05222E]">Wegovy</h3>
              <p className="text-[16px] pt-[11px] pb-[44px] font-[400] font-montserrat text-[#5D6B6F]">
              A once-weekly injection designed to reduce appetite and aid weight loss—find the best deals with Mango!
              </p>
              <div className="flex flex-col gap-y-[30px]"> 
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Price Comparison</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Dose Quantity </p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Reviews</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Rating</p>
                </div>
                <div className="flex gap-[5px]">
                  <img src={tickMark} alt="" />
                  <p className="text-[#64626A] font-[600] text-[16px] font-montserrat">Website Link</p>
                </div>
              </div>

              <div className="pt-[80px]">
                <button className="bg-[#FCC821] cursor-pointer w-full py-[16px] rounded-[14px]  text-[18px] font-[700] font-montserrat text-[#FFFFFF]">Compare</button> 
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
}
