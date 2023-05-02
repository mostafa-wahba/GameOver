import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo (3).png";
export default function Login({saveUserData}) {
const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let validate = Yup.object({
    email: Yup.string().required("Email is requierd").email("Email invalid"),
    password: Yup.string().required("password is requierd"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: sendingLoginInfo,
  });
  async function sendingLoginInfo(values) {
    setLoading(true);
    let { data } = await axios
      .post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
      .catch((error) => {
        setApiError(error.response.data.massage);
        setLoading(false);
      });
      console.log(data);
    if (data.message == "success") {
      localStorage.setItem("userToken",data.token)
      saveUserData();
      setLoading(false);
      navigate("/Home");
    }
  }
  return (
    <>
      <div className="container px-5 login">
        <div className="row mt-5 bg-custom rounded-3">
          <div className="col-lg-6 bg-register-image"></div>
          <div className="col-lg-6 p-3 py-5 d-flex align-items-center justify-content-center flex-column">
            <img className="login-logo" src={logo} alt="" />
            <h2 className="login-title">Log in to GameOver</h2>
            <form className="w-75" onSubmit={formik.handleSubmit}>
              {apiError ? (
                <div className="alert alert-danger">{apiError}</div>
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
              <button
              onClick={saveUserData}
                type="submit"
                className="btn btn-lg mt-3 w-100 bg-dark text-white-50"
              >
                {loading? <FontAwesomeIcon icon={faSpinner} spin /> : "Login"}
              </button>
            </form>
            <hr />
            <div className="form-options">
              Not a member yet?{" "}
              <Link
                to="/register"
                className="Create-account text-decoration-none"
              >
                Create Account <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
