import FilterBar from "./Filter-Bar";
import { LuArrowUpDown } from "react-icons/lu";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainDatagetter } from "../redux toolkit/compareToolSlice";
import { IoClose } from "react-icons/io5";
import Img from "../assets/price tool/img.png";

export default function PriceCalculator({ maindata, availableDoasge }) {
  // Form detail
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    localStorage.setItem("fullName", fullName);
    console.log("Saved to localStorage:", { fullName, email });
    if (email !== "") {
      setIsSubscribed(true);
    }
    closeModal();
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setIsSubscribed(true);
    }
  }, []);
  // Form detail

  const dispatch = useDispatch();
  dispatch(mainDatagetter(maindata));
  console.log("main data in price calc", maindata);

  // useEffect(() => {
  //   dispatch(mainDatagetter(maindata));
  // }, [dispatch, maindata]);
  // navbar filters
  const fltrData = useSelector((state) => state.compareTool.mainData);
  const filteredMaxValue = useSelector(
    (state) => state.compareTool.filteredMaxValue
  );
  console.log("max value coming from store", filteredMaxValue);
  console.log("data coming from store", fltrData);
  const filteredName = useSelector((state) => state.compareTool.filteredName);
  console.log("filter name coming from store", filteredName);
  const [sortPrice, setSortPrice] = useState("lp");
  const [sortRating, setSortRating] = useState("lr");
  const [sortQuntity, setSortQuantity] = useState("lq");
  const [selectedDosage, setSelectedDosage] = useState();
  const [sortMaxValue, setSortMaxValue] = useState(fltrData);
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
    if (filteredName?.length > 0) {
      const filtered = fltrData.filter((item) =>
        filteredName.includes(item.dosage)
      );
      setFilteredData(filtered);
      console.log("filteredName:", filteredName);
      console.log("Filtered data with dosage in main component:", filtered);
    } else {
      setFilteredData(maindata);
    }
  }, [filteredName, fltrData]);
  // dosage filter
  // card data

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MaxValue = () => {
    // Do something with val, like calculating the max price
    const maxVal = Math.max(...filteredData.map((item) => item.price));
    console.log("Max value:", maxVal);
    return maxVal;
  };

  const pageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const newval = filteredData.slice(start, start + itemsPerPage);

    // Side effect here (usually not ideal inside useMemo)

    return newval;
  }, [filteredData, currentPage, itemsPerPage]);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggelModal = () => {
    setIsModalOpen(true);
  };
  // card data

  return (
    <>
      <section className="max-w-[1280px] py-[100px] w-[100%]">
        <div className="flex w-[100%]">
          <div className="w-[25%] pr-[20px] ">
            <FilterBar availableDoasge={availableDoasge} maxVal={MaxValue()} />
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
                <p className="flex items-center cursor-pointer">Discount </p>
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
              {/* <CardResult sortedPrice={filteredData} /> */}

              {pageData.map((srtdata) => (
                <div
                  key={srtdata.id}
                  className="flex w-full py-[10px] border-b border-[#DCDCDC] border-opacity-10  rounded-[0px] px-[0px] text-[#05222E] text-[16px] font-[600]"
                >
                  <div className="w-[25%]">
                    <div className="flex items-center gap-[20px]">
                      <img src={Img} alt="Pharmacy logo" />
                      <p>{srtdata.pharmacyName}</p>
                    </div>
                  </div>
                  <div className="w-[15%] flex items-center justify-center">
                    <p>{srtdata.dosage}</p>
                  </div>
                  <div className="w-[15%] flex items-center justify-center">
                    {isSubscribed ? (
                      <p>£ {srtdata.price}</p>
                    ) : (
                      <p
                        onClick={toggelModal}
                        className="text-[#FCC821] text-[18px] font-[600] cursor-pointer border-b-[2px] border-[#ffffff] hover:border-b-[2px] hover:border-[#FCC821] transition duration-500"
                      >
                        View Price
                      </p>
                    )}
                  </div>
                  <div className="w-[15%] flex items-center justify-center">
                    <p>{srtdata.quantity}</p>
                  </div>
                  <div className="w-[12%] flex items-center justify-center">
                    <p>{srtdata.rating}</p>
                  </div>
                  <div className="w-[18%] flex items-center justify-center text-center">
                    <a
                      href={srtdata.websiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px] border-2 text-[14px] border-[#FCC821] hover:text-[#FCC821] hover:bg-white transition duration-700 cursor-pointer">
                        Visit Pharmacy
                      </div>
                    </a>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2 py-4">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-[#FCC821] text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>

              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300">
                  <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition duration-300">
                    <div className="relative flex items-center justify-between mb-4">
                      <h2 className="text-[24px] border-b border-[#E4E4E4] pb-[10px] font-[700] text-[#070707] mb-0 text-center w-full">
                        ADD DETAIL
                      </h2>
                      <div
                        onClick={closeModal}
                        className="absolute text-[30px] flex align-items-center right-0 top-0 cursor-pointer"
                      >
                        <IoClose />
                      </div>
                    </div>

                    {/* Form Starts Here */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jhon"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="example@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full cursor-pointer transition duration-700 mt-2 px-4 py-2 bg-[#FCC821] text-white rounded hover:text-[#FCC821] hover:bg-white border-2 border-[#FCC821]"
                      >
                        Save
                      </button>
                    </form>
                    {/* Form Ends Here */}
                  </div>
                </div>
              )}
            </div>
            {/* card section */}
          </div>
        </div>
      </section>
    </>
  );
}
