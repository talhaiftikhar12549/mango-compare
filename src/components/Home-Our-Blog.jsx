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
      <section
        id="blogs"
        className=" lg:px-[40px] xl:px-0 px-[16px] w-full flex justify-center py-[40px] md:py-[48px] bg-gradient-to-r from-[rgb(16_185_129_/_0.05)] to-[rgb(245_158_11_/_0.05)]"
      >
        <div className="max-w-[1280px] custom-width ">
          <div className="d-flex mb-12 w-full justify-content-center align-items-center">
            <h2 className="!text-[24px] md:!text-[24px] text-center !font-[600] text-gray-900 mb-4">
              Our Blogs
            </h2>
            <p className="text-gray-500 !text-[16px] md:!text-[18px] text-center ">
              Stay informed with the latest insights on weight loss treatments.
            </p>
          </div>

          {loading ? (
            <div
              className="flex flex-col md:flex-row items-center w-full gap-[22px]
  sm:min-w-[370px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] 
  sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto"
            >
              {[1, 2, 3].map((_, index) => (
                <BlogSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-stretch w-full gap-[22px]">
                {apiDataB.slice(0, 3).map((blog, index) => (
                  <div
                    key={index}
                    className="group flex flex-col max-w-[413px] flex-1 cursor-pointer border-2 bg-[#FFFFFF] border-[#ffffff] hover:border-[#10b98133] rounded-xl p-4 shadow-sm transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div>
                      <img
                        src={blog.featuredImage || blogImg1}
                        alt={blog.title || "Blog Image"}
                        className="rounded-lg w-full"
                      />
                    </div>

                    <div className="flex flex-col flex-1">
                      <h3 className="text-[22px] pt-[20px] pb-[10px] !font-[600] font-montserrat text-[#000000] group-hover:!text-[#10b981] transition-colors duration-300">
                        {blog.title || "Untitled Blog"}
                      </h3>

                      <p className="text-[14px] font-[400] font-montserrat text-[#5B5C67] flex-1">
                        {getExcerpt(
                          blog.excerpt ||
                            "Lorem ipsum dolor sit amet consectetur. Pellentesque arcu nisl at aliquam vitae donec consequat cursus vel. Viverra.",
                          25
                        )}
                      </p>

                      <NavLink
                        to={`/${blog.slug}`}
                        aria-label={`Read more about ${blog.title}`}
                        title={`Read more about ${blog.title}`}
                        className="inline-flex items-center group"
                      >
                        <h4 className="text-[18px] pt-[10px] font-[600] font-montserrat text-[#000000] group-hover:!text-[#10b981] duration-300 inline-flex items-center cursor-pointer mt-auto">
                          Read More
                          <span className="sr-only"> about {blog.title}</span>
                          <FaArrowRight className="ml-2" />
                        </h4>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-center items-center w-full">
                <NavLink to={"blogs"}>
                  <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md hover:bg-orange-600 transition duration-300">
                    View all Articles
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
