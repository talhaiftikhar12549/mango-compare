import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FullPriceCalculatorSkeleton = () => {
  return (
    <div className="max-w-[1280px] custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto md:py-[50px] py-[40px] w-[100%]">
      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filter Skeleton */}
        <aside className="w-full lg:w-[280px] space-y-6">
          {/* Section: Price Range */}
          <div className="p-4 border border-[#DCDCDC] rounded-lg space-y-4">
            <Skeleton height={20} width={140} />
            <Skeleton height={30} width={180} />
            <Skeleton height={8} width="100%" />
            <div className="flex justify-between">
              <Skeleton height={20} width={50} />
              <Skeleton height={20} width={50} />
            </div>
          </div>

          {/* Section: Special Offers */}
          <div className="p-4 border border-[#DCDCDC] rounded-lg space-y-3">
            <Skeleton height={20} width={160} />
            <Skeleton height={30} width={60} />
            <Skeleton height={12} width={120} />
          </div>

          {/* Section: Dosage Strength */}
          <div className="p-4 border border-[#DCDCDC] rounded-lg space-y-3">
            <Skeleton height={20} width={160} />
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="flex items-center gap-2" key={i}>
                <Skeleton height={16} width={16} circle />
                <Skeleton height={16} width={80} />
              </div>
            ))}
          </div>
        </aside>

        {/* Main Result Cards */}
        <main className="flex-1 space-y-4">
          {Array.from({ length: 7 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center gap-4 border border-[#DCDCDC] rounded-xl px-4 py-4 shadow-sm"
            >
              <div className="flex items-center gap-3 w-full md:w-[30%]">
                <Skeleton height={40} width={40} circle />
                <div className="flex flex-col gap-1">
                  <Skeleton height={16} width={100} />
                  <Skeleton height={12} width={60} />
                </div>
              </div>
              <div className="flex flex-col items-start md:items-center md:flex-row gap-3 md:gap-6 w-full md:w-[60%] justify-between">
                <Skeleton height={20} width={50} /> {/* strength */}
                <Skeleton height={20} width={80} /> {/* price */}
                <Skeleton height={20} width={100} /> {/* delivery fee */}
              </div>
              <Skeleton height={40} width={120} borderRadius={8} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default FullPriceCalculatorSkeleton;
