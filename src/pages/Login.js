import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Login = () => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 5 characters at minimum")
      .required("Password is required"),
  });

  return (
    <div className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-indigo-700 h-[100%]  flex justify-center">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
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
          <Form className="flex justify-center flex-col mt-10 bg-gray-300 rounded-md shadow-2xl shadow-gray-600 gap-2 p-8 w-[40vw]">
            <h1 className="text-5xl text-black text-center mb-10 font-bold">
              Welcome to Empires! Please login.
            </h1>
            {/* Name */}
            <label className="">Name</label>
            <input
              value={values.name}
              onChange={handleChange("name")}
              className="p-2 rounded-md border"
              placeholder="name"
              name="name"
              style={{
                borderColor: `${errors.name && touched.name ? "#F53C72" : ""}`,
              }}
            />
            {touched.name && errors.name && (
              <div style={{ color: "#F53C72" }}>{errors.name}</div>
            )}
            {/* Email */}
            <label className="">Email</label>
            <input
              value={values.email}
              onChange={handleChange("email")}
              className=" p-2 rounded-md border"
              style={{
                borderColor: `${
                  errors.email && touched.email ? "#F53C72" : ""
                }`,
              }}
            />
            {touched.email && errors.email && (
              <div style={{ color: "#F53C72" }}>{errors.email}</div>
            )}

            {/* Password */}
            <label className="">Password</label>
            <input
              value={values.password}
              onChange={handleChange("password")}
              className="p-2 rounded-md border"
              type="password"
              style={{
                borderColor: `${
                  errors.password && touched.password ? "#F53C72" : ""
                }`,
              }}
            />
            {touched.password && errors.password && (
              <div style={{ color: "#F53C72" }}>{errors.password}</div>
            )}

            <label className="text-red-600">Forgot password?</label>
            <button
              className=" hover:bg-blue-600 rounded-md bg-blue-300 p-2"
              type="submit"
            >
              Login
            </button>
            <div className="flex items-center">
              <hr className="h-[2px] flex-grow bg-black" />
              <span className="mx-2 flex-shrink">Or</span>
              <hr className="h-[2px] flex-grow bg-black" />
            </div>
            <button
              className=" rounded-md bg-white hover:bg-gray-600 p-2"
              type="button"
            >
              Login with Google
            </button>
            <label className="text-center">
              Don't have an account?
              <Link className="text-blue-800" to="/signup">
                Sign Up
              </Link>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
