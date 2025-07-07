import { useEffect, useState } from "react";
import api from "../services/api.js";
import { useDispatch } from "react-redux";
import { mLowPrice } from "../redux toolkit/compareToolSlice.js";
import HomeHeroSkeletonMounjaro from "./HomeHeroSkeletonMounjaro.jsx";
export default function MounjaroBoxHome() {
  const [apiDataM, setApiDataM] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await api.get("/medicine");

        const dataM = response.data.data.filter(
          (item) => item.medicine === "Mounjaro"
        );

        if (dataM.length !== 0) {
          setLoading(false);
        }

        const filteredByMgM = dataM.filter((item) => item.dosage === "2.5 mg");

        const apiDtaM = filteredByMgM
          .slice()
          .sort((a, b) => a.price - b.price)
          .slice(0, 3);
        setApiDataM(apiDtaM);

        dispatch(mLowPrice(apiDtaM[0].price));
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
          <HomeHeroSkeletonMounjaro />
        ) : (
          <>
            <ul className="!list-none !pl-0 !ml-0 space-y-2 text-gray-800">
              {apiDataM.map((item, index) => (
                <li
                  key={index}
                  className={`list-none rounded-xl flex justify-between p-4 ${
                    index === 0
                      ? "bg-[rgb(16_185_129/_0.05)]"
                      : "bg-[rgb(249_250_251)]"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="!text-[16px] font-[600]">
                      {item.pharmacy}
                    </div>
                    <div>
                      <span
                        className={`font-bold ${
                          index === 0
                            ? "text-[rgb(16_185_129)]"
                            : "text-[#000000]"
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
        )}
      </div>
    </>
  );
}
