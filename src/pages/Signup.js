import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Signup = () => {
  const sinupSchema = Yup.object().shape({
    fname: Yup.string().required("Name is required"),
    lastname: Yup.string().optional(),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 5 characters at minimum")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .min(3, "Password must be 5 characters at minimum")
      .required("Password is required"),
  });
  return (
    <section className="container bg-gradient-to-r from-rose-600 via-fuchsia-600 to-indigo-700 h-[100%] flex justify-center ">
      <div className="mt-12 justify-center">
        <Formik
          initialValues={{
            fname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={sinupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // Simulating asynchronous operation, like an API call
            setTimeout(() => {
              toast.success("Your are logged in successfully!!");
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form className="flex flex-col shadow-2xl shadow-gray-600 rounded-md p-[4rem] bg-gray-300 h-[60uh] justify-center gap-2 w-[42vw]">
              <h1 className="text-5xl text-black text-center mb-10 font-bold">
                Registration
              </h1>
              <div className="flex gap-6 w-[33vw]">
                <div>
                  <label className="">FirstName</label>
                  <input
                    value={values.fname}
                    onChange={handleChange("fname")}
                    className="w-[15vw]  px-4 h-10 rounded-md"
                    placeholder="Enter FirstName"
                    style={{
                      borderColor: `${
                        errors.fname && touched.fname ? "#F53C72" : ""
                      }`,
                    }}
                  />
                  {touched.fname && errors.fname && (
                    <div style={{ color: "#F53C72" }}>{errors.fname}</div>
                  )}
                </div>
                <div className="">
                  <label className="">LastName (optional)</label>
                  <input
                    value={values.lastname}
                    onChange={handleChange("lastname")}
                    type="text"
                    className="w-[15vw] px-4 h-10 rounded-md"
                    placeholder="Enter LastName"
                    name="lastname"
                    style={{
                      borderColor: `${
                        errors.lastname && touched.lastname ? "#F53C72" : ""
                      }`,
                    }}
                  />
                  {touched.lastname && errors.lastname && (
                    <div style={{ color: "#F53C72" }}>{errors.lastname}</div>
                  )}
                </div>
              </div>
              <label className="">Email</label>
              <input
                value={values.email}
                onChange={handleChange("email")}
                type="email"
                placeholder="Example@gmail.com"
                className="w-[32vw] px-4 h-10 rounded-md"
                name="email"
                style={{
                  borderColor: `${
                    errors.email && touched.email ? "#F53C72" : ""
                  }`,
                }}
              />
              {touched.email && errors.email && (
                <div style={{ color: "#F53C72" }}>{errors.email}</div>
              )}
              <label className="">Password</label>
              <input
                value={values.password}
                onChange={handleChange("password")}
                type="password"
                className="w-[32vw] px-4 h-10 rounded-md"
                name="password"
                style={{
                  borderColor: `${
                    errors.password && touched.password ? "#F53C72" : ""
                  }`,
                }}
              />
              {touched.password && errors.password && (
                <div style={{ color: "#F53C72" }}>{errors.password}</div>
              )}
              <label className="">Confirm Password</label>
              <input
                value={values.confirmpassword}
                onChange={handleChange("confirmpassword")}
                type="password"
                className="w-[32vw] px-4 h-10 rounded-md"
                name="confirmpassword"
                style={{
                  borderColor: `${
                    errors.confirmpassword && touched.confirmpassword
                      ? "#F53C72"
                      : ""
                  }`,
                }}
              />
              {touched.confirmpassword && errors.confirmpassword && (
                <div style={{ color: "#F53C72" }}>{errors.confirmpassword}</div>
              )}
              <label className=" justify-center gap-1">
                <input type="checkbox" className="w-4 h-4" /> I agree to
                Buildalesson Terms and Privacy Policy
              </label>
              <button
                className="rounded-md hover:bg-blue-600 bg-blue-300 p-3"
                type="submit"
              >
                Create new account
              </button>
              <div className="flex items-center">
                <hr className="h-[2px] flex-grow bg-black" />
                <span className="mx-2 flex-shrink">Or</span>
                <hr className="h-[2px] flex-grow bg-black" />
              </div>
              <button
                className=" rounded-md bg-white hover:bg-gray-600 p-3"
                type="button"
              >
                <a href="">Sign Up with Google</a>
              </button>
              <label className="text-center">
                Already have an account?
                <Link className="text-blue-800" to="/">
                  Login
                </Link>
              </label>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Signup;
