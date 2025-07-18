import { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
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
      const filtered = fltrData.filter(
        (item) => item.dosage === selectedDosage
      );
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
    <div className="w-[75%] md:w-full max-w-xs px-5 pb-6 pt-6 border border-gray-200 shadow-sm bg-white space-y-4 rounded-lg">
  {/* Header */}
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-semibold text-black">Dosage Strength</h2>
    <button
      onClick={() => setIsHide(!isHide)}
      className="text-[20px] cursor-pointer font-medium py-1"
    >
      {isHide ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  </div>

  {/* Dosage Options */}
  <div
    ref={contentRef}
    style={{ maxHeight }}
    className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
  >
    <div className="space-y-3">
      {dosages.map((dose) => {
        const isSelected = selectedDosage === dose;
        // const isPopular = ["2.5 mg", "5 mg"].includes(dose); 
        const isPopular = [].includes(dose); // mark popular ones

        return (
          <label
            key={dose}
            className={`flex items-center justify-between px-4 py-2 rounded-lg border cursor-pointer hover:bg-orange-50 hover:border-orange-300 ${
              isSelected
                ? "bg-orange-50 border-orange-300"
                : "bg-white border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="dosage"
                value={dose}
                checked={isSelected}
                onChange={() => handleDosageSelect(dose)}
                className="w-4 h-4 accent-blue-500"
              />
              <span
                className={`text-sm ${
                  isSelected ? "text-black font-medium" : "text-gray-700"
                }`}
              >
                {dose}
              </span>
            </div>

            {isPopular && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                Popular
              </span>
            )}
          </label>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default DosageFilter;
