import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { mVal, discountedFilter } from "../redux toolkit/compareToolSlice";
import { Range } from "react-range";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

const PriceFilter = ({ maxVal, minValue, isReset }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState([minValue, maxVal]);
  const [isHide, setIsHide] = useState(true);
  const [isHideDiscount, setIsHideDiscount] = useState(true);
  const contentRef = useRef(null);
  const contentRefDiscount = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [maxHeightDiscount, setMaxHeightDiscount] = useState("0px");
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    dispatch(discountedFilter(isChecked));
  };
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isHide ? `113px` : "0px");
    }
  }, [isHide]);
  useEffect(() => {
    if (contentRefDiscount.current) {
      setMaxHeightDiscount(isHideDiscount ? `113px` : "0px");
    }
  }, [isHideDiscount]);
  const handleClick = () => setIsHide(!isHide);
  const handleClickDiscount = () => {
    setIsHideDiscount(!isHideDiscount);
  };

  useEffect(() => {
    dispatch(mVal(price));
  }, [price, dispatch]);

  useEffect(() => {
    if (isReset) {
      setPrice([minValue, maxVal]);
      setChecked(false);
      dispatch(discountedFilter(checked));
    }
  }, [isReset, minValue, maxVal, checked]);

  useEffect(() => {
    if (minValue !== undefined && maxVal !== undefined) {
      setPrice([minValue, maxVal]);
    }
  }, [minValue, maxVal]);

  return (
    <>
      <div className="w-[75%] md:w-full max-w-xs px-[20px] pb-[38px] pt-[24px] shadow-md bg-white space-y-4 border-2 border-[#DCDCDC] hover:border-orange-200 ">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-3">
            <BsCurrencyDollar className="text-[#f97215] mt-1 text-xl !font-[700]" />
            <h2 className="text-lg font-semibold">Price Range</h2>
          </div>

          <button
            onClick={handleClick}
            className="text-[20px]  font-[500] py-[4px]   cursor-pointer "
          >
            {isHide ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
              <p className="xl:text-sm text-[12px] text-gray-700">
                Min. £ {price[0]}
              </p>
              <p className="xl:text-sm text-[12px] text-gray-700">
                Max. £ {price[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FCC821] w-[75%] md:w-full">
        <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] shadow-md space-y-4 border-b border-[#DCDCDC] ">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold text-[#000000]">Discount</h2>
            <button
              onClick={handleClickDiscount}
              className="text-[20px]  font-[500] py-[4px]   cursor-pointer "
            >
              {isHideDiscount ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          <div
            ref={contentRefDiscount}
            style={{ maxHeight: maxHeightDiscount }}
            className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
          >
            <div className="pt-[10px]">
              <label className="flex items-center justify-between  space-x-3 cursor-pointer">
                <span className="text-sm text-[#000000]">Apply Discount</span>
                <div className="relative ">
                  <input
                    type="checkbox"
                    className="sr-only "
                    checked={checked}
                    onChange={handleChange}
                  />
                  <div
                    className={`w-14 h-8 rounded-full transition-colors duration-300 ${
                      checked
                        ? "bg-[#ffffff] border border-gray-300"
                        : "bg-gray-300 border border-gray-300 "
                    }`}
                  ></div>
                  <div
                    className={`absolute top-1 left-1 w-6 h-6  rounded-full shadow-md transition-transform duration-300 transform ${
                      checked ? "translate-x-6 bg-[#FCC821]" : "bg-[#ffffff]"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
