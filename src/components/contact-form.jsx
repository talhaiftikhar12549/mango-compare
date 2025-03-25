import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  return (
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
        console.log("Form Submitted:", values);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="form-container w-full">
          <div className="flex space-x-5">
            <div className="flex flex-col">
              <label className="font-semibold">First Name</label>
              <Field
                type="text"
                name="firstName"
                className="border-b border-black py-1 px-2"
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
              className="bg-[#FCC821] px-10 py-5 rounded-md text-white text-semibold"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
