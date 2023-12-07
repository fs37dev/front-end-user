import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import right from "../assets/right.svg";
import left from "../assets/left.png";
import { clearState, getReservationList } from "../redux/actions/reservasi-action";
import moment from "moment";
import Footer from "./footer";

function ReservationList() {
  const { data } = useSelector((state) => state.reservasi);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPaymentStatus = (status) => {
    if (status === "Approved") return <div className="badge badge-success">{status}</div>;
    if (status === "Pending") return <div className="badge badge-warning">{status}</div>;
    if (status === "Rejected") return <div className="badge badge-error">{status}</div>;
    else return <div className="badge badge-ghost">{status}</div>;
  };

  const handleButtonClick = (reservationId) => {
    navigate(`/reservations/${reservationId}`);
    dispatch(clearState());
  };

  useEffect(() => {
    dispatch(getReservationList());
  }, []);

  return (
    <>
      <div className="navbar max-w-6xl py-5">
        <div className="flex-none" onClick={() => navigate("/profile")}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <a className="btn btn-ghost normal-case text-2xl">Reservation List</a>
        </div>
      </div>

      {Array.isArray(data) && (
        <>
          <div className="flex flex-col gap-6 overflow-y-auto lg:px-20 px-5 py-10  ">
            {data.map((reservation, index) => (
              <div className="card card-compact bg-base-100 shadow-xl flex flex-row items-center px-4" key={index}>
                <div className="card-body flex flex-row justify-between" key={index}>
                  <div className="flex flex-row">
                    <div>
                      <figure className="w-60">
                        <img src={reservation.doctor.image} alt={reservation.doctor.image} className="w-40" />
                      </figure>
                    </div>
                    <div>
                      <h2 className="card-title text-info"> Reservation in {moment(reservation.date).format("LL")}</h2>
                      <h2 className="card-title">{reservation.doctor.name}</h2>
                      <p className="mb-2">{reservation.doctor.specialist.name}</p>
                      <div>{getPaymentStatus(reservation.status)}</div>
                    </div>
                  </div>

                  <div className="flex self-center">
                    <button type="submit" className="btn bg-blue-500 text-white" onClick={() => handleButtonClick(reservation.id)}>
                      Detail
                    </button>
                  </div>
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

export default ReservationList;
