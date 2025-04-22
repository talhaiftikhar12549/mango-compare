import Img from "../assets/price tool/img.png";
import React, { useState, useMemo } from 'react';
export default function CardResult({ sortedPrice, sortedRating }) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(sortedPrice.length / itemsPerPage);
  
  const pageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedPrice.slice(start, start + itemsPerPage); 
  } , [sortedPrice, sortedRating, currentPage, itemsPerPage]);

  return (
    <>
      {pageData.map(srtdata => (
        <div
          key={srtdata.id}
          className="flex w-full py-[30px] rounded-[10px] px-[20px] text-[#05222E] text-[16px] font-[600]"
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
            <p>£ {srtdata.price}</p>
          </div>
          <div className="w-[15%] flex items-center justify-center">
            <p>{srtdata.quantity}</p>
          </div>
          <div className="w-[12%] flex items-center justify-center">
            <p>{srtdata.rating}</p>
          </div>
          <div className="w-[18%] flex items-center justify-center text-center">
            <a href={srtdata.websiteURL} target="_blank" rel="noopener noreferrer">
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
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#FCC821] text-white' : 'bg-gray-100'
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
