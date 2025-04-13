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
        <div className="w-[12%] flex items-center justify-center">
          <p>£ 99</p>
        </div>
        <div className="w-[12%] flex items-center justify-center">
          <p>2</p>
        </div>
        <div className="w-[12%] flex items-center justify-center">
          <p>4.2</p>
        </div>
        <div className="w-[28%] text-center flex items-center justify-center">
          <a href="#">
            <div className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px] border-[2px] hover:border-[2px] border-[#FCC821] hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 cursor-pointer">
              <button className="cursor-pointer">Visit Pharmacy</button>
            </div>
          </a>
        </div>
      </div>
      <div className="flex w-[100%] py-[30px] rounded-[10px] px-[50px] text-[#05222E] text-[16px] font-[600]">
        <div className="w-[37%] ">
          <div className="flex items-center gap-[20px]">
            <img src={Img} alt="" />
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="w-[12%] flex items-center justify-center">
          <p>£ 99</p>
        </div>
        <div className="w-[12%] flex items-center justify-center">
          <p>2</p>
        </div>
        <div className="w-[12%] flex items-center justify-center">
          <p>4.2</p>
        </div>
        <div className="w-[28%] text-center flex items-center justify-center">
          <a href="#">
            <div className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px] border-[2px] hover:border-[2px] border-[#FCC821] hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 cursor-pointer">
              <button className="cursor-pointer">Visit Pharmacy</button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
