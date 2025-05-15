import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { PiShareLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const BlogCard = (blog) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const handleClick = () => {
    setShowMoreInfo(true);
  };
  return (
    <>
      <div className="bg-white shadow-lg w-[100%] p-[24px] space-y-5 rounded-xl">
        <p className="text-[#FCC821] font-bold">{blog.blog.categories[0]}</p>
        {console.log(blog.blog.categories)}
        <h3 className="text-[28px] font-[400] text-[#05222E] ">
          {blog.blog.title}
        </h3>

        <p className="text-[#666666] font-[16px] line-clamp-5">
          {blog.blog.excerpt}
        </p>

        <div className="flex space-x-5 text-[#666666]">
          <span className="flex justify-center items-center space-x-2 ">
            <FaEye /> <p>{blog.blog.views} views</p>
          </span>

          {/* <span className="flex justify-center items-center space-x-2 ">
            <PiShareLight /> <p>5k views</p>
          </span>

          <span className="flex justify-center items-center space-x-2 ">
            <AiFillLike /> <p>5k views</p>
          </span> */}
        </div>
        <NavLink to={`/single-blog/${blog.blog.slug}`}>
          <button
            className="bg-[#FCC821] cursor-pointer px-10 mt-[67px] py-3 rounded-full  text-white text-semibold flex justify-center items-center space-x-5 hover:text-[#FCC821] hover:bg-[#ffffff] transition duration-700 border-[2px] border-[#FCC821]"
            type="submit"
            onClick={handleClick}
          >
            <p>Read More</p> <FaArrowRight />
          </button>
        </NavLink>
      </div>
    </>
  );
};
