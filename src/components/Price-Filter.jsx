import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../redux toolkit/compareToolSlice'
const PriceFilter = () => {

  const dispatch = useDispatch()
  const [price, setPrice] = useState(100);
  const [sortOptions, setSortOptions] = useState({
    rating: false,
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
    dispatch(incrementByAmount (key)) 

  };

  return (
    <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] shadow-md bg-white space-y-4 border-b border-[#DCDCDC] ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Price</h2>
        <button className="text-[16px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]">
          Hide
        </button>
      </div>

      <div className="space-y-[24px]">
        <input
          type="range"
          min={0}
          max={100}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-yellow-400"
        />
        <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">Min. £{price}.00</p>
        <p className="text-sm text-gray-700">Max. £{price}.00</p>
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
