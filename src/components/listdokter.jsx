import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorDetail, fetchDoctors } from "../redux/actions/doctor-action";

function ListDokter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/doctors/${selectedDoctor.id}`);
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const data = useSelector((state) => state.doctors);
  const doctors = data.doctorsList && data.doctorsList.doctors ? data.doctorsList.doctors : [];

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row gap-6 py-8 overflow-y-auto">
        {doctors.map((doctor, index) => (
          <div className="card card-compact bg-base-100 shadow-xl" key={doctor.id}>
            <figure className="w-60">
              <img src={doctor.image} alt={doctor.image} className="w-40" />
            </figure>
            <div className="card-body" key={index}>
              <h2 className="card-title">{doctor.name}</h2>
              <p>{doctor.specialist ? doctor.specialist.name : "No specialist"}</p>
              <div className="card-actions justify-between items-center">
                <div className="rating">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <input
                        type="radio"
                        name={`rating-${index + 1}`}
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                        checked={ratingValue === doctor.rating}
                      />
                    );
                  })}
                </div>
                <input type="hidden" name={`id_${index}`} value={doctor.id} />
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white"
                  onClick={() => {
                    setSelectedDoctor(doctor);
                  }}>
                  Reservasi
                </button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}

export default ListDokter;
