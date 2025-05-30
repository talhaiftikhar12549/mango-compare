import { useEffect, useState } from "react";
import blogImg1 from "../assets/home/blog-img1.png"; // fallback image
import { FaArrowRight } from "react-icons/fa";
import api from "../services/api";
import { NavLink } from "react-router-dom";
import BlogSkeleton from "../pages/blogSkeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HomeOurBlog() {
  const getExcerpt = (text, wordLimit = 25) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join("    ") + " ..."
      : text;
  };
  const [apiDataB, setApiDataB] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/blogs");
        const data = response.data.data;
        if (data.length !== 0) {
          setApiDataB(data);
        }
      } catch (error) {
        console.log("Failed to fetch listings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <section className="max-w-[1280px] custom-width lg:px-[40px] xl:px-0 px-[16px] w-full py-[40px] md:py-[50px] ">
        <div className="d-flex pb-[50px] w-full justify-content-center align-items-center">
          <h2 className="text-[39px] text-center font-[700] font-montserrat text-[#05222E]">
            Our Blogs
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col md:flex-row items-center w-full gap-[22px]">
            {[1, 2, 3].map((_, index) => (
              <BlogSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center w-full gap-[22px]">
            {apiDataB.slice(0, 3).map((blog, index) => (
              <div key={index} className="max-w-[413px]">
                <div>
                  <img
                    src={blog.featuredImage || blogImg1}
                    alt={blog.title || "Blog Image"}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-[22px] pt-[20px] pb-[10px] font-[500] font-montserrat text-[#000000]">
                    {blog.title || "Untitled Blog"}
                  </h3>
                  <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67]">
                    {getExcerpt(
                      blog.excerpt ||
                        "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at aliquam vitae donec consequat cursus vel. Viverra.",
                      25
                    )}
                  </p>
                  <NavLink to={`/single-blog/${blog.slug}`}>
                    <h4 className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#FCC821] inline-flex items-center cursor-pointer">
                      Read More
                      <FaArrowRight className="ml-2" />
                    </h4>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
