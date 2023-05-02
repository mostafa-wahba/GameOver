import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout({saveUserData, userData}) {
  let navigate = useNavigate()
  function logOut() {
    localStorage.removeItem("userToken")
    saveUserData(null)
    navigate("/login")
  }
  return (
    <>
      <Navbar logOut={logOut} userData={userData}/>
      <Outlet />
    </>
  );
}
