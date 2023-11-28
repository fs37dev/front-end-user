import React, { useState, useEffect } from "react";
import dokter from "../assets/dokter.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../redux/actions/doctor-action";

function ListDokter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDoctor) {
      console.log("Dokter yang dipilih:", selectedDoctor);
    } else {
      alert("Pilih seorang dokter terlebih dahulu!");
    }
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const data = useSelector((state) => state.doctors);
  const doctors = data.doctorsList;

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row gap-6 py-8 overflow-y-auto">
        {doctors.map((doctor, index) => (
          <div className="card card-compact bg-base-100 shadow-xl" key={index}>
            <figure className="w-60">
              <img src={doctor.image} alt="dokter" className="w-40" />
            </figure>
            <div className="card-body" key={index}>
              <h2 className="card-title">{doctor.name}</h2>
              <p>{doctor.specialis}</p>
              <div className="card-actions justify-between items-center">
                <div className="rating">
                  <input type="radio" name={`rating-${index + 1}`} className="mask mask-star-2 bg-orange-400" disabled checked />
                  <input type="radio" name={`rating-${index + 1}`} className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name={`rating-${index + 1}`} className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name={`rating-${index + 1}`} className="mask mask-star-2 bg-orange-400" disabled />
                  <input type="radio" name={`rating-${index + 1}`} className="mask mask-star-2 bg-orange-400" disabled />
                </div>
                <input type="hidden" name={`id_${index}`} value={doctor.id} />
                <button type="button" className="btn bg-blue-500 text-white" onClick={() => setSelectedDoctor(doctor)}>
                  Reservasi
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="card">
          <div className="card-body flex items-center justify-center">
            <button type="submit" className="btn btn-success w-full md:w-1/2 lg:w-1/3 xl:w-1/4" onClick={() => navigate("/detaildokter")}>
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ListDokter;
