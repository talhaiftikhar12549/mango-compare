import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { PiShareLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const BlogCard = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleClick = () => {
    setShowMoreInfo(true);
  };
  return (
    <>
      <div className="bg-white shadow-lg w-[100%] p-[24px] space-y-5 rounded-xl">
        <p className="text-[#FCC821] font-bold">TECHNOLOGY</p>
        <h3 className="text-[28px] font-[400] text-[#05222E]">
          Make sure to include in your wheel hire
        </h3>

        <p className="text-[#666666] font-[16px]">
          Get all your ducks in a row good optics close the loop and zeitgeist
          so manage quarterly sales are great to hear for me Pipeline quarterly
          sales are at an all-time low future-proof, or 60% to 30% is a lot of
          persent Take five
        </p>

        <div className="flex space-x-5 text-[#666666]">
          <span className="flex justify-center items-center space-x-2 ">
            <FaEye /> <p>5k views</p>
          </span>

          <span className="flex justify-center items-center space-x-2 ">
            <PiShareLight /> <p>5k views</p>
          </span>

          <span className="flex justify-center items-center space-x-2 ">
            <AiFillLike /> <p>5k views</p>
          </span>
        </div>
        <NavLink to="/single-blog">
          <button
            className="bg-[#FCC821] cursor-pointer px-10 mt-[67px] py-3 rounded-full  text-white text-semibold flex justify-center items-center space-x-5 hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 border-[2px] border-[#FCC821]"
            type="submit"
            onClick={handleClick}
          >
            <p>Read More</p> <FaArrowRight />
          </button>
        </NavLink>
      </div>
      {showMoreInfo && <singleBlog />}
    </>
  );
};
