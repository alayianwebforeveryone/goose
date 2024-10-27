'use client';
import React from "react";
import Banner from "./Banner";

import banner2 from "../../../Assets/images/Banner2.jpg";
import banner1 from "../../../Assets/images/Banner1.jpg";
import Image from "next/image";
import PopularServicesSlider from "./ServicesCarousel";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";

const Home = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(40, 'Name must be 40 characters or less'),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format').required('Email is required'),

    message: Yup.string()
      .required('message is required')
      .max(1000, 'Subject must be at most 1000 characters long'),

  });
  return (
    <div>
      <Banner />

      {/* Business portfolio section */}

      <div className="relative bg-bg-color lg:mt-0 mt-32">
        <div className="home-globe-bg" />
        <div className="max-w-[1140px] min-h-[500px] flex mx-auto relative items-center">
          <div className="w-full relative flex min-h-1">
            <div className="p-[10px] w-full relative content-start flex flex-wrap">
              <div className="text-center w-full">
                <h1 className="md:text-[60px] text-5xl text-[#000000] font-bold">
                  Business Portfolio
                </h1>
              </div>
              <div className="text-center mt-[40px]">
                <p className="sm:text-2xl tex-[22px] font-normal sm:text-black text-black">
                  Welcome To Goose ITTC, Your One-Stop Solution For All Your
                  Software And Training Needs. Based In California, We Are A
                  Team Of Experienced Professionals Who Provide Our Clients With
                  The Best Possible Services And Solutions In The Field Of
                  Technology Consulting, Software Implementation, Customized
                  Interactive Instructor-Led Training, And Software Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4F4] pt-[8rem] pb-[5rem]">
        <div className="flex mx-auto relative flex-wrap md:flex-row flex-col">
          <div className="mb-5 w-[100%]">
            <div className="pb-[50px] text-center">
              <span
                className="relative uppercase font-bold pl-[55px] inline-block mb-[14px] text-blue text-center
                  before:absolute before:w-[40px] before:h-[2px] before:bg-blue before:top-[6px] before:left-0
                  after:absolute after:w-[40px] after:h-[2px] after:bg-blue after:bottom-[6px] after:left-0 text-base"
              >
                WE OFFER SERVICES
              </span>
              <h2 className="sm:text-[45px] text-3xl md:font-bold font-semibold text-center text-black">
                Our Popular Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* slider of services */}
      <div className="bg-[#F4F4F4]">
        <PopularServicesSlider />
      </div>
      {/* Success is priority */}
      <div>
        <div className="bg-[#F4F4F4]">
          <div className="p-3 w-full flex items-start flex-wrap relative">
            <div className="relative pt-[70px] pb-[180px] overflow-hidden w-[100%] mx-auto">
              <div className="box-border w-full gap-x-[2rem] flex md:flex-row gap-y-10 flex-col md:max-w-[960px] xl:max-w-[95.5%] mx-auto h-[100%]">
                <div className="md:px-2 md:w-[50%] w-full flex flex-col justify-center md:items-start items-center">
                  <span className="text-xl text-blue font-bold block mb-2 ml-1">
                    Success Is Our Priority
                  </span>
                  <h1 className="md:text-[64px] sm:text-4xl text-[35px] md:leading-[76px] leading-[45px] md:text-start text-center mb-5 md:font-bold font-semibold text-black">
                    Consulting For Your Business
                  </h1>
                  <p className="max-w-[550px] text-base leading-[30px] capitalize ml-1 md:text-start text-center text-black mb-6">
                    Our Experienced Team Provides Solutions And Guidance To Help
                    You Achieve Your Business Goals And Drive Success.
                  </p>
                  <div className="xl:-ml-10 md:self-start self-center">
                    <div className=" justify-between items-center xl:ml-[45px] px-4 py-4 text-white font-bold text-xl  lg:flex  hidden bg-blue rounded-lg">
                      <button class=" ">Read more</button>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                        <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* image slider */}

                <div className="md:w-[55%] md:mr-5">
                  <div className="w-full flex gap-16 ">
                    <div className="md:w-[592px] rounded-lg  xl:w-[625.5px] w-full sm:h-auto h-[380px]">
                      <Image
                        src={banner1}
                        className="max-w-full sm:object-fill h-full object-cover"
                      />
                    </div>
                    <div className="md:w-[592px] rounded-lg  xl:w-[625.5px] w-full sm:h-auto h-[380px]">
                      <Image
                        src={banner2}
                        className="max-w-full sm:object-fill h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* above animation partcd */}
      <div className="bg-bg-color">
        <div className="flex relative mx-auto box-border md:h-[calc(100vh-90px)] h-full">
          <div className="home-touch-bg md:py-[110px] py-[20px]">
            <img
              src="data:image/png;base64,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"
              alt="shapeOne"
              className="max-w-full absolute right-[36%] h-[100%_!important] top-0 mix-blend-color-dodge z-[-1] translate-x-[-50%] animate-left-right"
            />

            {/* Get in touch */}
            <div className="box-border w-full gap-x-[2rem] justify-between flex max-w-[960px] xl:max-w-[91.5%] ml-auto mr-auto h-[100%] relative px-3">
              <div className="flex md:flex-row flex-col w-full justify-between items-center box-border">
                <div className="xl:max-w-[58.3%] md:max-w-[50%]">
                  <div className="w-full relative mb-10 md:mb-0">
                    <span
                      className="relative uppercase font-bold pl-[55px] inline-block mb-[14px] text-blue text-center
                  before:absolute before:w-[40px] before:h-[2px] before:bg-blue before:top-[6px] before:left-0
                  after:absolute after:w-[40px] after:h-[2px] after:bg-blue after:bottom-[6px] after:left-0 text-base"
                    >
                      GET IN TOUCH
                    </span>
                    <h1 className="mb-5 text-[#FFFFFF] xl:max-w-[545px] max-w-full w-full sm:font-bold font-semibold xl:text-[45px] md:text-4xl sm:text-3xl text-[31px] md:leading-[55px] leading-[35px]">
                      Offering Consultations Is A Great Way To Introduce Your
                      Business To Customers
                    </h1>
                    <p className="max-w-[530px] text-base leading-[30px] capitalize ml-1 text-[#CCCCCC]">
                      We’re Currently Offering Up To 25% Off All Online
                      Instructor-Led Courses. Don’t Miss Out!
                    </p>
                  </div>
                  <div className="lg:mt-[50px] md:mt-[55px] flex items-center xl:gap-x-[45px] gap-x-8 w-full">
                    <h4 className="text-[#FFFFFF] sm:text-2xl text-xl font-bold xl:max-w-[200px] max-w-[60%] leading-[34px]">
                      Client Satisfaction In The Globaly
                    </h4>
                    <div>
                      <img
                        className="h-auto max-w-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAdCAMAAADYWRF1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAIN+A70AQv8+fcGAwkI9QsFnWWWQAAAE2SURBVEjHrZTbkoQgDEQhCTcVsf//Z5dlmXkZwlC19ItUBU8udjTb5CjsYwUAfiML2MYSbKqNQdkxqi6zRxdAgnMPzBLEMrJ6wZcjBRJUUbhPO6VFwBkHUuZ6E/4k0g9pwrsBro+AUbAEQEI+rw7w7ggAeALL7d7gK5wEye5jMknD2QCQV70jPIwxcHxOt1Ud7Xj0t8ZqOCn2rcudnAhVwtriQmO1KkYi7Y0bUXOzTTIAPVl1jg+6+w4BJHPbRF+bdO6ydm5nKRMLRFevAMu7QWqyBOS+jP+HMfo6F8RFWFRh59tnCc8izOsxpH6kpV+Ob22qpb2CDDILShOYCa8+L/TTXIfMrBN7e06WvoGVacqn7bRngOxKn2kadgAiAQgrMPstJeNX8TArSvw1X+G63GuKZqN+ADslEDPZoOmFAAAAAElFTkSuQmCC"
                        alt="shapetwo"
                      />
                    </div>
                  </div>
                </div>
                {/* form  */}
                <div className="md:px-2 xl:w-[45%] w-full md:max-w-[50%] z-50 rounded-md lg:mt-10 -mb-14 md:mb-0">
                  <div className="box-border md:px-[45px] md:py-[40px] sm:px-[40px] px-[30px] py-[40px] bg-[#FFFFFF] lg:ml-[80px] flex flex-col gap-y-6 items-start rounded-md shadow-xl mt-12">
                    <h2 className="text-3xl font-bold text-black">
                      Free Consultation
                    </h2>
                    {/* formik form  */}
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { resetForm }) => {
                        console.log(values, 'form values');
                        resetForm();
                      }}
                    >
                      {({ handleSubmit, isValid, dirty }) => (
                        <Form onSubmit={handleSubmit}>

                          <div className="bg-[#F4F4F4] mb-[20px] h-[60px] md:w-[600px] rounded-md outline-none lg:gap-x-8 gap-x-5 gap-y-8">
                            <Field name="name">
                              {({ field }) => (
                                <input
                                  {...field}
                                  placeholder="Name"
                                  type="text"
                                  required
                                  className="w-full h-[60px] p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                                />
                              )}
                            </Field>
                            <ErrorMessage name="name" component="div" className="text-red-600" />
                          </div>

                          <div className="bg-[#F4F4F4] mb-[20px] h-[60px] md:w-[600px] w-full rounded-md outline-none lg:gap-x-8 gap-x-5 gap-y-8">
                            <Field name="email">
                              {({ field }) => (
                                <input
                                  {...field}
                                  type="email"
                                  placeholder="Email"
                                  required
                                  className="w-full h-[60px] p-[0_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
                                />
                              )}
                            </Field>
                            <ErrorMessage name="email" component="div" className="text-red-600" />
                          </div>

                          <div className="w-full mb-[20px] bg-[#F4F4F4] md:w-[600px]">
                            <Field name="message">
                              {({ field }) => (
                                <textarea
                                  {...field}
                                  placeholder="Message"
                                  rows={5}
                                  required
                                  className="w-full h-full p-[15px_15px] text-[#343434] bg-transparent border border-[#E9E9E8] outline-1 outline-blue placeholder:text-[#676767] placeholder:font-medium rounded-md"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
