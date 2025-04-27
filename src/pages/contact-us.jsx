import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import ContactForm from "../components/contact-form";

const Contact = () => {
  return (
    <div className="max-w-[1280px] lg:px-[40px] xl:px-0 px-[16px] mx-auto flex flex-col items-center pb-[200px]">
      {/* HERO SECTION  */}
      <div className="w-full flex flex-col text-center py-10 space-y-2">
        <h1 className="font-bold text-[40px]">Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>

      {/* CONTACT FORM CONTAINER  */}
      <div className="w-full flex justify-center h-[580px] items-center bg-white shadow-xl">
        <div className="w-[40%] h-full bg-[#FCCE37] py-10 px-10 rounded-md">
          <h3 className="font-bold text-2xl">Contact Information</h3>

          <p className="mt-2">Say something to start a live chat!</p>

          <div className="mt-10 space-y-10">
            <span className="flex content-center items-center space-x-5">
              <BiSolidPhoneCall className="text-lg" /> <p>+1012 3456 789</p>
            </span>

            <span className="flex content-center items-center space-x-5">
              <IoMdMail className="text-lg" /> <p>demo@gmail.com</p>
            </span>

            <span className="flex content-center items-center space-x-5">
              <FaLocationDot className="text-xl" />
              <p className="lg:w-2/3">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </span>
          </div>
        </div>

        <div className="w-[60%] px-10 py-10 flex items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
