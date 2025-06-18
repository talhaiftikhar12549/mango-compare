import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const BlogCard = ({blog, handleDelete}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { user } = useAuth(); 

  const handleClick = () => {
    setShowMoreInfo(true);
  };
  const getExcerpt = (text, wordLimit = 25) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  return (
   
      <div key={blog._id} className="flex flex-col md:flex-row items-center w-full gap-[22px]">
        <div className="max-w-[413px] flex flex-col justify-between h-[100%]">
          <div className="flex items-start ">
            { blog.featuredImage ? <img
              src={blog.featuredImage}
              alt={blog.title}
              className="rounded-lg"
            />: ""}
          </div>

          <div className="flex flex-col justify-between flex-1">
            <h3 className="text-[22px] pt-[20px] pb-[10px] font-[500] font-montserrat text-[#000000]">
              { blog.title  }
            </h3>

            <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67]">
              {getExcerpt(
                blog.excerpt ? blog.excerpt :
                "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at aliquam vitae donec consequat cursus vel. Viverra.",
                25
              )}
            </p>

            <NavLink to={`/${blog.slug}`}>
              <h4
                onClick={handleClick}
                className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#FCC821] inline-flex items-center cursor-pointer"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </h4>
            </NavLink>

            {user && user.role === "admin" ?
              <button
                onClick={() => handleDelete(blog._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button> : ""
            }
          </div>
        </div>
      </div>
   
  );
};
