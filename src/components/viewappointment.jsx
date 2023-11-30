import React from "react";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";

function ViewAppointment() {
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar max-w-6xl py-5">
        <div className="flex-none" onClick={() => navigate("/reviewsummary")}>
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
                  <img
                    src="${data.image}"
                    alt="Shoes"
                    className="rounded-xl"
                    width="200"
                  />
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
                <h5 className="card-title">October tanggal, 2023 | tanggal</h5>
              </div>
              <div className="my-auto flex items-center gap-20">
                <p>Package</p>
                <h5 className="card-title">Video Call</h5>
              </div>
              <div className="my-auto flex items-center gap-20">
                <p>Duration</p>
                <h5 className="card-title">30 minutes</h5>
              </div>
            </div>
            <br />
            <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
              <div className="my-auto flex items-center gap-60">
                <p>Amount</p>
                <h5 className="card-title">$jumlah uang</h5>
              </div>
              <div className="my-auto flex items-center gap-60 max-[832px]:justify-between">
                <p>Duration (30 mins)</p>
                <h5 className="card-title">1 x $jumlah uang</h5>
              </div>
              <br />
              <hr />
              <div className="my-auto flex items-center gap-60">
                <p>Total</p>
                <h5 className="card-title">$jumlah uang</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body flex items-center justify-center">
          <button
            id="close"
            className="btn bg-emerald-500 hover:bg-emerald-700 rounded-full text-white w-52"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ViewAppointment;
