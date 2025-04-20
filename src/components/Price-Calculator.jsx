import CardResult from "./Cards-Result";
import FilterBar from "./Filter-Bar";
import { useState, useMemo } from "react";

export default function PriceCalculator({ maindata, availableDoasge }) {
  const [sortPrice, setSortPrice] = useState("lp");
  const [sortRating, setSortRating] = useState("lr");
  const [sortQuntity, setSortQuantity] = useState("lq");
  const [filteredData, setFilteredData] = useState(maindata);
  const toggleSortPrice = () => {
    setSortPrice((prev) => (prev === "lp" ? "hp" : "lp"));
    setFilteredData(()=>(sortedPrice))
  };
  const toggleSortRating = () => {
    setSortRating((prev) => (prev === "lr" ? "hr" : "lr"));
    setFilteredData(()=>(sortedRating))
  };
  const toggleSortQuantity = () => {
    setSortQuantity((prev) => (prev === "lq" ? "hq" : "lq"));
    setFilteredData(()=>(sortedQuantity))
  };
  const sortedPrice = useMemo(() => {
    return [...maindata].sort((a, b) =>
      sortPrice === 'lp'
        ? a.price - b.price 
        : b.price - a.price
    );
  }, [maindata, sortPrice]);

  const sortedQuantity = useMemo(() => {
    return [...maindata].sort((a, b) =>
      sortQuntity === 'lq'
        ? a.quantity - b.quantity 
        : b.quantity - a.quantity
    );
  }, [maindata, sortQuntity]);

  const sortedRating = useMemo(() => {
    return [...maindata].sort((a, b) =>
      sortRating === 'lr'
        ? a.rating - b.rating
        : b.rating - a.rating
    );
  }, [maindata, sortRating]);

  return (
    <>
      <section className="max-w-[1280px] py-[100px] w-[100%]">
        <div className="flex w-[100%]">
          <div className="w-[25%] pr-[20px] ">
            <FilterBar availableDoasge={availableDoasge} />
          </div>
          <div className="w-[75%]">
            <div className="flex w-[100%] bg-[#FCC821] py-[14px] rounded-[10px] px-[50px] text-[#05222E] text-[16px] font-[600]">
              <div className="w-[37%] ">
                <p>Pharmacy</p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p onClick={toggleSortPrice}>
                  Price {sortPrice === "lp" ? "▲" : "▼"}
                </p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p onClick={toggleSortQuantity}>Quantity {sortQuntity === "lp" ? "▲" : "▼"}</p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p onClick={toggleSortRating}>
                  Rating {sortRating === "lr" ? "▲" : "▼"}
                </p>
              </div>
              <div className="w-[28%] text-center flex items-center justify-center">
                <p>Website</p>
              </div>
            </div>
            {/* card section */}
            <div>
              <CardResult sortedPrice={filteredData}  />
            </div>
            {/* card section */}
          </div>
        </div>
      </section>
    </>
  );
}
