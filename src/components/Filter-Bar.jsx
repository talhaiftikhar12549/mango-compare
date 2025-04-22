import PriceFilter from "./Price-Filter";
import DosageFilter from "./Dosage-filter";
export default function FilterBar({availableDoasge}) {
  return (
    <>
      <section className="w-[100%] border border-[#DCDCDC] rounded-[6px] shadow-md">
        {/* Header bar */}
        <div className="flex items-center justify-between w-[100%] border-b border-[#DCDCDC] py-[20px] px-[20px]">
          <div className="text-[20px] font-[600]">
            <h2>Filter</h2>
          </div>
          <div>
            <button className="text-[16px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]">
              Reset
            </button>
          </div>
        </div>
        {/* Header bar */}

        {/* Price Bar */}
        <PriceFilter  />
        {/* Price Bar */}

        {/* Dosage Bar */}
        <DosageFilter availableDoasge={availableDoasge}/>
        {/* Dosage Bar */}
      </section>
    </>
  );
}
