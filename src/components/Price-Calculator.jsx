import FilterBar from "./Filter-Bar";
import { LuArrowUpDown } from "react-icons/lu";
import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainDatagetter } from "../redux toolkit/compareToolSlice";
import { IoClose } from "react-icons/io5";
import Img from "../assets/price tool/img.png";
import { FaRegCopy } from "react-icons/fa";
// import poperGif from "../assets/price tool/poper.gif";
export default function PriceCalculator({
  maindata,
  availableDoasge,
  isResetter,
}) {
  // Form detail
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [DiscountCode, setDiscountCode] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");
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
  // copun code copy
  const couponCodes = ["code1", "code2", "code3"];
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 1500); // Hide tooltip after 1.5s
      })
      .catch((err) => {
        console.error("Copy failed", err);
      });
  };
  // copun code copy
  const dispatch = useDispatch();
  dispatch(mainDatagetter(maindata));
  console.log("main data in price calc", maindata);
  const [isDiscountModalOpen, setDiscountIsModalOpen] = useState(false);
  const [selectedDiscountId, setSelectedDiscountId] = useState(null);

  // Functions
  const closeDiscountModal = () => {
    setDiscountIsModalOpen(false);
    setSelectedDiscountId(null);
  };

  const openDiscountModal = (id) => {
    setDiscountIsModalOpen(true);
    setSelectedDiscountId(id);
  };
  // navbar filters Price and Ratting Filter
  const fltrData = useSelector((state) => state.compareTool.mainData);
  const filteredMaxValue = useSelector(
    (state) => state.compareTool.filteredMaxValue
  );
  console.log("max value coming from store", filteredMaxValue);
  console.log("data coming from store", fltrData);
  const maxMinPrice = useSelector((state) => state.compareTool.mPrice);
  console.log(
    "min max price coming from store in price calculator component",
    maxMinPrice
  );
  const filteredName = useSelector((state) => state.compareTool.filteredName);
  console.log("filter name coming from store", filteredName);
  const [sortPrice, setSortPrice] = useState("lp");
  const [sortRating, setSortRating] = useState("lr");
  const [filteredData, setFilteredData] = useState(fltrData);
  const toggleSortPrice = () => {
    setSortPrice((prev) => (prev === "lp" ? "hp" : "lp"));
    setFilteredData(() => sortedPrice);
  };
  const toggleSortRating = () => {
    setSortRating((prev) => (prev === "lr" ? "hr" : "lr"));
    setFilteredData(() => sortedRating);
  };

  const sortedPrice = useMemo(() => {
    return [...filteredData].sort((a, b) =>
      sortPrice === "lp" ? a.price - b.price : b.price - a.price
    );
  }, [filteredData, sortPrice]);

  const sortedRating = useMemo(() => {
    return [...filteredData].sort((a, b) =>
      sortRating === "lr" ? a.rating - b.rating : b.rating - a.rating
    );
  }, [filteredData, sortRating]);
  // navbar filters Price and Ratting Filter

  //  Filteration Process
  const discountedPrice = useSelector((state) => state.compareTool.isDiscount);
  // const [rawData, setRawData] = useState(maindata);

  useEffect(() => {
    let workingData = [...maindata];

    // Apply discount filter if needed
    if (discountedPrice === true) {
      workingData = workingData.filter((item) => {
        const discountedpass = parseFloat(item.discount);
        return discountedpass;
      });
      console.log("Array after discount filter:", workingData);
    }

    // Apply dosage and price range filter
    if (filteredName?.length > 0 && maxMinPrice?.length === 2) {
      const [minPrice, maxPrice] = maxMinPrice;

      const filtered = workingData.filter((item) => {
        const isDosageMatch = filteredName.includes(item.dosage);
        const price = parseFloat(item.price);
        const isPriceInRange = price >= minPrice && price <= maxPrice;
        return isDosageMatch && isPriceInRange;
      });

      setFilteredData(filtered);
      console.log("Filtered by dosage and price:", filtered);
    } else if (maxMinPrice?.length === 2) {
      const [minPrice, maxPrice] = maxMinPrice;

      const filteredByPrice = workingData.filter((item) => {
        const price = parseFloat(item.price);
        return price >= minPrice && price <= maxPrice;
      });

      setFilteredData(filteredByPrice);
      console.log("Filtered by price only:", filteredByPrice);
    } else {
      setFilteredData(workingData);
      console.log("No extra filters applied, using base data:", workingData);
    }
  }, [discountedPrice, filteredName, maxMinPrice, maindata]);

  //  Filteration Process

  // Min Max Logic
  const MaxValue = () => {
    const maxVal = Math.max(...maindata.map((item) => item.price));
    console.log("Max value:", maxVal);
    return maxVal;
  };

  const MinValue = () => {
    const minVal = Math.min(...maindata.map((item) => item.price));
    console.log("Min value:", minVal);
    return minVal;
  };
  // Min Max Logic

  // card data
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const newval = filteredData.slice(start, start + itemsPerPage);

    return newval;
  }, [filteredData, currentPage, itemsPerPage]);
  // card data

  // Login Modal Open and close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggelModal = () => {
    setIsModalOpen(true);
  };
  // Login Modal Open and close modal

  return (
    <>
      <section className="max-w-[1280px] custom-width  lg:px-[40px] xl:px-0 px-[16px] mx-auto py-[100px] w-[100%]">
        <div className="flex w-[100%]">
          <div className="w-[25%] pr-[20px] ">
            <FilterBar
              availableDoasge={availableDoasge}
              maxVal={MaxValue()}
              minValue={MinValue()}
              isResetter={isResetter}
            />
          </div>
          <div className="w-[75%]">
            <div className="flex w-[100%] bg-[#FCC821] py-[14px] rounded-[10px] px-[20px] text-[#05222E] text-[16px] font-[600]">
              <div className="w-[30%] ">
                <p>Pharmacy</p>
              </div>
              <div className="w-[17%] flex items-center justify-center">
                <p className="flex items-center">Strength</p>
              </div>
              <div className="w-[18%] flex items-center justify-center">
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

              <div className="w-[17%] flex items-center justify-center">
                <p
                  className="flex items-center cursor-pointer pl-[30px]"
                  onClick={toggleSortRating}
                >
                  Rating{" "}
                  <span className="pl-[5px] flex items-center">
                    <LuArrowUpDown />
                  </span>
                </p>
              </div>
              <div className="w-[18%] flex items-center justify-center">
                <p className="flex items-center ">Website </p>
              </div>
              {/* <div className="w-[18%] text-center flex items-center justify-center">
                <p>Website</p>
              </div> */}
            </div>
            {/* card section */}
            <div>
              <>
                {pageData.map((srtdata) => (
                  <div
                    key={srtdata._id}
                    className="flex w-full py-[10px] border-b border-[#DCDCDC] border-opacity-10 rounded-[0px] px-[0px] text-[#05222E] text-[16px] font-[600]"
                  >
                    <div className="w-[30%]">
                      <div className="flex items-center gap-[20px]">
                        <img src={Img} alt="Pharmacy logo" />

                        <a
                          href={srtdata.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-[#000000] "
                        >
                          {srtdata.pharmacy}
                        </a>
                      </div>
                    </div>
                    <div className="w-[17%] flex items-center justify-center">
                      <p>{srtdata.dosage}</p>
                    </div>
                    {/* <div className="w-[18%] flex items-center justify-center">
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

                     
                      {srtdata.discountedPrice == 0 || "" ? <p>£ {srtdata.price}</p> : <p className="line-through">£ {srtdata.price}</p> <p >£ {srtdata.discountedPrice}</p> }
                    </div> */}
                    <div className="w-[18%] flex items-center justify-center">
                      {discountedPrice ? (
                        srtdata.discount === null ? (
                          <p>£ {srtdata.price}</p>
                        ) : (
                          <>
                            <p className="line-through text-[#cccccc] relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[2px] after:bg-[#cccccc] after:-translate-y-1/2">
                              £ {srtdata.price}
                            </p>
                            <p className="ml-2 text-[#000000]">
                              £ {srtdata.discount}
                            </p>
                          </>
                        )
                      ) : (
                        <p className="ml-2 text-[#000000]">£ {srtdata.price}</p>
                      )}
                    </div>

                    <div className="w-[17%] flex items-center justify-center">
                      <p>{srtdata.rating}</p>
                    </div>
                    <div className="w-[18%] flex items-center justify-center cursor-pointer relative group">
                      <div
                        onClick={() => openDiscountModal(srtdata._id)}
                        className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px] border-2 text-[14px] border-[#FCC821] hover:text-[#FCC821] hover:bg-white transition duration-700 cursor-pointer"
                      >
                        Visit Pharmacy
                      </div>

                      {/* Show the modal if the modal is open and the selected id matches */}
                      {isDiscountModalOpen &&
                        selectedDiscountId === srtdata._id && (
                          <div className="fixed p-2 inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition duration-300">
                              {/* <h2 className="text-[22px] border-b border-[#E4E4E4] pb-[10px] font-[700] text-[#070707] mb-4 text-center">
                                Congratulations! <br />{" "}
                                <span className="text-[16px] font-[500]">
                                  You get a Special Mango Compare Discount.
                                </span>
                              </h2> */}
                              <div className="relative flex items-center justify-between mb-4">
                                <h2 className="text-[22px] border-b border-[#E4E4E4] pb-[10px] font-[700] text-[#070707] mb-4 text-center">
                                  Congratulation <br />
                                  <span className="text-[14px] sm:text-[16px] font-[500]">
                                    You get a Special Mango Compare Discount.
                                  </span>
                                </h2>
                                <div
                                  onClick={closeDiscountModal}
                                  className="absolute text-[30px] flex align-items-center right-0 top-0 cursor-pointer"
                                >
                                  <IoClose />
                                </div>
                              </div>
                              {srtdata.discount_code && (
                                <>
                                  {couponCodes.map((code, idx) => (
                                    <div
                                      key={idx}
                                      onClick={() => handleCopy(code)}
                                      className="relative group w-full cursor-pointer transition duration-300 px-4 py-2 my-2 text-[#FCC821] bg-white border-[2px] border-[#FCC821] flex items-center justify-between rounded"
                                    >
                                      <span>{code}</span>
                                      <div className="flex items-center space-x-2">
                                        <FaRegCopy className="text-[20px]" />
                                      </div>

                                      {/* Tooltip */}
                                      {copiedCode === code && (
                                        <div className="absolute -top-7 right-2 bg-[#FCC821] text-black text-xs px-2 py-1 rounded shadow transition-opacity duration-300">
                                          Copied!
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </>
                              )}

                              <p
                                className="text-[18px] font-[600] mb-4 text-center bg-[#fcc82145] border border-dotted border-[#977504]
                                     rounded-[10px] py-[10px] px-4"
                              >
                                <span className="font-bold text-[#484848]">
                                  {srtdata.discount_code === ""
                                    ? "No discount"
                                    : srtdata.discount_code}
                                </span>
                              </p>
                              <a
                                href={srtdata.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button
                                  onClick={closeDiscountModal}
                                  className="w-full cursor-pointer transition duration-700 mt-2 px-4 py-2 bg-[#FCC821] text-white rounded hover:text-[#FCC821] hover:bg-[#ffffff] border-[2px] border-[#FCC821]"
                                >
                                  Visit Pharmacy
                                </button>
                              </a>
                            </div>
                          </div>
                        )}
                    </div>

                    {/* <div className="w-[18%] flex items-center justify-center text-center">
                      <a
                        href={srtdata.websiteURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="py-[14px] px-[24px] bg-[#FCC821] rounded-[10px] border-2 text-[14px] border-[#FCC821] hover:text-[#FCC821] hover:bg-white transition duration-700 cursor-pointer">
                          Visit Pharmacy
                        </div>
                      </a>
                    </div> */}
                  </div>
                ))}
              </>

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
                <div className="fixed p-2 inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300">
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
