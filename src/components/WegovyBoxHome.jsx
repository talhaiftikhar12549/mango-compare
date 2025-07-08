import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { wLowPrice } from "../redux toolkit/compareToolSlice.js";

export default function WegovyBoxHome({ dataW }) {
  const [apiDataW, setApiDataW] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchListings = () => {
      const filteredByMgM = dataW.filter((item) => item.dosage === "0.25 mg");

      const apiDtaM = filteredByMgM
        .slice()
        .sort((a, b) => a.price - b.price)
        .slice(0, 3);
      setApiDataW(apiDtaM);
      dispatch(wLowPrice(apiDtaM[0].price));
    };

    fetchListings();
  }, []);

  return (
    <>
      <ul className="!list-none !pl-0 !ml-0 space-y-2 text-gray-800">
        {apiDataW.map((item, index) => (
          <li
            key={index}
            className={`list-none rounded-xl flex justify-between p-4 ${
              index === 0 ? "bg-orange-50" : "bg-[rgb(249_250_251)]"
            }`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="!text-[16px] font-[600]">{item.pharmacy}</div>
              <div>
                <span
                  className={`font-bold ${
                    index === 0 ? "text-[#ee9c25]" : "text-[#000000]"
                  }`}
                >
                  £{item.price}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
