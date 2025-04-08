import logo from "../assets/nav/logo.png";
export default function NavBar() {
  return (
    <>
      <header className=" w-full max-w-[1280px] pt-[32px] pb-[34px]">
        <div className="flex justify-between items-center max-w-[1280px]">
          <div className="w-[40%]">
            <img src={logo} alt="" />
          </div>
          <div className="flex justify-between items-center w-[60%]">
            <div>
              <ul className="flex gap-[30px] text-[16px] font-[500] font-montserrat text-[#222222]">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a> 
                </li>
                <li>
                  <a href="">Compare</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="text-[#000000] cursor-pointer py-[15px] px-[30px] rounded-[10px] border-[1px] border-solid-[#FCC821] bg-[#FFFFFF]">Contant Now</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
