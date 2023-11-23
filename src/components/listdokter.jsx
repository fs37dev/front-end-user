import React from "react";
import dokter from "../assets/dokter.svg";
import { useNavigate } from "react-router-dom";

function ListDokter() {
  const navigate = useNavigate();
  return (
    <>
      <form
        action=""
        method="get"
        className="flex flex-row gap-6 py-8 overflow-y-auto"
      >
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="w-60">
            <img src={dokter} alt="dokter" className="w-40" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Jennifer Clark</h2>
            <p>Sr. Psychiatrists</p>
            <div className="card-actions justify-between items-center">
              <div className="rating">
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
              </div>
              <input type="hidden" name="id" value="" />
              <a href="/detaildocter.jsx">
                <button
                  type="submit"
                  id=""
                  className="btn bg-blue-500 text-white"
                  onClick={() => navigate("/detaildokter")}
                >
                  Reservasi
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="w-60">
            <img src={dokter} alt="dokter" className="w-40" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Jennifer Clark</h2>
            <p>Sr. Psychiatrists</p>
            <div className="card-actions justify-between items-center">
              <div className="rating">
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
              </div>
              <input type="hidden" name="id" value="" />
              <button
                type="submit"
                id=""
                className="btn bg-blue-500 text-white"
                onClick={() => navigate("/detaildokter")}
              >
                Reservasi
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="w-60">
            <img src={dokter} alt="dokter" className="w-40" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Jennifer Clark</h2>
            <p>Sr. Psychiatrists</p>
            <div className="card-actions justify-between items-center">
              <div className="rating">
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
                <input
                  type="radio"
                  name=""
                  className="mask mask-star-2 bg-orange-400"
                  disabled
                />
              </div>
              <input type="hidden" name="id" value="" />
              <button
                type="submit"
                id=""
                className="btn bg-blue-500 text-white"
                onClick={() => navigate("/detaildokter")}
              >
                Reservasi
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ListDokter;
