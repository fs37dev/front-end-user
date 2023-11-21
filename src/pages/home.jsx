import React from "react";

import HomeGet from "../components/homeget";
import HomeService from "../components/homeservice";
import Artikel from "../components/homeartikel";
import ListDokter from "../components/listdokter";
import HomeAbout from "../components/homeabout";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <HomeGet />
      <HomeService />
      <Artikel />
      <div
        className="lg:px-20 px-10 p-2"
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
        <ListDokter />
      </div>
      <HomeAbout />
      <Footer />
    </>
  );
}

export default Home;
