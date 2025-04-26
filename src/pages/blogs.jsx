import { BlogCard } from "../components/blog-card";

const Blogs = () => {
  return (
    <div className="max-w-[1280px] lg:px-[40px] xl:px-0 px-[16px] flex flex-col items-center">
      {/* HERO SECTION  */}
      <div className="w-full flex flex-col text-center py-10 space-y-2">
        <h1 className="text-[#FCC821] font-bold">OUR BLOGS</h1>
        <p className="font-bold text-[40px]">
          We write you blogs worth reading
        </p>
      </div>

      <div className="grid gap-[40px] grid-cols-3 w-full pb-[200px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};  

export default Blogs