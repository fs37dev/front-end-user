import React from "react";
import gambarhome from "../assets/home.svg";
import { useNavigate } from "react-router-dom";

function HomeGet() {
  const navigate = useNavigate();
  return (
    <section className="flex h-screen">
      <div
        className="lg:flex lg:flex-row lg:px-20 px-10 p-2 gap-10 items-center lg:py-10 text-center lg:text-left"
        style={{ backgroundColor: "#f4feff", color: "#000" }}
      >
        <div className="">
          <h1 className="text-7xl font-bold lg:py-4">Kami Siap Membantu </h1>
          <h1 className="text-7xl font-bold" style={{ color: "#009781" }}>
            Mengatasi Masalah Kesehatan
          </h1>
          <h1 className="text-7xl font-bold lg:py-4">Anda</h1>
          <h2 className="text-lg py-4">
            Di saat-saat seperti ini, kesehatan Anda sangatlah penting mengingat
            cuaca yang terjadi banyak dan cepat perubahannya, jadi kami siap
            membantu Anda konsultasi kesehatan.
          </h2>
          <div className="py-4">
            <button
              className="btn btn-wide rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2xl"
              onClick={() => navigate("/doctors")}
            >
              Get started
            </button>
          </div>
        </div>
        <div>
          <img src={gambarhome} alt="gambarhome" className="hidden lg:flex"/>
        </div>
      </div>
    </section>
  );
}

export default HomeGet;
