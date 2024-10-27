'use client';
import Link from "next/link";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(40, 'Name must be 40 characters or less'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
      )
      .required('Email is required'),
    phone: Yup.string()
      .required('Phone number is required')
      .max(20, 'Phone number must be 20 characters or less')
      .matches(/^[0-9]+$/, 'Phone number must contain only digits'),
    subject: Yup.string()
      .required('Subject is required')
      .max(150, 'Subject must be at most 150 characters long'),
    message: Yup.string()
      .required('message is required')
      .max(1000, 'Subject must be at most 1000 characters long'),

  });
  return (
    <div>
      {/* Header section of Contact Page  */}
      <div className="contact-hero-bg bg-cover pt-[160px] pb-[160px] overflow-hidden xl:after:left-[-140px]">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] 2xl:max-w-[1380px] w-full px-4">
          <div className="px-2">
            <ul className="mb-[10px] list-none flex flex-row text-[#FFFFFF] gap-x-5">
              <li className="list-none font-bold text-lg"><Link className="mr-[20px] transition duration-[0.4s]" href="/">Home</Link><span>|</span></li>
              <li className="list-none font-bold text-lg text-blue">Contact Us</li>
            </ul>
            <h1 className="md:text-[70px] md:leading-[80px] sm:text-4xl text-2xl text-start leading-[1.4] lg:font-bold font-semibold text-[#FFFFFF]">
              Contact us</h1>
          </div>
        </div>
      </div>
      {/* Card Section of Contact Page  */}
      <div className="relative bg-bg-color md:py-[100px] py-[70px] w-full">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] 2xl:max-w-[1300px] w-full px-4">
          <div className="flex md:flex-row flex-col gap-x-8 mx-auto justify-center gap-y-10">
            <div className="relative flip-card md:w-[33%] sm:w-[80%] w-full py-[40px] mb:py-[60px] lg:py-[80px] px-[30px] pt-[75px] mt-10 bg-[#FFFFFF] shadow-[0px_25px_70px_rgba(0,0,0,0.08)] z-[1] group transition-all duration-[0.6s]">
              <div className="w-[60px] h-[60px] rounded-full bg-blue flex justify-center text-center items-center absolute top-[-30px] left-[40px] leading-[60px] spin-box">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" className="text-[35px] text-[#FFFFFF] flip-animate group-hover:rotate transition-all duration-[0.4s] ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                  </path>
                </svg></div>
              <div className="group-hover:text-[#FFFFFF] py-[10px] ">
                <h4 className="text-3xl leading-[40px] font-bold">Office Location</h4>
                <p className="font-normal text-[22px] leading-[30px] mb-[15px] text-[#676767] group-hover:text-[#b0b0bd]">
                  300 Nicole Ave, Mountain House, CA-95391</p>
              </div>
            </div>
            <div className="relative flip-card md:w-[33%] sm:w-[80%] w-full py-[40px] mb:py-[60px] lg:py-[80px] px-[30px] pt-[75px] mt-10 bg-[#FFFFFF] shadow-[0px_25px_70px_rgba(0,0,0,0.08)] z-[1] group transition-all duration-[0.6s]">
              <div className="w-[60px] h-[60px] rounded-full bg-blue flex justify-center text-center items-center absolute top-[-30px] left-[40px] leading-[60px] spin-box">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="text-[35px] text-[#FFFFFF] flip-animate group-hover:rotate transition-all duration-[0.4s] ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z">
                  </path>
                </svg></div>
              <div className="group-hover:text-[#FFFFFF] py-[10px]">
                <h4 className="text-3xl leading-[40px]  font-bold">Tell To Us</h4>
                <p className="font-normal text-[20px] leading-[30px] mb-[15px] text-[#676767] group-hover:text-[#b0b0bd]">
                  Keeping You Always Better Connected.</p>
                <p className="text-base text-[#676767] lowercase leading-[30px] group-hover:text-[#b0b0bd]">
                  +1-619-678-1977</p>
              </div>
            </div>
            <div className="relative flip-card md:w-[33%] sm:w-[80%] w-full py-[40px] mb:py-[60px] lg:py-[80px] px-[30px] pt-[75px] mt-10 bg-[#FFFFFF] shadow-[0px_25px_70px_rgba(0,0,0,0.08)] z-[1] group transition-all duration-[0.6s]">
              <div className="w-[60px] h-[60px] rounded-full bg-blue flex justify-center text-center items-center absolute top-[-30px] left-[40px] leading-[60px] spin-box">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="text-[35px] text-[#FFFFFF] flip-animate group-hover:rotate transition-all duration-[0.4s] ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                  </path>
                </svg></div>
              <div className="group-hover:text-[#FFFFFF] py-[10px]">
                <h4 className="text-3xl leading-[40px]  font-bold">Quick Email</h4>
                <p className="font-normal text-[20px] leading-[30px] mb-[15px] text-[#676767] group-hover:text-[#b0b0bd]">
                  Drop Us A Mail We Will Answer You Asap.</p>
                <p className="text-base text-[#676767] lowercase leading-[30px] group-hover:text-[#b0b0bd]">
                  info@gooseittc.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="relative bg-bg-color md:py-[80px] py-[40px] w-full">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] 2xl:max-w-[1380px] w-full px-4">
          <div className="bg-[#FFFFFF] md:px-[50px] md:py-[70px] py-[50px] px-[30px] shadow-[0px_25px_70px_rgba(0,0,0,0.08)] md:w-[93.5%] max-w-full mx-auto">
            <div className="text-center lg:max-w-[660px] mx-auto mb-[60px]">
              <span className="relative uppercase font-bold pl-[55px] inline-block mb-[14px] text-blue text-center
                        before:absolute before:w-[40px] before:h-[2px] before:bg-blue before:top-[6px] before:left-0
                        after:absolute after:w-[40px] after:h-[2px] after:bg-blue after:bottom-[6px] after:left-0 text-xl">
                GET IN TOUCH
              </span>
              <h2 className="md:text-[45px] sm:text-4xl text-[26px] font-bold md:leading-[55px] sm:leaing-[40px] sm:mt-0 mt-5 leading-[35px] text-text-black">
                We Are Always Ready For Your Solution
              </h2>
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values,{resetForm}) => {
                // Handle form submission
                console.log(values, 'form values');
                resetForm();
              }}
            >
              {({ handleSubmit, isValid, dirty }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="flex w-full sm:flex-row flex-col mb-[20px] sm:h-[60px] lg:gap-x-8 gap-x-5 gap-y-8">
                    <Field name="name">
                      {({ field }) => (
                        <input
                          {...field}
                          placeholder="Name"
                          type="text"
                          required
                          className="sm:w-1/2 w-full max-w-full md:h-full h-[60px] p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                        />
                      )}
                    </Field>
                    <ErrorMessage name="name" component="div" className="text-red-600" />

                    <Field name="email">
                      {({ field }) => (
                        <input
                          {...field}
                          type="email"
                          placeholder="Email"
                          required
                          className="sm:w-1/2 w-full max-w-full sm:h-full h-[60px] p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                        />
                      )}
                    </Field>
                    <ErrorMessage name="email" component="div" className="text-red-600" />
                  </div>

                  <div className="w-full mb-[20px] h-[60px]">
                    <Field name="phone">
                      {({ field }) => (
                        <input
                          {...field}
                          type='phone'
                          placeholder="Phone"
                          required
                          className="w-full max-w-full h-full p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                        />
                      )}
                    </Field>
                    <ErrorMessage name="phone" component="div" className="text-red-600" />
                  </div>

                  <div className="w-full mb-[20px] h-[60px]">
                    <Field name="subject">
                      {({ field }) => (
                        <input
                          {...field}
                          placeholder="Subject"
                          required
                          className="w-full max-w-full h-full p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                        />
                      )}
                    </Field>
                    <ErrorMessage name="subject" component="div" className="text-red-600" />
                  </div>

                  <div className="w-full mb-[20px]">
                    <Field name="message">
                      {({ field }) => (
                        <textarea
                          {...field}
                          placeholder="Message"
                          rows={5}
                          required
                          className="w-full max-w-full h-full p-[15px_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                        />
                      )}
                    </Field>
                    <ErrorMessage name="message" component="div" className="text-red-600" />
                  </div>

                  <div className="w-full flex justify-center">
                    <button
                      type="submit"
                      disabled={!(isValid && dirty)}
                      className={`btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center overflow-hidden relative text-[#FFFFFF] uppercase py-3 md:py-5 rounded-[5px] mx-auto ${!(isValid && dirty) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      Submit
                      <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="ml-2 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                        <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                      </svg>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
