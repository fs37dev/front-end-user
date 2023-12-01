import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pilih from "../assets/package.png";
import BRI from "../assets/BRI.png";
import mandiri from "../assets/mandiri.png";
import dana from "../assets/dana.png";
import left from "../assets/left.png";
import { useParams } from "react-router-dom";

function SelectPayment() {
  const navigate = useNavigate();
  const params = useParams();

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = () => {
    if (!selectedPayment) {
      setError("Please select a payment method");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } else {
      navigate(`/review-summary/${params.id}`);
    }
  };

  return (
    <>
      <div className="navbar max-w-6xl lg:px-20 px-15 py-10 flex flex-row">
        <div className="flex-none" onClick={() => navigate("/doctors")}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <button className="btn btn-ghost normal-case text-2xl">
            Payment
          </button>
        </div>
      </div>

      <div className="card card-side bg-base-100 top-10 bottom-2 max-w-6xl mx-auto">
        <figure className="ml-10">
          <img src={pilih} alt="package" />
        </figure>
        <div className="card-body">
          <p className="font-bold">Select Payment</p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-6 max-w-6xl mx-auto">
        <div className="card-body">
          <img src={BRI} alt="bri" className="w-29 absolute top-6 left-16" />
        </div>

        <div className="flex items-center mt-5 mb-10 mr-5">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success font-bold"
            onChange={(e) => {
              setSelectedPayment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-6 max-w-6xl mx-auto">
        <div className="card-body">
          <img
            src={mandiri}
            alt="mandiri"
            className="w-29 absolute top-6 left-16"
          />
        </div>

        <div className="flex items-center mt-5 mb-10 mr-5">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success font-bold"
            onChange={(e) => {
              setSelectedPayment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-xl my-6 max-w-6xl mx-auto">
        <div className="card-body">
          <img src={dana} alt="dana" className="w-29 absolute top-6 left-16" />
        </div>

        <div className="flex items-center mt-5 mb-10 mr-5">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-success font-bold"
            onChange={(e) => {
              setSelectedPayment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-body flex items-center justify-center">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            className="w-full md:w-64 px-6 py-3 mb-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition duration-300 ease-in-out transform hover:scale-105 text-center shadow-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default SelectPayment;
