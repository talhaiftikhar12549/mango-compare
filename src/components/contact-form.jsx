import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import couponCodes from "./coupon-Data"
// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  subject: Yup.string().required("Please select a subject"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setRandomNumber(null);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const random = Math.floor(Math.random() * 100) + 1;
          setRandomNumber(random);
          setIsModalOpen(true);
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="form-container w-full">
            {/* Form Fields */}
            <div className="flex space-x-5">
              <div className="flex flex-col">
                <label className="font-semibold">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  className="border-b border-black bg-[#ffffff] py-1 px-2"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error text-xs text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="border-b border-black py-1 px-2"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error text-xs text-red-500"
                />
              </div>
            </div>

            <div className="flex space-x-5 mt-10">
              <div className="flex flex-col">
                <label className="font-semibold">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="border-b border-black py-1 px-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-xs text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold">Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  className="border-b border-black py-1 px-2"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error text-xs text-red-500"
                />
              </div>
            </div>

            <div className="mt-10">
              <label className="font-semibold">Select Subject?</label>
              <div className="flex space-x-5 mt-2">
                <label>
                  <Field type="radio" name="subject" value="Math" /> Math
                </label>
                <label>
                  <Field type="radio" name="subject" value="Science" /> Science
                </label>
                <label>
                  <Field type="radio" name="subject" value="History" /> History
                </label>
              </div>
              <ErrorMessage
                name="subject"
                component="div"
                className="error text-xs text-red-500"
              />
            </div>

            <div className="flex flex-col mt-10">
              <label className="font-semibold">Message</label>
              <Field
                as="textarea"
                name="message"
                className="border-b border-black py-1 px-2"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error text-xs text-red-500"
              />
            </div>

            <div className="flex justify-end my-5">
              <button
                className="bg-[#FCC821] px-10 py-5 rounded-md text-white font-semibold hover:text-[#FCC821] hover:bg-[#ffffff] border-[2px] border-[#FCC821] transition duration-700 cursor-pointer"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition duration-300">
            <h2 className="text-[24px] border-b border-[#E4E4E4] pb-[10px] font-[700] text-[#070707] mb-4 text-center">Free Gift Voucher</h2>
            
            <p className="text-md mb-4 text-center">
            Congratulation you get a discount code
            </p>
            <p className="text-2xl font-[600] mb-4 text-center">
              Your Copun Code is:{" "} <br />
              <span className="font-bold text-3xl text-[#FCC821]">{couponCodes[randomNumber]}</span>
            </p>
            <button
              onClick={closeModal}
              className="w-full cursor-pointer transition duration-700 mt-2 px-4 py-2 bg-[#FCC821] text-white rounded hover:text-[#FCC821] hover:bg-[#ffffff] border-[2px] border-[#FCC821] "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
