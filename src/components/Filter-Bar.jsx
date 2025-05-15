import PriceFilter from "./Price-Filter";
import DosageFilter from "./Dosage-filter";
import { useState } from "react";
export default function FilterBar({ availableDoasge, maxVal, minValue }) {
  const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    setIsReset(true);
    setTimeout(() => {
      setIsReset(false);
    }, 500);
  };

  return (
    <>
      <section className="w-[100%] border border-[#DCDCDC] rounded-[6px] shadow-md">
        {/* Header bar */}
        <div className="flex items-center justify-between w-[100%] border-b border-[#DCDCDC] py-[20px] px-[20px]">
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
        <PriceFilter isReset={isReset} maxVal={maxVal} minValue={minValue}/>
        {/* Price Bar */}

        {/* Dosage Bar */}
        <DosageFilter isReset={isReset} availableDoasge={availableDoasge} />
        {/* Dosage Bar */}
      </section>
    </>
  );
}
