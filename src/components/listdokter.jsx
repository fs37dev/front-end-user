import React, { useState, useEffect } from "react";
import dokter from "../assets/dokter.svg";
import { useNavigate } from "react-router-dom";

function ListDokter({ doctors, fetchDoctors }) {
  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDoctor) {
      console.log("Dokter yang dipilih:", selectedDoctor);
    } else {
      alert("Pilih seorang dokter terlebih dahulu!");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-6 py-8 overflow-y-auto"
      >
        {doctors.map((doctor, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure className="w-60">
              <img src={dokter} alt="dokter" className="w-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{doctor.name}</h2>
              <p>{doctor.speciality}</p>
              <div className="card-actions justify-between items-center">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`doctor_${index}`}
                      className="mask mask-star-2 bg-orange-400"
                      disabled
                    />
                  ))}
                </div>
                <input type="hidden" name={`id_${index}`} value={doctor.id} />
                <button
                  type="button"
                  className="btn bg-blue-500 text-white"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  Reservasi
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="card">
          <div className="card-body flex items-center justify-center">
            <button
              type="submit"
              className="btn btn-success w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              onClick={() => navigate("/detaildokter")}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ListDokter;
