import React from "react";
import bendera from "../assets/bendera.svg";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";

function InputProfile() {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="navbar max-w-6xl py-5">
        <div className="flex-none" onClick={() => navigate('/profile')}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <a className="btn btn-ghost normal-case text-2xl">My Profile</a>
        </div>
      </div>
      <div>
        <div className="lg:px-20 px-10 py-5">
          <div className="py-3">
            <div className="card card-side bg-gradient-to-r from-emerald-500 to-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300 mt-4">
              <div className="card-body text-center text-white">
                <div className="flex justify-center">
                  <img
                    src=""
                    alt="gambar user"
                    className="w-20 lg:w-40 rounded-full"
                  />
                </div>
                <h2 className="text-xl font-extrabold mb-2">Username</h2>
                <p className="mt-1 text-md opacity-80">Email</p>
              </div>
            </div>
          </div>
          <div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <input
                    type="text"
                    placeholder="Input nama depan"
                    className="rounded-lg relative p-2"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <input
                    type="text"
                    placeholder="Input nama belakang"
                    className="rounded-lg relative p-2"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl px-7">
                <div className="flex items-center">
                  <img src={bendera} alt="" />
                </div>
                <div className="card-body text-center">
                  <input
                    type="text"
                    placeholder="Input nomer telepon"
                    className="rounded-lg relative p-2"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <select className="select w-full max-w-full">
                    <option>Pilih</option>
                    <option>Perempuan</option>
                    <option>Laki-laki</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="w-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-10 sm:px-20 md:px-32 lg:px-80 xl:px-64 py-3 mt-12 rounded-full bg-emerald-500 hover:bg-emerald-700 text-white"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputProfile;
