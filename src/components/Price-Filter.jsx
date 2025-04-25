import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../redux toolkit/compareToolSlice";
import { mVal } from "../redux toolkit/compareToolSlice";
const PriceFilter = ({ maxVal }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(maxVal);
  const [isHide, setIsHide] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [sortOptions, setSortOptions] = useState({
    rating: false,
    latest: false,
    lowToHigh: false,
    highToLow: false,
  });

  console.log(maxVal, "maxVal");
  console.log(price, "price");
  dispatch(mVal(price));
  const toggleSort = (key) => {
    setSortOptions((prev) => ({
      rating: false,
      latest: false,
      lowToHigh: false,
      highToLow: false,
      [key]: !prev[key],
    }));
    dispatch(incrementByAmount(key));
  };

  const handleClick = () => setIsHide(!isHide);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isHide ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isHide]);
  return (
    <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] shadow-md bg-white space-y-4 border-b border-[#DCDCDC] ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Price</h2>
        <button
          onClick={handleClick}
          className="text-[16px] min-w-[95.14px]  font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]"
        >
          {isHide ? "Hide" : "Show"}
        </button>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
        }}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
      >
        <div className="space-y-[24px] pt-4">
          <input
            type="range"
            min={0}
            max={maxVal}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full accent-yellow-400 cursor-pointer"
          />
          <div className="flex items-center justify-end">
            {/* <p className="text-sm text-gray-700">Min. £ 0.00</p> */}
            <p className="text-sm text-gray-700">Max. £{price}.00</p>
          </div>
        </div>
      </div>
      {/* <div className="space-y-[25px]">
        {[
          { key: "rating", label: "Sort by Rating" },
          { key: "latest", label: "Sort by latest" },
          { key: "lowToHigh", label: "Low to High" },
          { key: "highToLow", label: "High to Low" },
        ].map((option) => (
          <label
            key={option.key}
            className="flex items-center space-x-[8px] cursor-pointer"
          >
            <input
              type="checkbox"
              checked={sortOptions[option.key]}
              onChange={() => toggleSort(option.key , option.label)}
              className="form-checkbox accent-yellow-400"
            />
            <span
              className={`text-sm ${
                sortOptions[option.key]
                  ? "text-black font-medium"
                  : "text-gray-500"
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div> */}
    </div>
  );
};

export default PriceFilter;
