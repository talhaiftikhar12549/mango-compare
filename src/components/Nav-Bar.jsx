import logo from "../assets/nav/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" w-full max-w-[1280px] custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto py-[16px]">
        <div className="flex justify-between items-center max-w-[1280px]">
          <div className="w-[50%] md:w-[25%]">
            <NavLink aria-label="Home" to="/" className="pointer">
              <img className="max-h-[57px]" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="hidden lg:flex justify-between items-center w-[65%] md:w-[70%]">
            <div className="space-x-0 md:space-x-4 lg:space-x-7 text-xs xl:text-lg ">
              <NavLink
                to="/"
                aria-label="Home"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold border-b pb-[10px] solid-2px-[#FCC821]"
                    : "text-[#6A778B] font-bold"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/mounjaro-compare"
                aria-label="Mounjaro"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold border-b pb-[10px] solid-2px-[#FCC821]"
                    : "text-[#6A778B] font-bold"
                }
              >
                Mounjaro{" "}
              </NavLink>

              <NavLink
                to="/wegovy-compare"
                aria-label="Wegovy"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold border-b pb-[10px] solid-2px-[#FCC821]"
                    : "text-[#6A778B] font-bold"
                }
              >
                Wegovy{" "}
              </NavLink>

              <NavLink
                to="/blogs"
                aria-label="Blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold border-b pb-[10px] solid-2px-[#FCC821]"
                    : "text-[#6A778B] font-bold"
                }
              >
                Blogs{" "}
              </NavLink>

              <NavLink
                to="/posts"
                aria-label="Forum"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold border-b pb-[10px] solid-2px-[#FCC821] mr-[6px] lg:mr-[16px]"
                    : "text-[#6A778B] font-bold mr-[6px] lg:mr-[16px]"
                }
              >
                Forum{" "}
              </NavLink>
            </div>

            <div className="space-x-2">
              {user ?
                <button onClick={logout} className=" cursor-pointer  text-[#FFFFFF] rounded-[10px] bg-orange-500 border border-orange-500 transition duration-700 font-bold  py-[12px] px-[32px]">
                  Log Out
                </button>
                :
                <NavLink
                  to="/login"
                  aria-label="Login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] rounded-[10px] bg-orange-500 border border-orange-500 transition duration-700 font-bold  py-[12px] px-[32px]"
                      : "text-[#202244] rounded-[10px] bg-[#FFFFFF] border border-[#202244] transition duration-700 font-bold py-[12px] px-[32px]"
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
                    ? "text-[#FFFFFF] rounded-[10px] bg-orange-500 border border-orange-500 transition duration-700 font-bold  py-[12px] px-[32px]"
                    : "text-[#202244] rounded-[10px] bg-[#FFFFFF] border border-[#202244] transition duration-700 font-bold py-[12px] px-[32px]"
                }
              >
                <button className=" cursor-pointer  rounded-[10px]">
                  Contact Now
                </button>
              </NavLink>
            </div>
          </div>

          <div className="lg:hidden flex">
            <div>
              <div
                onClick={toggleMenu}
                className="bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 h-[40px] w-[40px] flex flex-col justify-center items-center cursor-pointer rounded"
              >
                <div className="px-3 my-0.5 py-[1px]  bg-[#FFFFFF]"></div>
                <div className="px-3 my-0.5 py-[1px]  bg-[#FFFFFF]"></div>
                <div className="px-3 my-0.5 py-[1px]  bg-[#FFFFFF]"></div>
              </div>
              {isOpen && (
                <span className="absolute right-3 top-20  border bg-[#FFFFFF] border-orange-500 rounded-md shadow-xl mt-2 w-48 z-10">
                  <p
                    onClick={toggleMenu}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#222222] font-bold text-center"
                  >
                    <NavLink aria-label="Home" className={"block w-[100%]"} to="/">
                      Home
                    </NavLink>
                  </p>
                  <p
                    onClick={toggleMenu}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#222222] font-bold text-center"
                  >
                    <NavLink
                      className={"block w-[100%]"}
                      to="/mounjaro-compare"
                      aria-label="Mounjaro"
                    >
                      Mounjaro
                    </NavLink>
                  </p>
                  <p
                    onClick={toggleMenu}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#222222] font-bold text-center"
                  >
                    <NavLink aria-label="Wegovy" className={"block w-[100%]"} to="/wegovy-compare">
                      Wegovy
                    </NavLink>
                  </p>
                  <p
                    onClick={toggleMenu}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#222222] font-bold text-center"
                  >
                    <NavLink aria-label="Blogs" className={"block w-[100%]"} to="/blogs">
                      Blogs
                    </NavLink>
                  </p>
                  <p
                    onClick={toggleMenu}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#222222] font-bold text-center"
                  >
                    <NavLink aria-label="Forum" className={"block w-[100%]"} to="/posts">
                      Forum
                    </NavLink>
                  </p>
                  <p
                    onClick={toggleMenu}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#222222] font-bold text-center"
                  >
                    <NavLink
                      to="/contact-us"
                      aria-label="Contact Us"
                      className={({ isActive }) =>
                        isActive
                          ? "block w-full text-[#FFFFFF] rounded-[10px] bg-orange-500 border border-orange-500 transition duration-700 font-bold py-[10px] px-[15px]"
                          : "block w-full text-[#202244] rounded-[10px] bg-[#FFFFFF] border border-[#202244] transition duration-700 font-bold py-[10px] px-[15px] lg:px-[30px]"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </p>
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
