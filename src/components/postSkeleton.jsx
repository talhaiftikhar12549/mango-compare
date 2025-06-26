import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ForumPageSkeleton = () => {
  return (
    <div className="max-w-[1280px] w-full lg:px-[40px] xl:px-0 px-[16px] mx-auto">
      {/* Top bar with button */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="w-[25%]">
          <Skeleton width="60%" height={30} />
        </div>
        <div className="w-[75%] flex justify-end space-x-4">
          <Skeleton width={120} height={40} />
        </div>
      </div>

      {/* Main layout */}
      <div className="w-full flex space-x-5 py-10">
        {/* Sidebar skeleton */}
        <div className="w-[25%] border-r border-gray-300 space-y-4">
          <Skeleton height={40} width="80%" className="ml-4" />
          <Skeleton height={40} width="80%" className="ml-4 mb-2" />

          <div className="border-t border-gray-300 pt-4 space-y-3 ml-4">
            <Skeleton width="60%" height={20} />
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} height={30} width="90%" />
            ))}
          </div>
        </div>

        {/* Right: search + posts */}
        <div className="w-[75%] space-y-6">
          {/* Search bar */}
          <div className="flex items-center w-[50%] mx-auto">
            <Skeleton height={40} width="100%" />
          </div>

          {/* Post cards */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-md shadow-sm border border-gray-100 relative space-y-3"
            >
              {/* Header row: Avatar + Admin + Date */}
              <div className="flex items-center space-x-3">
                <Skeleton circle height={40} width={40} />
                <div className="flex flex-col">
                  <Skeleton width={100} height={10} />
                  <Skeleton width={60} height={10} />
                </div>
              </div>

              {/* Post title and body */}
              <Skeleton height={20} width="70%" />
              <Skeleton count={2} height={12} />

              {/* Footer buttons */}
              <div className="flex items-center space-x-4 mt-2">
                <Skeleton width={50} height={30} />
                <Skeleton width={50} height={30} />
                <Skeleton width={70} height={30} />
              </div>

              {/* Community tag */}
              <div className="absolute top-4 right-4">
                <Skeleton width={110} height={30} borderRadius={8} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPageSkeleton;
