// FullPriceCalculatorSkeleton.js
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FullPriceCalculatorSkeleton = () => {
  return (
    <div className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto py-[100px] w-[100%]">
      <div className="w-full min-w-[1024px]  overflow-x-auto lg:overflow-x-visible">
        <section className="min-w-[1024px]  lg:min-w-full custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto py-[100px]">
          <div className="flex gap-6 px-4">
            {/* Sidebar Filter Skeleton */}
            <div className="w-[250px] space-y-6">
              {/* Filter Header */}
              <Skeleton height={30} width={100} />

              {/* Price Filter */}
              <div className="space-y-2">
                <Skeleton height={20} width={120} />
                <Skeleton height={10} width={200} />
                <Skeleton height={10} width={200} />
              </div>

              {/* Discount Toggle */}
              <div className="space-y-2">
                <Skeleton height={20} width={120} />
                <Skeleton height={30} width={50} />
              </div>

              {/* Strength Options */}
              <div className="space-y-2">
                <Skeleton height={20} width={120} />
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} height={15} width={100} />
                ))}
              </div>
            </div>

            {/* Main Table Skeleton */}
            <div className="flex-1">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 py-4 bg-yellow-400 px-4 rounded-md">
                {["Pharmacy", "Strength", "Price", "Rating", "Website"].map(
                  (_, i) => (
                    <Skeleton
                      key={i}
                      height={20}
                      width={100}
                      baseColor="#f6e05e"
                      highlightColor="#fcd34d"
                    />
                  )
                )}
              </div>

              {/* Rows */}
              <div className="space-y-4 mt-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-5 items-center gap-4 px-4 py-4 border-b"
                  >
                    <div className="flex items-center gap-2">
                      <Skeleton circle height={40} width={40} />
                      <Skeleton height={15} width={100} />
                    </div>
                    <Skeleton height={15} width={50} />
                    <Skeleton height={15} width={70} />
                    <Skeleton height={15} width={40} />
                    <Skeleton height={35} width={120} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export d