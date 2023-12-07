import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorList } from "../redux/actions/doctor-action.js";
import Footer from "./footer.jsx";

function ListDoctor() {
  const { data } = useSelector((state) => state.doctors);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (doctorId) => {
    navigate(`/doctors/${doctorId}`);
  };

  useEffect(() => {
    dispatch(getDoctorList());
  }, []);

  return (
    <>
      {Array.isArray(data) && (
        <>
          <div className="flex flex-col gap-6 overflow-y-auto lg:px-20 px-5 py-10  ">
            {data.map((doctor, index) => (
              <div
                className="card card-compact bg-base-100 shadow-xl flex flex-row items-center px-4"
                key={doctor.id}
              >
                <div className="card-body flex flex-row" key={doctor.id}>
                  <div>
                    <figure className="w-60">
                      <img
                        src={doctor.image}
                        alt={doctor.image}
                        className="w-40 h-40 object-cover rounded-full shadow-md"
                      />
                    </figure>
                  </div>
                  <div>
                    <h2 className="card-title">{doctor.name}</h2>
                    <p>
                      {doctor.specialist
                        ? doctor.specialist.name
                        : "No specialist"}
                    </p>
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
                              key={i}
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
                    type="submit"
                    className="btn bg-blue-500 text-white"
                    onClick={() => handleButtonClick(doctor.id)}
                  >
                    Reservasi
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default ListDoctor;
