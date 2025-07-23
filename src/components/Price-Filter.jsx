import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  mVal,
  discountedFilter,
  togglePriceSort,
} from "../redux toolkit/compareToolSlice";
import { Range } from "react-range";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdPercent } from "react-icons/md";
import { PiArrowsDownUpBold } from "react-icons/pi";

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
  const [priceSort, setPriceSort] = useState("lp");
  const range = maxVal;

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    dispatch(discountedFilter(isChecked));
  };

  const handlePriceSort = () => {
    setPriceSort((prev) => (prev === "lp" ? "hp" : "lp"));
    dispatch(togglePriceSort(priceSort === "lp" ? "hp" : "lp"));
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isHide ? `220px` : "0px");
    }
  }, [isHide]);

  useEffect(() => {
    if (contentRefDiscount.current) {
      setMaxHeightDiscount(isHideDiscount ? `175px` : "0px");
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
      dispatch(discountedFilter(false));
    }
  }, [isReset, minValue, maxVal]);

  useEffect(() => {
    if (minValue !== undefined && maxVal !== undefined) {
      setPrice([minValue, maxVal]);
    }
  }, [minValue, maxVal]);

  return (
    <>
      <div className="w-[100%] my-2 rounded-lg px-[20px] pb-[38px] pt-[24px] bg-white space-y-4 border-2 border-[#DCDCDC] hover:border-orange-200 ">
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-1 xl:gap-3">
            <BsCurrencyDollar className="text-[#f97215] mt-1 text-xl !font-[700]" />
            <h2 className="!text-[13px] xl:!text-lg font-semibold">
              Price Range
            </h2>
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
          <div className="flex justify-between items-center">
            <div>
              <h4 className="xl:text-xs text-[9px] ">Maximum Budget</h4>
            </div>
            <div>
              <span className="bg-[#f8f5ee] text-[#ee9c25] flex gap-1 text-[9px] xl:text-xs px-3 py-2 rounded-full ml-auto">
                £ {range}
              </span>
            </div>
          </div>
          <div className="space-y-[24px] pt-4 px-3">
            <Range
              step={1}
              min={minValue}
              max={maxVal}
              values={price}
              onChange={(values) => setPrice(values)}
              renderTrack={({ props, children }) => {
                const [val1, val2] = price;
                const left = ((val1 - minValue) / (maxVal - minValue)) * 100;
                const right = ((val2 - minValue) / (maxVal - minValue)) * 100;

                return (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      width: "100%",
                      background: `linear-gradient(
                        to right,
                        #d3d3d3 0%,
                        #d3d3d3 ${left}%,
                        #000000 ${left}%,
                        #000000 ${right}%,
                        #d3d3d3 ${right}%,
                        #d3d3d3 100%
                      )`,
                      borderRadius: "3px",
                    }}
                  >
                    {children}
                  </div>
                );
              }}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  }}
                />
              )}
            />

            <div className="flex items-center justify-between">
              <p className="xl:text-sm text-[12px] text-gray-700">
                £ {price[0]}
              </p>
              <p className="xl:text-sm text-[12px] text-gray-700">
                £ {price[1]}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#000000]">Sort Price</p>
              </div>
              <div>
                <PiArrowsDownUpBold
                  onClick={handlePriceSort}
                  className="text-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] my-2 md:w-full border-2 border-[#DCDCDC] hover:border-orange-200 rounded-lg bg-white">
        <div className="w-full px-5 pb-6 pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 xl:gap-3">
              <MdPercent className="text-green-500" />
              <h2 className="!text-[13px] xl:!text-lg font-semibold text-[#000000]">
                Special Offers
              </h2>
            </div>
            <button
              onClick={handleClickDiscount}
              className="text-[20px] font-medium py-1 cursor-pointer"
            >
              {isHideDiscount ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>

          <div
            ref={contentRefDiscount}
            style={{ maxHeight: maxHeightDiscount }}
            className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
          >
            <div className="pt-2">
              <label className="block rounded-lg p-4 border border-green-200 bg-green-50">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-semibold text-green-900">
                      Show discounted prices only
                    </span>
                    <span className="text-xs text-green-700">
                      Find the best savings available
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={handleChange}
                    />
                    <div
                      className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                        checked ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                    <div
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transition-transform duration-300 transform ${
                        checked ? "translate-x-6 bg-white" : "bg-white"
                      }`}
                    ></div>
                  </div>
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
