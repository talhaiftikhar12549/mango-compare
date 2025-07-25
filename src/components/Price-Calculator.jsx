import FilterBar from "./Filter-Bar";
import { useState, useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainDatagetter } from "../redux toolkit/compareToolSlice";
import { IoClose } from "react-icons/io5";
import Img from "../assets/price tool/img.png";
import { FaRegCopy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdShield } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { createPortal } from "react-dom";

export default function PriceCalculator({
  maindata,
  availableDoasge,
  isResetter,
  totalPharmacy,
}) {
  // Form detail
  const [discountedFilteredPrice, setDiscountedFilteredPrice] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [DiscountCode, setDiscountCode] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    localStorage.setItem("fullName", fullName);

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
  // const couponCodes = ["code1", "code2", "code3"];
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 1500);
      })
      .catch((err) => {
        console.error("Copy failed", err);
      });
  };
  // copun code copy
  const dispatch = useDispatch();
  dispatch(mainDatagetter(maindata));

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
  const maxMinPrice = useSelector((state) => state.compareTool.mPrice);
  const filteredName = useSelector((state) => state.compareTool.filteredName);
  const priceSorter = useSelector((state) => state.compareTool.isPriceSort);
  const [sortPrice, setSortPrice] = useState("lp");
  const [sortPharmacy, setSortPharmacy] = useState("des");
  const [sortRating, setSortRating] = useState("lr");
  const [filteredData, setFilteredData] = useState(fltrData);

  const toggleSortPrice = () => {
    setSortPrice((prev) => (prev === "lp" ? "hp" : "lp"));
    setFilteredData(() => sortedPrice);
  };
  useEffect(() => {
    toggleSortPrice();
    console.log("Price Sorter:", priceSorter);
  }, [priceSorter]);

  const togglePharmacy = () => {
    setSortPharmacy((prev) => (prev === "asc" ? "des" : "asc"));
    setFilteredData(() => sortedPharmacy);
  };
  const toggleSortRating = () => {
    setSortRating((prev) => (prev === "lr" ? "hr" : "lr"));
    setFilteredData(() => sortedRating);
  };

  const sortedPharmacy = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const nameA = a.pharmacy.toLowerCase();
      const nameB = b.pharmacy.toLowerCase();
      if (sortPharmacy === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }, [filteredData, sortPharmacy]);

  const sortedRating = useMemo(() => {
    return [...filteredData].sort((a, b) =>
      sortRating === "lr" ? a.rating - b.rating : b.rating - a.rating
    );
  }, [filteredData, sortRating]);
  // navbar filters Price and Ratting Filter

  //  Filteration Process
  const discountedPrice = useSelector((state) => state.compareTool.isDiscount);

  const sortedPrice = useMemo(() => {
    if (discountedPrice === true) {
      return sortPrice === "hp"
        ? [...discountedFilteredPrice]
        : [...discountedFilteredPrice].reverse();
    } else {
      return [...filteredData].sort((a, b) =>
        sortPrice === "lp" ? a.price - b.price : b.price - a.price
      );
    }
  }, [filteredData, sortPrice, discountedFilteredPrice, discountedPrice]);

  useEffect(() => {
    let workingData = [...maindata];

    if (discountedPrice === true) {
      workingData = workingData.sort((a, b) => {
        const aValue =
          a.discount !== null ? parseFloat(a.discount) : parseFloat(a.price);
        const bValue =
          b.discount !== null ? parseFloat(b.discount) : parseFloat(b.price);
        return aValue - bValue;
      });
      setDiscountedFilteredPrice(workingData);
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
    } else if (maxMinPrice?.length === 2) {
      const [minPrice, maxPrice] = maxMinPrice;

      const filteredByPrice = workingData.filter((item) => {
        const price = parseFloat(item.price);
        return price >= minPrice && price <= maxPrice;
      });

      setFilteredData(filteredByPrice);
    } else {
      setFilteredData(workingData);
    }
  }, [discountedPrice, filteredName, maxMinPrice, maindata]);

  //  Filteration Process

  // Min Max Logic
  const MaxValue = () => {
    const maxVal = Math.max(...maindata.map((item) => item.price));
    return maxVal;
  };

  const MinValue = () => {
    const minVal = Math.min(...maindata.map((item) => item.price));
    return minVal;
  };
  // Min Max Logic

  // card data
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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

  // filter toggel
  const [filterBar, setIsFilterBar] = useState(false);
  const filterBarHandler = () => {
    setIsFilterBar(!filterBar);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isDiscountModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        closeDiscountModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDiscountModalOpen]);

  // filter toggel
  return (
    <>
      <section className="max-w-[1280px] custom-width lg:px-[40px] xl:px-0 px-[16px] mx-auto md:py-[50px] py-[40px] w-[100%]">
        <div className="flex md:hidden pb-2">
          <div
            onClick={filterBarHandler}
            className="py-[14px] w-[101.27px] font-semibold px-[8px] xl:px-[24px] bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-[10px] hover:text-[#ffffff] text-[14px] hover:bg-white transition duration-700 cursor-pointer"
          >
            {filterBar ? "Hide Filter" : "Show Filter"}
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="hidden md:block w-[25%] pr-[20px]">
            <FilterBar
              availableDoasge={availableDoasge}
              maxVal={MaxValue()}
              minValue={MinValue()}
              isResetter={isResetter}
            />
          </div>
          {filterBar && (
            <div className="fixed md:static top-0 left-0 z-50 md:hidden w-[100%] pr-[20px]">
              <FilterBar
                closeFilter={filterBarHandler}
                availableDoasge={availableDoasge}
                maxVal={MaxValue()}
                minValue={MinValue()}
                isResetter={isResetter}
              />
            </div>
          )}

          <div
            className={`w-full md:w-[75%] ${
              filterBar ? "md:w-[75%]" : "w-[100%]"
            }`}
          >
            <div className="flex w-full justify-between">
              <div>
                <h3 className="!text-[24px] !pt-[0px] !font-[700]">
                  Compare Real-Time Prices from UK Pharmacies
                </h3>
                <p className="text-[#7e7f82]">
                  Prices updated daily from GPhC-regulated pharmacies
                </p>
              </div>
              <div className=" flex gap-3">
                <div>
                  <span className="bg-green-100 text-[rgb(16_185_129)] flex gap-1 text-xs px-3 py-2 rounded-full ml-auto">
                    <MdShield className="mt0.5]" /> All Gphc Verified
                  </span>
                </div>
                <div>
                  <span className="bg-[#f8f5ee] text-[#ee9c25] flex gap-1 text-xs px-3 py-2 rounded-full ml-auto">
                    <FaAward className="mt0.5]" /> Best Prices
                  </span>
                </div>
              </div>
            </div>
            {/* card section */}
            <div>
              <>
                {pageData.map((srtdata) => (
                  <div
                    key={srtdata._id}
                    className={`flex w-full py-[10px] my-5 border-2  rounded-lg px-[10px] text-[#05222E] text-[14px] transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl  font-[400] ${
                      discountedPrice && srtdata.discount
                        ? "bg-[#fff9eb] border-[#ff700077]"
                        : "bg-white border-[#eae6e2] border-opacity-10 hover:border-[#ff6a0055]"
                    }`}
                  >
                    <div className="w-[15%] md:w-[35%] flex items-center justify-start">
                      <div className="flex flex-col md:flex-row min-h-[102px] justify-center md:justify-start md:items-center gap-2 md:gap-[20px]">
                        {srtdata.pharmacyLogo == "" ? (
                          <img src={Img} alt="Pharmacy logo" />
                        ) : (
                          <img
                            className="w-[100px] md:w-[100px] "
                            src={srtdata.pharmacyLogo}
                            alt="Pharmacy logo"
                          />
                        )}
                        <div className="flex-col items-center justify-center">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-[#000000] text-[18px] font-[600]"
                          >
                            {srtdata.pharmacy}
                          </a>
                          <div onClick={() => window.open(srtdata.tp_link, '_blank')} className="flex items-center cursor-pointer">
                            <FaStar className="mb-1 mr-1 text-[#04DA8D]" />{" "}
                            <p className="font-semibold ">
                              {" "}
                              {srtdata.rating}{" "}
                              <span className="font-[400] text-[#7e7f82]">
                                (verified)
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[12%] hidden md:flex flex-col items-center gap-2 !justify-center">
                      <p className="text-[#7e7f82]">Strength</p>
                      <p className="text-[16px] font-[600]">{srtdata.dosage}</p>
                    </div>
                    <div className="w-[15%] flex flex-col items-center gap-2 justify-center">
                      <p className="text-[#7e7f82]">Price / Dosage</p>
                      {discountedPrice ? (
                        srtdata.discount === null ? (
                          <p className="!text-[22px] font-[500]">
                            £ {srtdata.price}
                          </p>
                        ) : (
                          <>
                            <p className="ml-2 !text-[24px] font-[700] text-[#000000]">
                              £ {srtdata.discount}
                            </p>
                            <p className="line-through !text-[16px] font-[600] text-[#cccccc] relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-1/2 after:h-[2px] after:bg-[#cccccc] after:-translate-y-1/2">
                              £ {srtdata.price}
                            </p>
                          </>
                        )
                      ) : (
                        <p className="ml-2 !text-[22px] font-[700] text-[#000000]">
                          £ {srtdata.price}
                        </p>
                      )}
                    </div>
                    <div className="w-[20%] md:w-[12%] md:hidden flex flex-col items-center gap-2 !justify-center">
                      <p className="text-[#7e7f82]">Strength</p>
                      <p className="text-[16px] font-[600]">{srtdata.dosage}</p>
                    </div>
                    <div className="w-[25%] md:w-[20%] flex flex-col items-center gap-2  justify-center text-center capitalize">
                      <p className="text-[#7e7f82]">Delivery Fee</p>
                      <p className="font-[600]">{srtdata.delivery_fee}</p>
                    </div>
                    <div className="w-[25%] md:w-[18%] flex items-center justify-center cursor-pointer relative group">
                      {srtdata.discount == null ? (
                        <a
                          href={srtdata.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-[14px] font-semibold px-[7px] xl:px-[24px] bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-[10px]  text-[12px]  hover:text-[#FFFFFF] hover:bg-white transition duration-700 cursor-pointer"
                        >
                          Visit Pharmacy
                          <span className="sr-only">{srtdata.pharmacy}</span>
                        </a>
                      ) : discountedPrice ? (
                        <div
                          onClick={() => openDiscountModal(srtdata._id)}
                          className="py-[14px] font-semibold px-[7px] xl:px-[24px] bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-[10px] text-[12px] text-[#FCCFFFFFF821] hover:text-[#ffffff] transition duration-700 cursor-pointer"
                        >
                          Discount Info
                        </div>
                      ) : (
                        <a
                          href={srtdata.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-[14px] font-semibold px-[7px] xl:px-[24px] bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 rounded-[10px] text-[12px] hover:text-[#FFFFFF] hover:bg-white transition duration-700 cursor-pointer"
                        >
                          Visit Pharmacy
                          <span className="sr-only">{srtdata.pharmacy}</span>
                        </a>
                      )}

                      {/* Full-screen Modal rendered via Portal */}
                      {isDiscountModalOpen &&
                        selectedDiscountId === srtdata._id &&
                        createPortal(
                          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300">
                            <div
                              ref={modalRef}
                              className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition duration-300 relative"
                            >
                              <div className="flex items-center justify-between mb-4">
                                <h2 className="text-[22px] border-b border-[#E4E4E4] pb-[10px] font-[700] text-[#070707] mb-4 text-center w-full">
                                  Discount Info <br />
                                  <span className="text-[14px] sm:text-[16px] font-[500] leading-0">
                                    Use the following code(s) at checkout to get
                                    the discount:
                                  </span>
                                </h2>
                                <div
                                  onClick={closeDiscountModal}
                                  className="absolute text-[30px] flex items-center right-4 top-4 cursor-pointer hover:text-red-500"
                                >
                                  <IoClose />
                                </div>
                              </div>

                              {srtdata.discount_info &&
                              srtdata.discount_info.length > 0 ? (
                                srtdata.discount_info.map((item, idx) => (
                                  <div
                                    key={item._id || idx}
                                    className="relative group w-full transition duration-300 px-4 py-2 my-5 text-orange-500 bg-white border-[2px] border-orange-500 flex items-center justify-between rounded"
                                  >
                                    {item.applied && (
                                      <p className="text-[12px] text-[#ffffff] absolute top-[-18px] bg-orange-500 left-[-2px] px-[6px] rounded-tl-[2px] rounded-tr-[2px]">
                                        Applied
                                      </p>
                                    )}

                                    <div className="flex flex-col">
                                      <span className="font-semibold">
                                        {item.discount_type}
                                      </span>
                                      <span className="text-xs text-black">
                                        {item.discount_statement}
                                      </span>
                                    </div>

                                    {item.discount_code && (
                                      <div
                                        onClick={() =>
                                          handleCopy(item.discount_code)
                                        }
                                        className="flex flex-col items-center text-[8px] font-[500] cursor-pointer"
                                      >
                                        <FaRegCopy className="text-[20px]" />
                                        Copy Code
                                      </div>
                                    )}

                                    {copiedCode === item.discount_code && (
                                      <div className="absolute -top-7 right-2 bg-orange-500 text-black text-xs px-2 py-1 rounded shadow transition-opacity duration-300">
                                        Copied!
                                      </div>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <p className="text-[18px] font-[600] mb-4 text-center bg-[#fcc82145] border border-dotted border-[#977504] rounded-[10px] py-[10px] px-4">
                                  <span className="font-bold text-[#484848]">
                                    Sorry, no discount available
                                  </span>
                                </p>
                              )}

                              <a
                                href={srtdata.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button
                                  onClick={closeDiscountModal}
                                  className="w-full cursor-pointer transition duration-700 mt-2 px-4 py-2 bg-orange-500 text-[#ffffff] font-semibold rounded hover:bg-orange-600 border-[2px] border-orange-500"
                                >
                                  Visit Pharmacy
                                </button>
                              </a>
                            </div>
                          </div>,
                          document.body
                        )}
                    </div>
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
                        ? "bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 text-white"
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
