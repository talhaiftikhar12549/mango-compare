import PriceFilter from "./Price-Filter";
import DosageFilter from "./Dosage-filter";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import filter from "../assets/filter.webp";
import { RotateCw } from "lucide-react"; // at the top of your file
export default function FilterBar({
  closeFilter,
  availableDoasge,
  maxVal,
  minValue,
}) {
  const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    setIsReset(true);
    setTimeout(() => {
      setIsReset(false);
    }, 500);
  };

  return (
   <div className="w-screen md:w-full bg-black/60 md:bg-transparent h-screen md:h-full px-4 pt-10 md:pt-0 overflow-y-auto">

      <section className="w-[100%] ">
        <div className="w-full flex md:hidden justify-end items-center ">
          <div className="w-10 h-10 border rounded-lg flex items-center justify-center bg-[#ff6900]">
            <IoCloseSharp onClick={closeFilter} className="text-xl " />
          </div>
        </div>

        {/* Header */}
        <div className="bg-[#fffaec] border-2 border-orange-200 rounded-lg p-4 my-2">
          <div className="flex items-center gap-3">
            <div className="bg-[#f77316] p-2 rounded-lg">
              <img className="h-[18px] w-[18px] xl:h-[25px] xl:w-[25px]" src={filter} alt="" />
            </div>
            <h3 className="!text-[13px] xl:!text-lg !font-[600]">Refine Your Search</h3>
          </div>
          <p className="text-xs text-gray-600 font-[500] pt-3">
            Find exactly what you're looking for
          </p>
        </div>
        {/* Header */}

        {/* Price Bar */}
        <PriceFilter isReset={isReset} maxVal={maxVal} minValue={minValue} />
        {/* Price Bar */}

        {/* Dosage Bar */}
        <DosageFilter isReset={isReset} availableDoasge={availableDoasge} />
        {/* Dosage Bar */}

        {/* Reset Button */}

        <div className="flex items-center justify-between w-[100%] md:w-full bg-white mt-2 mb-5 border-2  border-[#DCDCDC] rounded-md hover:border-[#F18A20]">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 px-6 py-2 cursor-pointer w-full  text-gray-600  rounded-md hover:bg-[#FFF7F0] hover:text-[#D45500] font-semibold text-[14px] transition"
          >
            <RotateCw size={16} strokeWidth={2} />
            Reset All Filters
          </button>
        </div>

        {/* Reset Button */}
      </section>
    </div>
  );
}
