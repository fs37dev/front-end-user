import React from "react";
import dokter from "/dokter.svg";

function ListDokter() {
  return (
    <>
      <div
        className="px-20 p-2"
        style={{ backgroundColor: "#f4feff", color: "#000" }}
      >
        <div>
          <div className="text-sm font-bold py-3">Dokter</div>
          <h1
            className="text-4xl font-bold"
            style={{
              backgroundImage:
                "linear-gradient(90.29deg, rgba(0, 158, 117, 1) 0%, rgba(0, 92, 123, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dokter Berkualitas
          </h1>
          <p className="text-sm py-3">
            Ditangani langsung oleh dokter umum dan profesional dan dokter
            spesialis berpengalaman.
          </p>
        </div>
        <form action="" method="get" className="flex flex-row gap-6 py-8">
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
                >
                  Reservasi
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ListDokter;
