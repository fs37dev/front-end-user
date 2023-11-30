import React from "react";
import reservasi from '../assets/reservasi.svg'
import review from "../assets/review.svg";
import faq from "../assets/faq.svg";
import faqdoc from "../assets/faq1.svg";

function HomeService() {
  return (
    <>
      <div className="lg:px-20 lg:py-10 py-10">
        <div>
          <h1 className="text-3xl font-bold text-center">
            Kategori <span style={{ color: "#009781" }}>Layanan Utama</span>
          </h1>
          <h1 className="text-3xl font-bold text-center">Kami</h1>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-6 lg:py-6 grid grid-cols-1 gap-6 place-items-center">
          <div
            className="card w-96 bg-base-100 shadow-xl my-6"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <figure>
              <img src={reservasi} alt="Service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Reservasi Dokter</h2>
              <p>
                Anda dapat melakukan reservasi dokter secara langsung, cepat,
                dan mudah, serta kualitas konsultasi dan pengobatan yang
                ditawarkan tidak perlu diragukan lagi.
              </p>
            </div>
          </div>
          <div
            className="card w-96 bg-base-100 shadow-xl my-6"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <figure>
              <img src={review} alt="Service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Review Dokter</h2>
              <p>
                Diskusikan permasalahan kesehatan yang sedang Anda hadapi, dan
                jangan ragu untuk menanyakan pengobatan yang tepat.
              </p>
            </div>
          </div>
          <div
            className="card w-96 bg-base-100 shadow-xl"
            style={{ backgroundColor: "#f4feff", color: "#000" }}
          >
            <figure>
              <img src={faqdoc} alt="service" />
              <img src={faq} alt="Service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">FAQ</h2>
              <p>
                Temukan jawaban atas pertanyaan umum Anda tentang layanan dan
                prosedur kami di sini. Jika pertanyaan Anda masih belum
                terjawab, jangan ragu untuk menghubungi kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeService;
