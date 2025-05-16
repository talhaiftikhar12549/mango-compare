import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => (
  <div className="max-w-[413px] w-full pb-[50px]">
    <Skeleton height={200} borderRadius={8} />
    <div className="pt-[20px] pb-[10px]">
      <Skeleton height={24} width="75%" />
    </div>
    <Skeleton count={2} height={14} style={{ marginBottom: "8px" }} />
    <Skeleton height={18} width="30%" />
  </div>
);
export default BlogSkeleton