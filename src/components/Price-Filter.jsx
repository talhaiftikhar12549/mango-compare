import React, { useState } from "react";

const PriceFilter = () => {
  const [price, setPrice] = useState(100);
  const [sortOptions, setSortOptions] = useState({
    rating: true,
    latest: false,
    lowToHigh: false,
    highToLow: false,
  });

  const toggleSort = (key) => {
    setSortOptions((prev) => ({
      rating: false,
      latest: false,
      lowToHigh: false,
      highToLow: false,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full max-w-xs p-4 shadow-md bg-white space-y-4 border border-[#DCDCDC] ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Price</h2>
        <button className="text-[16px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]">
          Hide
        </button>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min={0}
          max={100}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-yellow-400"
        />
        <p className="text-sm text-gray-700">Max. £{price}.00</p>
      </div>

      <div className="space-y-3">
        {[
          { key: "rating", label: "Sort by Rating" },
          { key: "latest", label: "Sort by latest" },
          { key: "lowToHigh", label: "Low to High" },
          { key: "highToLow", label: "High to Low" },
        ].map((option) => (
          <label
            key={option.key}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={sortOptions[option.key]}
              onChange={() => toggleSort(option.key)}
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
      </div>
    </div>
  );
};

export default PriceFilter;
