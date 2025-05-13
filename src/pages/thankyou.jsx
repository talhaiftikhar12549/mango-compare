import { Link } from "react-router-dom"; // or 'next/link' if using Next.js

const ThankYouPage = () => {
  return (
    <div className="w-screen h-[50vh] flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#FCC821] mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          We’ve received your message and will get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#FCC821] hover:bg-[#ddc986] text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
