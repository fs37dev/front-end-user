import React from "react";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";

function ReviewSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar max-w-6xl py-5">
        <div className="flex-none" onClick={() => navigate("/payment")}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <a className="btn btn-ghost normal-case text-2xl">Payment Method</a>
        </div>
      </div>
      <div className="card bg-base-100 flex justify-content my-auto items-center">
        <div className="my-auto flex items-center gap-7 max-[832px]:flex-col">
          <div>
            <div className="card bg-base-100 flex justify-content my-auto items-center">
              <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen max-[832px]:flex max-[832px]:flex-row max-[832px]:items-center">
                <figure className="px-5 pt-5 max-[832px]:p-0">
                  <img src="" alt="" className="rounded-xl" width="200" />
                </figure>
                <div className="flex flex-col items-center max-[832px]:items-start max-[832px]:h-36">
                  <h2 className="card-title">nama</h2>
                  <p>spesialis</p>
                  <p>hospital</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 flex justify-content my-auto items-center">
            <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
              <div className="my-auto flex items-center gap-20">
                <p>Date & Hour.</p>
                <h5 className="card-title">
                  Desember isitanggal, 2023 | isijam{" "}
                </h5>
              </div>
              <div className="my-auto flex items-center gap-20">
                <p>Package</p>
                <h5 className="card-title">isipackage</h5>
              </div>
              <div className="my-auto flex items-center gap-20">
                <p>Duration</p>
                <h5 className="card-title">isidurasi</h5>
              </div>
            </div>
            <br />
            <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
              <div className="my-auto flex items-center gap-60">
                <p>Amount</p>
                <h5 className="card-title">$isijumlahuang</h5>
              </div>
              <div className="my-auto flex items-center gap-60 max-[832px]:justify-between">
                <p>Duration (30 mins)</p>
                <h5 className="card-title">1 x $isijumlahuang</h5>
              </div>
              <br />
              <hr />
              <div className="my-auto flex items-center gap-60">
                <p>Total</p>
                <h5 className="card-title">$jumlahuang</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body flex items-center justify-center">
          <button className="w-full mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-10 sm:px-20 md:px-32 lg:px-80 xl:px-64 py-3 mt-12 rounded-full bg-emerald-500 hover:bg-emerald-700 text-white" onClick={()=> navigate('/inputpin')}>
            Payment
          </button>
        </div>
      </div>
      <br />
    </>
  );
}

export default ReviewSummary;
