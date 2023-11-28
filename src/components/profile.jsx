import React from "react";
import dokter from "../assets/dokter.svg";
import right from "../assets/right.svg";

function Profile() {
  return (
    <>
      <div className="lg:px-20 px-10 py-5">
        <div className="py-3">
          <div className="flex justify-center">
            <img src={dokter} alt="" className="w-20 lg:w-40 rounded-full" />
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <p className="font-bold">Username</p>
              <p>email</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center rounded-none">
            <div className="card-body">
              <h2 className="text-md font-bold">My Profile</h2>
            </div>
            <div>
              <img src={right} alt="" className="p-5" />
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center rounded-none">
            <div className="card-body">
              <h2 className="text-md font-bold">About</h2>
            </div>
            <div>
              <img src={right} alt="" className="p-5" />
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center rounded-none">
            <div className="card-body">
              <h2 className="text-md font-bold">Reservasi</h2>
            </div>
            <div>
              <img src={right} alt="" className="p-5" />
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center rounded-none">
            <div className="card-body">
              <h2 className="text-md font-bold">FAQ</h2>
            </div>
            <div>
              <img src={right} alt="" className="p-5" />
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl flex flex-row items-center rounded-none">
            <div className="card-body">
              <h2 className="text-md font-bold">LogOut</h2>
            </div>
            <div>
              <img src={right} alt="" className="p-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
