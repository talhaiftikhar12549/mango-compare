import CardResult from "./Cards-Result";
import FilterBar from "./Filter-Bar";
import { LuArrowUpDown } from "react-icons/lu";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainDatagetter } from "../redux toolkit/compareToolSlice";
export default function PriceCalculator({ maindata, availableDoasge }) {
  const dispatch = useDispatch();
  dispatch(mainDatagetter(maindata));
  const fltrData = useSelector((state) => state.compareTool.mainData);
  const dosgName = useSelector((state) => state.compareTool.filteredName);
  console.log("mindata without filter", maindata);
  // console.log(fltrData);
  const [sortPrice, setSortPrice] = useState("lp");
  const [sortRating, setSortRating] = useState("lr");
  const [sortQuntity, setSortQuantity] = useState("lq");
  const [filteredData, setFilteredData] = useState(fltrData);
  const toggleSortPrice = () => {
    setSortPrice((prev) => (prev === "lp" ? "hp" : "lp"));
    setFilteredData(() => sortedPrice);
  };
  const toggleSortRating = () => {
    setSortRating((prev) => (prev === "lr" ? "hr" : "lr"));
    setFilteredData(() => sortedRating);
  };
  const toggleSortQuantity = () => {
    setSortQuantity((prev) => (prev === "lq" ? "hq" : "lq"));
    setFilteredData(() => sortedQuantity);
  };
  const sortedPrice = useMemo(() => {
    return [...fltrData].sort((a, b) =>
      sortPrice === "lp" ? a.price - b.price : b.price - a.price
    );
  }, [fltrData, sortPrice]);

  const sortedQuantity = useMemo(() => {
    return [...fltrData].sort((a, b) =>
      sortQuntity === "lq" ? a.quantity - b.quantity : b.quantity - a.quantity
    );
  }, [fltrData, sortQuntity]);

  const sortedRating = useMemo(() => {
    return [...fltrData].sort((a, b) =>
      sortRating === "lr" ? a.rating - b.rating : b.rating - a.rating
    );
  }, [fltrData, sortRating]);
  useEffect(() => {

  })

// const mewo = ()=> {
 
//     if (dosgName !== undefined) {
//       const filtered = fltrData.filter(item => item.dosage === dosgName);
//       setFilteredData(() => filtered)
    
//   }
// }
//   console.log(dosgName)

//   useEffect(() => {
//     mewo()
//   }, [dosgName]);
  return (
    <>
      <section className="max-w-[1280px] py-[100px] w-[100%]">
        <div className="flex w-[100%]">
          <div className="w-[25%] pr-[20px] ">
            <FilterBar availableDoasge={availableDoasge} />
          </div>
          <div className="w-[75%]">
            <div className="flex w-[100%] bg-[#FCC821] py-[14px] rounded-[10px] px-[20px] text-[#05222E] text-[16px] font-[600]">
              <div className="w-[25%] ">
                <p>Pharmacy</p>
              </div>
              <div className="w-[15%] flex items-center justify-center">
                <p className="flex items-center cursor-pointer">Dosage</p>
              </div>
              <div className="w-[15%] flex items-center justify-center">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={toggleSortPrice}
                >
                  Price{" "}
                  <span className="pl-[5px] flex items-center">
                    <LuArrowUpDown />
                  </span>
                </p>
              </div>
              <div className="w-[15%] flex items-center justify-center">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={toggleSortQuantity}
                >
                  Quantity{" "}
                  <span className="pl-[5px] flex items-center">
                    <LuArrowUpDown />
                  </span>
                </p>
              </div>
              <div className="w-[12%] flex items-center justify-center">
                <p
                  className="flex items-center cursor-pointer"
                  onClick={toggleSortRating}
                >
                  Rating{" "}
                  <span className="pl-[5px] flex items-center">
                    <LuArrowUpDown />
                  </span>
                </p>
              </div>
              <div className="w-[18%] text-center flex items-center justify-center">
                <p>Website</p>
              </div>
            </div>
            {/* card section */}
            <div>
              <CardResult sortedPrice={filteredData} />
            </div>
            {/* card section */}
          </div>
        </div>
      </section>
    </>
  );
}
