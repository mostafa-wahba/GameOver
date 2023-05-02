import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Register() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let validate = Yup.object({
    name: Yup.string()
      .required("Name is requierd")
      .min(3, "minimum char are 3")
      .max(15, "maximum char are 15"),
    email: Yup.string().required("Email is requierd").email("Email invalid"),
    password: Yup.string()
      .required("password is requierd")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "Password Must Start with Capital Letter"
      ),
    rePassword: Yup.string()
      .required("rePassword is requierd")
      .oneOf([Yup.ref("password")], "rePassword Must Match The Password"),
    phone: Yup.string()
      .required("phone is requierd")
      .matches(/^01[0125][0-9]{8}$/, "Phone Invalid"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: validate,
    onSubmit: sendingInfo,
  });
  async function sendingInfo(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
      .catch((error) => {
        setError(error.response.data.errors.massage);
        setLoading(false);
      });
    if (data.massage == "success") {
      console.log(data.massage);
      setLoading(false);
    }
  }
  return (
    <>
      <div className="container px-5 login">
        <div className="row mt-5 bg-custom rounded-3">
          <div className="col-lg-6 bg-register-image"></div>
          <div className="col-lg-6 p-3 py-5 d-flex align-items-center justify-content-center flex-column">
            <h2 className="login-title">Create My Account!</h2>
            <form className="w-100" onSubmit={formik.handleSubmit}>
              {error ? <div className="alert alert-danger">{error}</div> : ""}
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                className="form-control my-2"
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="alert alert-danger">{formik.errors.name}</div>
              ) : (
                ""
              )}
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                className="form-control my-2"
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                className="form-control my-2"
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
              ) : (
                ""
              )}

              <label htmlFor="rePassword">rePassword :</label>
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                onChange={formik.handleChange}
                className="form-control my-2"
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="alert alert-danger">
                  {formik.errors.rePassword}
                </div>
              ) : (
                ""
              )}
              <label htmlFor="phone">phone :</label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                className="form-control my-2"
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="alert alert-danger">{formik.errors.phone}</div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="btn btn-lg mt-3 w-100 bg-dark text-white-50"
              >
                {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Create Account"}
              </button>
            </form>
            <hr />
            <div className="form-options">
            Already a member?{" "}
              <Link
                to="/Login"
                className="Create-account text-decoration-none"
              >
                Log In <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container px-5">
        <h2 className="mt-5">Register</h2>
        <form className="px-5 mt-5" onSubmit={formik.handleSubmit}>
          {error?<div className="alert alert-danger">{error}</div>:""}
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>:""}
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:""}
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:""}

          <label htmlFor="rePassword">rePassword :</label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
          />
          {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>:""}
          <label htmlFor="phone">phone :</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            className="form-control my-2"
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger">{formik.errors.phone}</div>:""}
          <button type="submit" className="btn btn-outline-success mt-3">{loading?<FontAwesomeIcon icon={faSpinner} spin />:"Register"}</button>
        </form>
      </div> */}
    </>
  );
}
