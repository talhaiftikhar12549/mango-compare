import { BlogCard } from "../components/blog-card";
import api from "../services/api.js";
import { useState, useEffect } from "react";
import BlogSkeleton from "../pages/blogSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet";
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
      <Helmet>
        {/* Meta Title */}
        <title>Our Blog - Mango Compare UK</title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Explore Mango Compare’s blog for expert insights on GP‑prescribed weight loss medications like Mounjaro and Wegovy, cost comparisons, cost‑saving tips, and the latest health news."
        />
        {/* Focused Keyphrase (as keyword) */}
        <meta
          name="keywords"
          content="Mounjaro and Wegovy news and tips"
        />
        {/* Custom Meta Tags */}
        <meta name="category" content="Weight Loss News and Tips" />

        <link rel="canonical" href="https://mangocompare.co.uk/blogs" />
      </Helmet>
      <div className="max-w-[1280px] w-[100%] custom-width lg:px-[40px] xl:px-0 px-[16px] flex flex-col items-start justify-start">
        {/* HERO SECTION  */}
        <div className="w-full flex flex-col text-center py-10 space-y-2">
          <h1 className="text-orange-500 font-bold">OUR BLOGS</h1>
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
