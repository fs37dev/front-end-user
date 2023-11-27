import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <header
      className="flex flex-row justify-between items-center lg:px-20 px-10 py-5 bg-black"
      style={{ backgroundColor: "#f4feff", color: "#000" }}
    >
      <div className="flex flex-row items-center gap-3">
        <img src={logo} alt="logo" className="h-10" />
        <h1
          className="font-bold text-2xl font-sans"
          style={{ color: "#009781" }}
        >
          Klinik Heula
        </h1>
      </div>
      <nav>
        <ul className="lg:flex flex-row gap-2 justify-center items-center menu menu-horizontal">
          {!isLoginPage && !isRegisterPage && (
            <>
              <li className="hidden lg:flex text-gray-400 font-bold">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive && "active-link"}
                >
                  Home
                </NavLink>
              </li>
              <li className="hidden lg:flex text-gray-400 font-bold">
                <NavLink
                  to="/service"
                  className={({ isActive }) => isActive && "active-link"}
                >
                  Services
                </NavLink>
              </li>
              <li className="hidden lg:flex text-gray-400 font-bold">
                <NavLink
                  to="/doctors"
                  className={({ isActive }) => isActive && "active-link"}
                >
                  Doctors
                </NavLink>
              </li>
              <li className="hidden lg:flex text-gray-400 font-bold">
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive && "active-link"}
                >
                  About Us
                </NavLink>
              </li>
            </>
          )}
          <li className="hidden lg:flex btn rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2x font-bold">
            <NavLink
              to={isLoginPage ? "/register" : "/login"}
              className={({ isActive }) => isActive && "active-link"}
            >
              {isLoginPage ? "Register" : "Login"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
