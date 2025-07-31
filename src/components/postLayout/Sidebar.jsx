import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { MdMoreTime } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { ImLeaf } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { selectedCategory, selectedCommunity } from "../../redux toolkit/ForumsSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
   const dispatch = useDispatch();
   const getSelectedCommunity = useSelector((state) => state.forums.selectedCommunity);
   const getSelectedCategory = useSelector((state) => state.forums.selectedCategory);

   const navigate = useNavigate()

  const communities = [
    { value: "", label: "All" },
    { value: "General Discussion", label: "General Discussion" },
    { value: "Wegovy Experience", label: "Wegovy Experience" },
    { value: "Mounjaro Experience", label: "Mounjaro Experience" },
    { value: "Lifestyle & Diet", label: "Lifestyle & Diet" },
    { value: "News & Research", label: "News & Research" },
  ];


  return (
      <div className={` w-full lg:w-[280px] fixed left-0 top-0 md:top-12 lg:top-0 lg:pt-10 lg:border-r border-gray-300 z-2 ${showSidebar ? "h-[100vh] bg-black/50" : "h-10"}`}>

        <div className={`lg:hidden flex justify-start z-10 items-center py-4 ${showSidebar ? "" : "mt-14"} pl-5`}>
          {/* <h2 className="text-xl font-bold">Forums</h2> */}
          <button
            className="text-2xl text-[#FCC821]"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <HiMenu />
          </button>
        </div>

        <div className={`w-2/3 sm:w-1/3 lg:w-full lg:border-0 border-gray-300 lg:bg-transparent lg:py-6 space-x-0 md:space-x-5 ${showSidebar ? "bg-white md:border-r" : "hidden"}`}>
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
                  navigate("/")
                }}
                className={`text-[14px] font-[500] mt-2 px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                  getSelectedCategory.value === "recents"
                    ? ""
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                 <GoHome className="text-2xl" />
                Home
              </h4>

               <h4
                onClick={() => {
                  dispatch(selectedCategory({
                    value: "recents",
                    label: "Recent Posts",
                  }));
                  // setSelectedCategory({
                  //   value: "popular",
                  //   label: "Most Popular",
                  // });
                  setShowSidebar(false);
                }}
                className={`text-[14px] font-[500] mt-2 px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                  getSelectedCategory.value === "recents"
                    ? "text-orange-500 font-semibold bg-gray-50"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <MdMoreTime className="text-2xl" />
                Recents
              </h4>

              <h4
                onClick={() => {
                  dispatch(selectedCategory({
                    value: "popular",
                    label: "Most Popular",
                  }));
                  // setSelectedCategory({
                  //   value: "popular",
                  //   label: "Most Popular",
                  // });
                  setShowSidebar(false);
                }}
                className={`text-[14px] font-[500] mt-2 px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                  getSelectedCategory.value === "popular"
                    ? "text-orange-500 font-semibold bg-gray-50"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <HiOutlineArrowTopRightOnSquare className="text-2xl" />
                Popular
              </h4>
            </div>

            <div className="border-t border-gray-300 mt-3">
              <h4 className="text-lg text-[14px] text-gray-400 font-[400] px-8 pt-5 pb-[12px] ">
                Communities
              </h4>
            </div>

            <div className="w-full  px-[20px]">
              {communities.map((community, index) => (
                <div className="py-[2px] " key={index}>
                  <div
                    onClick={() => {
                      dispatch(selectedCommunity(community));
                      // setSelectedCommunity(community);
                      setShowSidebar(false);
                    }}
                    className={`flex space-x-2 items-center cursor-pointer py-[8px] hover:bg-gray-50  p-[16px] rounded-[6px] transition-colors duration-300 ease-in-out ${
                      getSelectedCommunity.value === community.value
                        ? "text-orange-500 font-semibold bg-gray-50 "
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    <ImLeaf />
                    <p className="text-sm">{community.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
