import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dosageFiltedDta } from '../redux toolkit/compareToolSlice'
const DosageFilter = ({ availableDoasge }) => {
  const dispatch = useDispatch();
  const [selectedDosage, setSelectedDosage] = useState();
  const dosages = availableDoasge;
  const fltrData = useSelector((state) => state.compareTool.mainData);

  const selectedDosg = (dose) => {
    setSelectedDosage(dose);
  };

  useEffect(() => {
    if (selectedDosage !== undefined) {
      datatosotre();
    }
  }, [selectedDosage]);

  const datatosotre = () => {
  };
  useEffect(() => {
    if (selectedDosage !== undefined) {
      const filtered = fltrData.filter(item => item.dosage === selectedDosage);
      dispatch(dosageFiltedDta(filtered));
    }
  }, [selectedDosage, fltrData, dispatch]);
  
  return (
    <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] border-b border-[#DCDCDC]  shadow-md bg-white space-y-4">
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
              onChange={() => {
                selectedDosg(dose);
              }}
              className="form-checkbox accent-yellow-400"
            />
            <span
              className={`text-sm ${
                selectedDosage === dose
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
