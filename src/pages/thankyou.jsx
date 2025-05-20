import { Link } from "react-router-dom"; // or 'next/link' if using Next.js

const ThankYouPage = () => {
  return (
    <div className="max-w-[1280px] lg:px-[40px] xl:px-0 px-[16px] h-[50vh] flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#FCC821] mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          We’ve received your message and will get back to you as soon as
          possible.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#FCC821] border-[1px] border-[#FCC821]  hover:text-[#000000] hover:bg-[#FFFFFF] hover:border-[#000000] transition duration-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
