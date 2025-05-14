import { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dosageFiltedDta, DosagName } from "../redux toolkit/compareToolSlice";

const DosageFilter = ({ availableDoasge, isReset }) => {
  const dispatch = useDispatch();
  const [isHide, setIsHide] = useState(true);
  const [selectedDosage, setSelectedDosage] = useState(null);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const fltrData = useSelector((state) => state.compareTool.mainData);
  const dosages = availableDoasge || [];

  // Select first dosage by default
  useEffect(() => {
    if (dosages.length > 0 && selectedDosage === null) {
      setSelectedDosage(dosages[0]);
      dispatch(DosagName([dosages[0]]));
    }
  }, [dosages, selectedDosage, dispatch]);

  const handleDosageSelect = useCallback(
    (dose) => {
      setSelectedDosage(dose);
      dispatch(DosagName([dose]));
    },
    [dispatch]
  );

  useEffect(() => {
    if (selectedDosage) {
      const filtered = fltrData.filter((item) => item.dosage === selectedDosage);
      dispatch(dosageFiltedDta(filtered));
    } else {
      dispatch(dosageFiltedDta([]));
    }
  }, [selectedDosage, fltrData, dispatch]);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isHide ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isHide]);

  useEffect(() => {
    if (isReset) {
      if (dosages.length > 0) {
        setSelectedDosage(dosages[0]);
        dispatch(DosagName([dosages[0]]));
      } else {
        setSelectedDosage(null);
        dispatch(DosagName([]));
      }
    }
  }, [isReset, dispatch, dosages]);

  return (
    <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] border-b border-[#DCDCDC] shadow-md bg-white space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Strength</h2>
        <button
          onClick={() => setIsHide(!isHide)}
          className="text-[16px] min-w-[95.14px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]"
        >
          {isHide ? "Hide" : "Show"}
        </button>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
      >
        <div className="space-y-[24px]">
          {dosages.map((dose) => (
            <label
              key={dose}
              className="flex items-center space-x-[8px] cursor-pointer"
            >
              <input
                type="radio"
                name="dosage"
                value={dose}
                checked={selectedDosage === dose}
                onChange={() => handleDosageSelect(dose)}
                className="w-5 h-5 rounded-full border-2 border-yellow-400 checked:bg-yellow-400 checked:border-yellow-400 appearance-none cursor-pointer relative"
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
    </div>
  );
};

export default DosageFilter;
