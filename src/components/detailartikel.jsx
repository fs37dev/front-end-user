import React from "react";

function DetailArtikel() {
  return (
    <div className="lg:px-20 px-10 lg:my-5 my-0">
      <div className="card w-ful bg-base-100 shadow-xl">
        <figure className="">
          <img src="" alt="gambar user" className="w-20 lg:w-40 rounded-full" />
        </figure>
        <div className="card-body">
          <p className="font-bold">Judul artikel</p>
          <p>isi artikel</p>
        </div>
      </div>
    </div>
  );
}

export default DetailArtikel;
