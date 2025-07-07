import { useEffect, useState } from "react";
import api from "../services/api.js";
import { useDispatch } from "react-redux";
import { wLowPrice } from "../redux toolkit/compareToolSlice.js";
import HomeHeroSkeletonWegovy from "./HomeHeroSkeletonWegovy.jsx";

export default function WegovyBoxHome() {
  // const [apiDataM, setApiDataM] = useState([]);
  const [apiDataW, setApiDataW] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/medicine");

        const dataW = response.data.data.filter(
          (item) => item.medicine === "Wegovy"
        );

        if (dataW.length !== 0) {
          setLoading(false);
        }

        const filteredByMgW = dataW.filter((item) => item.dosage === "0.25 mg");

        const apiDtaW = filteredByMgW
          .slice()
          .sort((a, b) => a.price - b.price)
          .slice(0, 3);
        setApiDataW(apiDtaW);

        dispatch(wLowPrice(apiDtaW[0].price));
      } catch (error) {
        console.log("Failed to fetch listings", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <div className="p-0 m-0">
        {loading ? (
          <HomeHeroSkeletonWegovy />
        ) : (
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
        )}
      </div>
    </>
  );
}
