import React from "react";
import dokter from "/dokter.svg";
import artikel1 from "/artikel.svg";
import artikel2 from "/artikel2.svg";
import artikel3 from "/artikel3.svg";
import artikel4 from "/artikel4.svg";

function Artikel() {
  return (
    <div className="px-20 py-10">
      <div>
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: "#009781" }}
        >
          Artikel
        </h1>
      </div>
      <div className="flex flex-row gap-40 items-center">
        <div>
          <img src={dokter} alt="donter" className="" />
        </div>

        <div>
          <div className="text-sm py-3">
            Artikel ini merupakan sumber informasi penting, pada topik tertentu,
            memberikan penjelasan mendalam dan analisis yang didukung oleh bukti
            yang kuat. Membacanya untuk mendapatkan pemahaman yang lebih baik
            tentang subjek tersebut.
          </div>

          <div className="py-4">
            <div className="card w-full bg-base-100 shadow-2xl image-full">
              <figure>
                <img src={artikel1} alt="artikel" />
                <img src={artikel1} alt="artikel" />
                <img src={artikel1} alt="artikel" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Covid-19</h3>
                <p className="text-sm">
                  COVID-19 Was a Top Cause of Death in 2020 and 2021, Even For
                  Younger People
                </p>
                <p>Dec 22, 2022</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={artikel2} alt="Movie" className=""/>
              </figure>
              <div className="card-body">
                <p className="text-xs">General Health</p>
                <h4 className="card-title text-sm font-bold">
                  The Importance of Mental Health: Maintaining Balance in Your
                  Life
                </h4>
                <p className="text-xs">Sep 22, 2023</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={artikel3} alt="Movie" />
              </figure>
              <div className="card-body">
                <p className="text-xs">Psychology</p>
                <h4 className="card-title text-sm font-bold">
                  Positive Psychology: Enhancing Well-being and Happiness
                </h4>
                <p className="text-xs">Okt 22, 2023</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={artikel4} alt="Movie" />
              </figure>
              <div className="card-body">
                <p className="text-xs">Psychiatrists</p>
                <h4 className="card-title text-sm font-bold">
                  Getting to Know the Profession of Psychiatrists: Mental Health
                  Experts
                </h4>
                <p className="text-xs">June 22, 2023</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Artikel;
