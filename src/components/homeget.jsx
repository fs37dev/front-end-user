import React from "react";
import gambarhome from "/home.svg";

function HomeGet() {
  return (
    <section>
      <div
        className="flex flex-row px-20 p-2 gap-10 items-center py-20"
        style={{ backgroundColor: "#f4feff", color: "#000" }}
      >
        <div className="">
          <h1 className="text-5xl font-bold py-4">Kami Siap Membantu </h1>
          <h1 className="text-5xl font-bold" style={{ color: "#009781" }}>
            Mengatasi Masalah Kesehatan
          </h1>
          <h1 className="text-5xl font-bold py-4">Anda</h1>
          <h2>
            Di saat-saat seperti ini, kesehatan Anda sangatlah penting mengingat
            cuaca yang terjadi banyak dan cepat perubahannya, jadi kami siap
            membantu Anda konsultasi kesehatan.
          </h2>
          <div className="py-4">
            <button className="btn btn-wide rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-2xl">
              Get started
            </button>
          </div>
        </div>
        <div>
          <img src={gambarhome} alt="gambarhome" />
        </div>
      </div>
    </section>
  );
}

export default HomeGet;
