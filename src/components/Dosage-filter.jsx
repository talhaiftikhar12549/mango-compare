import React, { useState } from "react";

const DosageFilter = () => {
  const [selectedDosage, setSelectedDosage] = useState("0.25 mg/0.5 mL");

  const dosages = [
    "0.25 mg/0.5 mL",
    "0.5 mg/0.5 mL",
    "1.0 mg/0.5 mL",
    "1.7 mg/0.75 mL",
    "2.4 mg/0.75 mL",
  ];

  return (
    <div className="w-full max-w-xs px-[24px] pb-[38px] pt-[24px] border-b border-[#DCDCDC]  shadow-md bg-white space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Dosage</h2>
        <button className="text-[16px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]">
          Hide
        </button>
      </div>

      <div className="space-y-[24px]">
        {dosages.map((dose) => (
          <label
            key={dose}
            className="flex items-center space-x-[8px] cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedDosage === dose}
              onChange={() => setSelectedDosage(dose)}
              className="form-checkbox accent-yellow-400"
            />
            <span
              className={`text-sm ${selectedDosage === dose
                ? "text-black font-medium"
                : "text-gray-500"
                }`}
            >
              {dose}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default DosageFilter;
