import React from "react";

function HomeAbout() {
  return (
    <div
      className="px-20 py-40 flex"
      style={{ backgroundColor: "#f4feff", color: "#000" }}
    >
      <div className="px-60">
        <div className="card w-full bg-base-100 shadow-xl rounded-xl p-5">
          <div className="card-body">
            <div
              className="card-title justify-center"
              style={{ color: "#009781" }}
            >
              <h2 className="text-4xl py-3">
                Klinik
                <span className="font-bold">Heula</span>
              </h2>
            </div>
            <p className="text-xl text-center text-gray-400">
              Klinik Heaula adalah pusat kesehatan berkualitas tinggi dengan tim
              medis berpengalaman dan fasilitas modern. Kami berkomitmen untuk
              memberikan perawatan yang ramah dan efisien kepada pasien kami.
              Kami berkomitmen untuk memberikan perawatan yang ramah dan efisien
              kepada pasien kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
