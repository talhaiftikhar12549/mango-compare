import { BlogCard } from "../components/blog-card";

const Blogs = () => {
  return (
    <div className="lg:w-9/12 xl:w-8/12 flex flex-col items-center">
      {/* HERO SECTION  */}
      <div className="w-full flex flex-col text-center py-10 space-y-2">
        <h1 className="text-[#FCC821] font-bold">OUR BLOGS</h1>
        <p className="font-bold text-[40px]">
          We write you blogs worth reading
        </p>
      </div>

      <div className="grid gap-4 grid-cols-3 w-full">
        <BlogCard />
      </div>
    </div>
  );
};  

export default Blogs