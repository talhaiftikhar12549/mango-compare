import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { mVal, discountedFilter } from "../redux toolkit/compareToolSlice";
import { Range } from "react-range";

const PriceFilter = ({ maxVal, minValue, isReset }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState([minValue, maxVal]);
  const [isHide, setIsHide] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    dispatch(discountedFilter(isChecked)); // Dispatch true or false
  };
  console.log(
    "min and max prices coming from price filter",
    minValue,
    "   ",
    maxVal
  );
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isHide ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isHide]);

  const handleClick = () => setIsHide(!isHide);

  useEffect(() => {
    dispatch(mVal(price));
  }, [price, dispatch]);

  useEffect(() => {
    if (isReset) {
      setPrice([minValue, maxVal]);
    }
  }, [isReset, minValue, maxVal]);

  useEffect(() => {
    if (minValue !== undefined && maxVal !== undefined) {
      setPrice([minValue, maxVal]);
    }
  }, [minValue, maxVal]);

  return (
    <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] shadow-md bg-white space-y-4 border-b border-[#DCDCDC] ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Price</h2>
        <button
          onClick={handleClick}
          className="text-[16px] min-w-[105.14px] font-[500] py-[4px] px-[24px] border cursor-pointer border-[#DCDCDC] rounded-[100px]"
        >
          {isHide ? "Hide" : "Show"}
        </button>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: maxHeight }}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
      >
        <div className="space-y-[24px] pt-4 px-3">
          <Range
            step={1}
            min={minValue}
            max={maxVal}
            values={price}
            onChange={(values) => setPrice(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#FFD700",
                  cursor: "pointer",
                  border: "2px solid #fff",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
            )}
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">Min. £ {price[0]}</p>
            <p className="text-sm text-gray-700">Max. £ {price[1]}</p>
          </div>
        </div>

        <div className="pt-[5px]">
      <div className="pt-[10px]">
        <label className="flex items-center space-x-[8px] cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox accent-yellow-400 cursor-pointer"
            checked={checked}
            onChange={handleChange}
          />
          <span className="text-sm">Apply Discount</span>
        </label>
      </div>
    </div>
      </div>
    </div>
  );
};

export default PriceFilter;
