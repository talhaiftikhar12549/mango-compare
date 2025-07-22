import logo from "../../assets/nav/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {IoSearchOutline} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux toolkit/ForumsSlice";

export default function ForumsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  const user = localStorage.getItem("user")

  const logout = () => {
    // Clear token from localStorage if you're using it
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');

    navigate('/login');

  };
  const dispatch = useDispatch();

  const getSearch = useSelector((state) => state.forums.search);

  const handleSearch = (e) => {
    dispatch(search(e.target.value));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
      <header className="w-full z-10 fixed top-0 left-0 bg-white lg:px-[20px] px-[16px] py-[6px] border border-b-gray-300 border-white">
        <div className="w-full flex justify-between items-center">
          <div className="z-10">
            <NavLink aria-label="Home" to="/" className="pointer">
              <img className="max-h-[36px]" src={logo} alt="" />
            </NavLink>
          </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="flex items-center w-2/3 md:w-1/2">
                <IoSearchOutline className="-mr-7 z-2 text-gray-700 text-lg" />
                  <input
                    type="search"
                    value={getSearch}
                    onChange={handleSearch}
                    placeholder="Search Mango"
                    className="w-full bg-gray-200 rounded-full py-[8px] pl-10 pr-7 text-gray-700"
                  />
                  
                </div>
              </div>

          <div className="hidden md:flex justify-between items-center">         
            <div className="space-x-2">
              {user ?
                <button onClick={logout} className="cursor-pointer text-sm rounded-full text-[#FFFFFF] bg-orange-500 border border-[#FCC821] transition duration-700 font-bold py-[10px] px-[20px]">
                  Log Out
                </button>
                :
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

              }
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
