import PriceFilter from "./Price-Filter";
import DosageFilter from "./Dosage-filter";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
export default function FilterBar({ closeFilter, availableDoasge, maxVal, minValue }) {
  const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    setIsReset(true);
    setTimeout(() => {
      setIsReset(false);
    }, 500);
  };

  return (
    <div className="w-screen md:w-full bg-black/60 md:bg-transparent h-screen md:h-full pt-10 md:pt-0">
      <section className="w-full pr-5">
        <div className="w-full flex md:hidden justify-end items-center pr-10">
          <div className="w-10 h-10 border rounded-lg flex items-center justify-center bg-[#FCC821]">
            <IoCloseSharp onClick={closeFilter} className="text-xl " />
          </div>
        </div>
        {/* Header bar */}
        <div className="flex items-center justify-between w-[75%] md:w-full bg-white border-b border-[#DCDCDC] py-[20px] px-[20px]">
          <div className="text-[20px] font-[600]">
            <h2>Filter</h2>
          </div>
          <div>
            <button
              onClick={handleReset}
              className="text-[16px] min-w-[95.14px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]"
            >
              Reset
            </button>
          </div>
        </div>
        {/* Header bar */}

        {/* Price Bar */}
        <PriceFilter isReset={isReset} maxVal={maxVal} minValue={minValue} />
        {/* Price Bar */}

        {/* Dosage Bar */}
        <DosageFilter isReset={isReset} availableDoasge={availableDoasge} />
        {/* Dosage Bar */}
      </section>
    </div>
  );
}
