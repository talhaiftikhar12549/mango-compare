import Img from "../assets/price tool/img.png";
export default function CardResult() {
  return (
    <>
      <div className="flex w-[100%] py-[30px] rounded-[10px] px-[50px] text-[#05222E] text-[16px] font-[600]">
        <div className="w-[37%] ">
          <div className="flex items-center gap-[20px]">
            <img src={Img} alt="" />
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="w-[12%] flex items-center">
          <p>£ 99</p>
        </div>
        <div className="w-[12%] flex items-center">
          <p>2</p>
        </div>
        <div className="w-[12%] flex items-center">
          <p>4.2</p>
        </div>
        <div className="w-[28%] text-center flex items-center justify-center">
          <div className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px]">
            <button>Visit Pharmacy</button>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] py-[30px] rounded-[10px] px-[50px] text-[#05222E] text-[16px] font-[600]">
        <div className="w-[37%] ">
          <div className="flex items-center gap-[20px]">
            <img src={Img} alt="" />
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="w-[12%] flex items-center">
          <p>£ 99</p>
        </div>
        <div className="w-[12%] flex items-center">
          <p>2</p>
        </div>
        <div className="w-[12%] flex items-center">
          <p>4.2</p>
        </div>
        <div className="w-[28%] text-center flex items-center justify-center">
          <div className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px]">
            <button>Visit Pharmacy</button>
          </div>
        </div>
      </div>
    </>
  );
}
