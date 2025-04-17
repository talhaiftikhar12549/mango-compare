import CardResult from "./Cards-Result";
import FilterBar from "./Filter-Bar";
import { useState, useMemo } from "react";

export default function PriceCalculator({maindata}) {
  const [sortOrder, setSortOrder] = useState("asc");
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedData = useMemo(() => {
    return [...maindata].sort((a, b) =>
      sortOrder === 'asc'
        ? a.price - b.price
        : b.price - a.price
    );
  }, [maindata, sortOrder]);

  return (
    <>
      <section className="max-w-[1280px] py-[100px] w-[100%]">
        <div className="flex w-[100%]">
          <div className="w-[25%] pr-[20px]">
            <FilterBar />
          </div>
          <div className="w-[75%]">
            <div className="flex w-[100%] bg-[#FCC821] py-[14px] rounded-[10px] px-[50px] text-[#05222E] text-[16px] font-[600]">
              <div className="w-[37%] ">
                <p>Pharmacy</p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p onClick={toggleSortOrder}>
                  Price {sortOrder === "asc" ? "▲" : "▼"}
                </p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p>Quantity</p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p>Rating</p>
              </div>
              <div className="w-[28%] text-center flex items-center justify-center">
                <p>Website</p>
              </div>
            </div>
            {/* card section */}
            <div>
              <CardResult sortedData={sortedData} />
            </div>
            {/* card section */}
          </div>
        </div>
      </section>
    </>
  );
}
