import { BlogCard } from "../components/blog-card";
import api from "../services/api.js";
import { useState, useEffect } from "react";
const Blogs = () => {
  const [apiDataB, setApiDataB] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/blogs");
        console.log("API Blog List data", response.data.data);
        const data = response.data.data;
        console.log("apiDataB", apiDataB);
        if (data.length !== 0) {
          setLoading(false);
        }
        const apiDta = data;
        console.log("apiDataB", apiDta);
        setApiDataB(apiDta);
      } catch (error) {
        console.log("Failed to fetch listings", error);
      }
    };

    fetchListings();
  }, []);
  return (
    <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] flex flex-col items-center">
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
          <div className="w-full h-[50vh] flex justify-center items-center ">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#FCC821] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid gap-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full pb-[200px]">
            {apiDataB.map((blg, index) => (
              <BlogCard key={index} blog={blg} />
            ) )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
