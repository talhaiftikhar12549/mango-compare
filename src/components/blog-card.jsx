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
      <div className="flex flex-col md:flex-row items-center w-full gap-[22px]">
        <div className="max-w-[413px]">
          <img
            src={blog.blog.featuredImage}
            alt={blog.blog.title}
            className="rounded-lg"
          />
          <h3 className="text-[22px] pt-[20px] pb-[10px] font-[500] font-montserrat text-[#000000]">
            {blog.blog.title}
          </h3>
          <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67]">
            {blog.blog.excerpt ||
              "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at aliquam vitae donec consequat cursus vel. Viverra."}
          </p>
          <NavLink to={`/single-blog/${blog.blog.slug}`}>
            <h4
              onClick={handleClick}
              className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#FCC821] inline-flex items-center cursor-pointer"
            >
              Read More
              <FaArrowRight className="ml-2" />
            </h4>
          </NavLink>
        </div>
      </div>
    </>
  );
};
