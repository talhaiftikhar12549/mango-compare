import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import cardPattren from "../assets/home/cardPattren.png";
import ContactForm from "../components/contact-form";

const Contact = () => {
  return (
    
    <div className="max-w-[1280px] lg:px-[40px] xl:px-0 px-[16px] mx-auto flex flex-col items-center pb-[200px] ">
      {/* HERO SECTION  */}
      <div className="w-full flex flex-col text-center py-10 space-y-2">
        <h1 className="font-bold text-[40px]">Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      {/* CONTACT FORM CONTAINER  */}
      <div className="w-full flex justify-center h-[580px] items-center bg-white shadow-xl rounded-md">
        <div className="hidden md:block w-[40%] h-full bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 py-10 px-8 xl:px-10 rounded-md relative">
          <img
            className="absolute bottom-0 left-0 z-2 rotate-180"
            src={cardPattren}
            alt=""
          />

          <h3 className="!font-bold !text-2xl">Contact Information</h3>

          <p className="mt-2">Say something to start a chat!</p>

          <div className="mt-10 space-y-10">
            <div className="flex flex-wrap items-center space-x-5">
              <IoMdMail className="text-lg" />
              <p className="break-words whitespace-normal max-w-full">
                info@mangocompare.co.uk
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-[60%] px-5 sm:px-10  py-5 sm:py-10 flex items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
