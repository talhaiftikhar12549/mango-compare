import { useState } from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

export const AdminSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`h-[100vh] w-full lg:w-[280px] fixed left-0 top-0 md:top-12 lg:top-0 lg:pt-14 lg:border-r border-gray-300 z-2 ${
        showSidebar ? "bg-black/50" : ""
      }`}
    >
      <div
        className={`lg:hidden flex justify-start z-10 items-center py-4 ${
          showSidebar ? "" : "mt-14"
        } pl-5`}
      >
        <button
          className="text-2xl text-[#FCC821]"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <HiMenu />
        </button>
      </div>

      <div
        className={`w-2/3 sm:w-1/3 lg:w-full lg:border-0 border-gray-300 lg:bg-transparent lg:py-6 space-x-0 md:space-x-5 ${
          showSidebar ? "bg-white md:border-r" : ""
        }`}
      >
        {/* Sidebar */}
        <div
          className={`bg-white h-screen md:bg-transparent transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } md:relative md:block `}
        >
          {/* Close button on mobile sidebar */}
          <div className="lg:hidden flex justify-end p-4 ">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-2xl text-gray-600 cursor-pointer hover:text-gray-400"
            >
              <HiX />
            </button>
          </div>

          <div className="py-[10px] pl-5">
            <h4
              onClick={() => {
                navigate("");
                setShowSidebar(false);
              }}
              className={`text-[14px] font-[500] mt-2 px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                location.pathname === "/admin"
                  ? "text-orange-500 font-semibold bg-gray-50"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              <HiOutlineArrowTopRightOnSquare className="text-2xl" />
              Manage Medicines
            </h4>

            <h4
              onClick={() => {
                navigate("create-blog");
                setShowSidebar(false);
              }}
              className={`text-[14px] font-[500] mt-2 px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                location.pathname === "/admin/create-blog"
                  ? "text-orange-500 font-semibold bg-gray-50"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              <HiOutlineArrowTopRightOnSquare className="text-2xl" />
              Create Blog
            </h4>

            <h4
              onClick={() => {
                navigate("form-info");
                setShowSidebar(false);
              }}
              className={`text-[14px] mt-2 font-[500] px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                location.pathname === "/admin/form-info"
                  ? "text-orange-500 font-semibold bg-gray-50"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              <HiOutlineArrowTopRightOnSquare className="text-2xl" />
              Submitted Forms
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
