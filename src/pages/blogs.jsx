import { BlogCard } from "../components/blog-card";
import api from "../services/api.js";
import { useState, useEffect } from "react";
import BlogSkeleton from "../pages/blogSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Blogs = () => {
  const [apiDataB, setApiDataB] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/blogs");
        const data = response.data.data;
        if (data.length !== 0) {
          setLoading(false);
        }
        const apiDta = data;
        setApiDataB(apiDta);
      } catch (error) {
        console.log("Failed to fetch listings", error);
      }
    };

    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/blogs/${id}`);
      setApiDataB((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      
      <div className="max-w-[1280px] w-[100%] custom-width lg:px-[40px] xl:px-0 px-[16px] flex flex-col items-center justify-center">
        {/* HERO SECTION  */}
        <div className="w-full flex flex-col text-center py-10 space-y-2">
          <h1 className="text-[#FCC821] font-bold">OUR BLOGS</h1>
          <p className="font-bold text-[40px]">
            We write you blogs worth reading
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="w-full overflow-x-auto">
          {loading ? (
            <div className=" flex flex-col md:flex-row items-center w-full gap-[22px]">
              {[1, 2, 3].map((_, index) => (
                <BlogSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid gap-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full pb-[200px]">
              {apiDataB.map((blg) => (
                <BlogCard blog={blg} handleDelete={handleDelete} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
