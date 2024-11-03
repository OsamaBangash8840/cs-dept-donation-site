import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactImg from "../assest/contact.png";
import axios from "axios";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{11}$/, "Invalid mobile number")
        .required("Mobile number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(
          "https://donation-site-three.vercel.app/api/submit",
          values
        );
        console.log(response.data);
        alert("Form submitted successfully");
      } catch (error) {
        if (error.response && error.response.data.errors) {
          const validationErrors = {};
          error.response.data.errors.forEach((err) => {
            validationErrors[err.param] = err.msg;
          });
          setErrors(validationErrors);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section
      id="contact"
      className="w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-12 py-10"
    >
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={ContactImg}
          alt="contact"
          className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-full"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full lg:w-[50%] flex flex-col justify-center items-start gap-6 bg-black lg:p-12 p-6 rounded-3xl"
      >
        <h1 className="text-white text-3xl sm:text-4xl font-semibold font-ubuntu text-center lg:text-left w-full">
          Let's Contact Us
        </h1>
        <form
          id="form-box"
          className="w-full bg-transparent flex flex-col justify-center items-center gap-4"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            className={`w-full text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu ${
              formik.touched.name && formik.errors.name ? "border-red-500" : ""
            }`}
            placeholder="Enter your full name here"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}

          <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}

            <input
              type="text"
              placeholder="Enter your mobile number here"
              className={`w-full text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu ${
                formik.touched.mobile && formik.errors.mobile
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("mobile")}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
            ) : null}
          </div>

          <textarea
            className={`w-full text-white bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg border-none font-ubuntu ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : ""
            }`}
            placeholder="Enter your message"
            rows="4"
            {...formik.getFieldProps("message")}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-white px-6 py-3 sm:py-4 w-full rounded-md font-semibold text-md font-ubuntu"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
