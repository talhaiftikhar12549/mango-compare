import logo from "../assets/nav/logo.png";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  // const options = [
  //   { label: "Home", path: "/" },
  //   { label: "Menu", path: "/menu" },
  //   { label: "About Us", path: "/aboutus" },
  // ];
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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#222222] font-bold border-b pb-[10px] solid-2px-[#222222]"
                        : "text-[#6A778B] font-bold"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mounjaro-compare"
                    className={({ isActive }) =>
                      isActive
                       ? "text-[#222222] font-bold border-b pb-[10px] solid-2px-[#222222]"
                        : "text-[#6A778B] font-bold"
                    }
                  >
                    Mounjaro {" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/wegovy-compare"
                    className={({ isActive }) =>
                      isActive
                       ? "text-[#222222] font-bold border-b pb-[10px] solid-2px-[#222222]"
                        : "text-[#6A778B] font-bold"
                    }
                  >
                    Wegovy {" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#222222] font-bold border-b pb-[10px] solid-2px-[#222222]"
                        : "text-[#6A778B] font-bold"
                    }
                  >
                   Blogs{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
            <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] rounded-[10px] bg-[#FCC821] border border-[#FCC821] transition duration-700 font-bold  py-[15px] px-[30px]"
                        : "text-[#202244] rounded-[10px] bg-[#FFFFFF] border border-[#202244] transition duration-700 font-bold py-[15px] px-[30px] "
                  }
                >
              <button className=" cursor-pointer  rounded-[10px]">
               
                  Contant Now
                
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}
