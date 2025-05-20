import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import blogImageFallback from "../assets/Post Thumbnail.png";
import authImage from "../assets/9e3a4d582a45a8c496e0fef1f9efb92f06fd9293.jpg";
import { FaEye } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import SkeletonRow from "./singleBlogSkeleton";

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${slug}`);
        setBlog(response.data.data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <>
        <SkeletonRow />
      </>
    );
  }

  if (!blog) {
    return (
      <section className="max-w-[1280px] mx-auto py-20 text-center">
        <p className="text-[32px] font-[600] text-[#000000]">Blog not found.</p>
      </section>
    );
  }

  return (
    <section className="max-w-[1280px] custom-width px-4 sm:px-6 lg:px-[40px] xl:px-0 mx-auto pb-[80px]">
      <div className=" w-[100%] md:w-[75%] flex justify-content-center items-center flex-col mx-auto">
        <div className="w-[100%] flex justify-start items-center">
          <p className="py-[1px] px-[10px] bg-[#FCC821] rounded-[3px] text-sm sm:text-base">
            {blog.categories || "General"}
          </p>
        </div>

        <h1 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold leading-tight mt-4">
          {blog.title}
        </h1>

        <div className="pt-5 w-[100%] flex justify-center items-center">
          <img
            className="w-fit h-auto rounded-m "
            src={blog.featuredImage || blogImageFallback}
            alt="Blog Thumbnail"
          />
        </div>

        <div className="flex flex-col w-[100%] justify-start items-center sm:flex-row  gap-4 mt-4">
          <div className="flex gap-3 items-center">
            <img
              className="rounded-full h-[42px] w-[42px]"
              src={authImage}
              alt="Author"
            />
            <p className="font-bold text-sm sm:text-[14px]">
              {blog.author?.name || "admin"}
            </p>
            <div className="flex flex-row justify-between pl-[10px] sm:pl-[30px]  text-[#515151] text-sm sm:text-[16px] font-semibold sm:gap-9 gap-6">
              <div className="flex items-center justify-center">
                <FaRegCalendarAlt /> &nbsp;
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>

              <div className="flex items-center justify-center">
                <FaEye /> &nbsp; {blog.views || 0}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pt-4 text-[#515151] text-sm sm:text-[14px] font-semibold gap-5"></div>
        </div>

        <div className="py-6">
          <p className="text-[18px] sm:text-[24px] font-[600] text-[#05222E] leading-[160%] whitespace-pre-line">
            {blog.excerpt}
          </p>
        </div>

        <div className="py-6">
          <p className="text-[16px] sm:text-[14px] text-[#434343] leading-[160%]">
            {blog.content}
          </p>
        </div>
      </div>
    </section>
  );
}
