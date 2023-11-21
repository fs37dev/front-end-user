import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.png";

function Navbar() {
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
        <ul className="lg:flex flex-row gap-8 justify-center items-center menu menu-horizontal">
          <li className="lg:hidden">
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <NavLink to="/" className="text-gray-400 font-bold">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service" className="text-gray-400 font-bold">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/doctors" className="text-gray-400 font-bold">
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-gray-400 font-bold">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="text-gray-400 font-bold">
                    <button className="btn rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2xl">
                      Login
                    </button>
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>

          <li className="hidden lg:flex">
            <NavLink to="/" className="text-gray-400 font-bold">
              Home
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink to="/service" className="text-gray-400 font-bold">
              Services
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink to="/doctors" className="text-gray-400 font-bold">
              Doctors
            </NavLink>
          </li>
          <li className="hidden lg:flex">
            <NavLink to="/about" className="text-gray-400 font-bold">
              About Us
            </NavLink>
          </li>

          <li className="hidden lg:flex">
            <NavLink to="/login" className="text-gray-400 font-bold">
              <button className="btn rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2xl">
                Login
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
