import { FaLocationDot } from "react-icons/fa6";

export const BlogCard = () => {
  return (
    <div className="bg-white shadow-lg w-[100%] p-5 space-y-5 rounded-xl">
      <p className="text-[#FCC821] font-bold">TECHNOLOGY</p>
      <h3 className="text-2xl font-semibold">
        Make sure to include in your wheel hire
      </h3>

      <p>
        Get all your ducks in a row good optics close the loop and zeitgeist so
        manage quarterly sales are great to hear for me Pipeline quarterly sales
        are at an all-time low future-proof, or 60% to 30% is a lot of persent
        Take five
      </p>

      <div className="flex space-x-5"> 
        <span className="flex justify-center items-center space-x-2 ">
          <FaLocationDot /> <p>5k views</p>
        </span>

        <span className="flex justify-center items-center space-x-2 ">
          <FaLocationDot /> <p>5k views</p>
        </span>

        <span className="flex justify-center items-center space-x-2 ">
          <FaLocationDot /> <p>5k views</p>
        </span>
      </div>

      <button
        className="bg-[#FCC821] px-10 mt-[67px] py-3 rounded-full mt-10 text-white text-semibold flex justify-center items-center space-x-5"
        type="submit"
      >
        <p>Read More</p> <FaLocationDot />
      </button>
    </div>
  );
};
