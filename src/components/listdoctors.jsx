import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../redux/actions/doctor-action";

function ListDoctor() {
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
  const doctors =
    data.doctorsList && data.doctorsList.doctors
      ? data.doctorsList.doctors
      : [];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 py-8 overflow-y-auto lg:px-20 px-5 py-10  "
      >
        {doctors.map((doctor, index) => (
          <div
            className="card card-compact bg-base-100 shadow-xl flex flex-row items-center px-4"
            key={index}
          >
            <div className="card-body flex flex-row" key={index}>
              <div>
                <figure className="w-60">
                  <img src={doctor.image} alt={doctor.image} className="w-40" />
                </figure>
              </div>
              <div>
                <h2 className="card-title">{doctor.name}</h2>
                <p>{doctor.specialist.name}</p>
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
                </div>
              </div>
            </div>
            <div>
              <input type="hidden" name={`id_${index}`} value={doctor.id} />
              <button
                type="button"
                className="btn bg-blue-500 text-white"
                onClick={() => {
                  setSelectedDoctor(doctor);
                  navigate(`/detaildokter/${doctor.id}`, {
                    state: { doctor },
                  });
                }}
              >
                Reservasi
              </button>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}

export default ListDoctor;
