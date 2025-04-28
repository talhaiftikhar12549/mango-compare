import { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dosageFiltedDta, DosagName } from "../redux toolkit/compareToolSlice";

const DosageFilter = ({ availableDoasge, isReset }) => {
  const dispatch = useDispatch();
  const [isHide, setIsHide] = useState(true);
  const [selectedDosage, setSelectedDosage] = useState([]);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const fltrData = useSelector((state) => state.compareTool.mainData);
  const dosages = availableDoasge || [];

  const selectedDosg = useCallback(
    (dose) => {
      let updatedSelection;
      if (selectedDosage.includes(dose)) {
        updatedSelection = selectedDosage.filter((d) => d !== dose);
      } else {
        updatedSelection = [...selectedDosage, dose];
      }

      setSelectedDosage(updatedSelection);
      dispatch(DosagName(updatedSelection));
    },
    [selectedDosage, dispatch]
  );

  useEffect(() => {
    if (selectedDosage.length > 0) {
      const filtered = fltrData.filter((item) =>
        selectedDosage.includes(item.dosage)
      );
      console.log("Selected Dosage", selectedDosage);
      dispatch(dosageFiltedDta(filtered));
    } else {
      dispatch(dosageFiltedDta([])); // Or dispatch all data if needed
    }
  }, [selectedDosage, fltrData, dispatch]);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isHide ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isHide]);

  useEffect(() => {
    if (isReset) {
      setSelectedDosage([]);
      dispatch(DosagName([]));
    }
  }, [isReset, dispatch]);

  return (
    <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] border-b border-[#DCDCDC] shadow-md bg-white space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Dosage Strength</h2>
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
                type="checkbox"
                checked={selectedDosage.includes(dose)}
                onChange={() => selectedDosg(dose)}
                className="form-checkbox accent-yellow-400"
              />
              <span
                className={`text-sm ${
                  selectedDosage.includes(dose)
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

// import { useRef, useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { dosageFiltedDta, DosagName } from "../redux toolkit/compareToolSlice";
// const DosageFilter = ({ availableDoasge, isReset }) => {
//   const dispatch = useDispatch();
//   const [isHide, setIsHide] = useState(true);
//   const [selectedDosage, setSelectedDosage] = useState();
//   const contentRef = useRef(null);
//   const [maxHeight, setMaxHeight] = useState("0px");
//   const dosages = availableDoasge;
//   const fltrData = useSelector((state) => state.compareTool.mainData);

//   const selectedDosg = (dose) => {
//     setSelectedDosage(dose);
//     dispatch(DosagName(dose));
//   };

//   useEffect(() => {
//     if (selectedDosage !== undefined) {
//       datatosotre();
//     }
//   }, [selectedDosage]);

//   const datatosotre = () => {};
//   useEffect(() => {
//     if (selectedDosage !== undefined) {
//       const filtered = fltrData.filter(
//         (item) => item.dosage === selectedDosage
//       );
//       dispatch(dosageFiltedDta(filtered));
//     }
//   }, [selectedDosage, fltrData, dispatch]);

//   const handleClick = () => setIsHide(!isHide);

//   useEffect(() => {
//     if (contentRef.current) {
//       setMaxHeight(isHide ? ${contentRef.current.scrollHeight}px : "0px");
//     }
//   }, [isHide]);
//   // reset data
//   useEffect(() => {
//     if (isReset) {
//       setSelectedDosage(null);
//       dispatch(DosagName(0));
//     }
//   }, [isReset]); // Add isReset to the dependency array to trigger the effect when it changes
//   //reset data

//   return (
//     <div className="w-full max-w-xs px-[20px] pb-[38px] pt-[24px] border-b border-[#DCDCDC]  shadow-md bg-white space-y-4">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold">Dosage</h2>
//         <button
//           onClick={handleClick}
//           className="text-[16px] min-w-[95.14px] cursor-pointer font-[500] py-[4px] px-[24px] border border-[#DCDCDC] rounded-[100px]"
//         >
//           {isHide ? "Hide" : "Show"}
//         </button>
//       </div>

//       <div
//         ref={contentRef}
//         style={{
//           maxHeight: maxHeight,
//         }}
//         className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
//       >
//         <div className="space-y-[24px]">
//           {dosages.map((dose) => (
//             <label
//               key={dose}
//               className="flex items-center space-x-[8px] cursor-pointer"
//             >
//               <input
//                 type="checkbox"
//                 checked={selectedDosage === dose}
//                 onChange={() => {
//                   selectedDosg(dose);
//                 }}
//                 className="form-checkbox accent-yellow-400"
//               />
//               <span
//                 className={text-sm ${
//                   selectedDosage === dose
//                     ? "text-black font-medium"
//                     : "text-gray-500"
//                 }}
//               >
//                 {dose}
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DosageFilter;
