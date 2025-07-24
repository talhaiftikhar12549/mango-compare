import logo from "../../assets/nav/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const logout = () => {
    // Clear token from localStorage if you're using it
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <header className="w-[99.2vw] overflow-x-hidden z-10 fixed top-0 left-0 bg-white lg:px-[20px] px-[16px] py-[6px] border border-b-gray-300 border-white">
      <div className="w-full flex justify-between items-center">
        <div className="z-10">
          <NavLink aria-label="Home" to="/" className="cursor-pointer">
            <img className="max-h-[36px]" src={logo} alt="" />
          </NavLink>
        </div>

        <div className="hidden md:flex justify-between items-center">
          <div className="space-x-2">
            {user ? (
              <button
                onClick={logout}
                className="cursor-pointer text-sm rounded-full text-[#FFFFFF] bg-orange-500 border border-[#FCC821] transition duration-700 font-bold py-[10px] px-[20px]"
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/login"
                aria-label="Login"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFFFF] text-sm rounded-full bg-orange-500 border border-[#FCC821] transition duration-700 font-bold py-[10px] px-[20px]"
                    : "text-[#202244] text-sm rounded-full bg-[#FFFFFF] border border-[#202244] transition duration-700 font-bold py-[10px] px-[20px]"
                }
              >
                <button className=" cursor-pointer  rounded-[10px]">
                  Login
                </button>
              </NavLink>
            )}
            <NavLink
              to="/contact-us"
              aria-label="Contact Now"
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFFFFF] text-sm rounded-full bg-[#FCC821] border border-[#FCC821] transition duration-700 font-bold py-[10px] px-[20px]"
                  : "text-[#202244] text-sm rounded-full bg-[#FFFFFF] border border-[#202244] transition duration-700 font-bold py-[10px] px-[20px]"
              }
            >
              <button className=" cursor-pointer  rounded-[10px]">
                Contact Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
