import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import blogImageFallback from "../assets/Post Thumbnail.png";
import authImage from "../assets/9e3a4d582a45a8c496e0fef1f9efb92f06fd9293.jpg";

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
      <section className="max-w-[1280px] mx-auto h-[50vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#FCC821] border-t-transparent"></div>
      </section>
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
      <div className="flex">
        <p className="py-[1px] px-[10px] bg-[#FCC821] rounded-[3px] text-sm sm:text-base">
          {blog.categories || "General"}
        </p>
      </div>

      <h1 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold leading-tight mt-4">
        {blog.title}
      </h1>

      <div className="flex flex-col sm:flex-row justify-between pt-4 text-[#515151] text-sm sm:text-[14px] font-semibold gap-2">
        <p>Published Date: {new Date(blog.createdAt).toLocaleDateString()}</p>
        <p>Views: {blog.views || 0}</p>
      </div>

      <div className="pt-5">
        <img
          className="w-full rounded-md"
          src={blog.image || blogImageFallback}
          alt="Blog Thumbnail"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full h-[42px] w-[42px]"
            src={authImage}
            alt="Author"
          />
          <p className="font-bold text-sm sm:text-[14px]">
            {blog.author?.name || "admin"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(blog.tags?.[0]?.split(",") || []).map((tag, i) => (
            <p
              key={i}
              className="py-[8px] px-[10px] bg-[#FCC821] rounded-[8px] text-sm sm:text-base"
            >
              {tag.trim()}
            </p>
          ))}
        </div>
      </div>

      <div className="py-6">
        <p className="text-[30px] sm:text-[18px] font-[600] text-[#05222E] leading-[160%] whitespace-pre-line">
          {blog.excerpt}
        </p>
      </div>

      <div className="py-6">
        <p className="text-[16px] sm:text-[14px] text-[#434343] leading-[160%]">
          {blog.content}
        </p>
      </div>
    </section>
  );
}
