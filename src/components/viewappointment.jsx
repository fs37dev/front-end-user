import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReservationDetail } from "../redux/actions/review-summary";
import moment from "moment";
import left from "../assets/left.png";

function ViewAppointment() {
  const navigate = useNavigate();
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getReservationDetail(params.id));
  }, []);

  console.info(reservation);

  return (
    <>
      <div className="navbar max-w-6xl lg:px-20 px-15 py-10 flex flex-row">
        <div className="flex-none" onClick={() => navigate(-1)}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <button className="btn btn-ghost normal-case text-2xl">
            View Appointment
          </button>
        </div>
      </div>
      {reservation && (
        <>
          <div className="card bg-base-100 flex justify-content my-auto items-center">
            <div className="my-auto flex items-center gap-7 max-[832px]:flex-col">
              <div>
                <div className="card bg-base-100 flex justify-content my-auto items-center">
                  <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen max-[832px]:flex max-[832px]:flex-row max-[832px]:items-center">
                    <figure className="px-5 pt-5 max-[832px]:p-0">
                      <img
                        src={reservation.doctor.image}
                        alt=""
                        className="rounded-xl"
                        width="200"
                      />
                    </figure>
                    <div className="flex flex-col items-center max-[832px]:items-start max-[832px]:h-36">
                      <h2 className="card-title">{reservation.doctor.name}</h2>
                      <p>{reservation.doctor.specialist.name}</p>
                      <p>{reservation.doctor.hospital}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 flex justify-content my-auto items-center">
                <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
                  <div className="my-auto flex items-center gap-20">
                    <p>Date & Hour.</p>
                    <h5 className="card-title">
                      {" "}
                      {moment(reservation.date).format("LL")} |{" "}
                      {reservation.time}
                    </h5>
                  </div>
                  <div className="my-auto flex items-center gap-20">
                    <p>Package</p>
                    <h5 className="card-title">{reservation.package.name}</h5>
                  </div>
                  <div className="my-auto flex items-center gap-20">
                    <p>Duration</p>
                    <h5 className="card-title">
                      {reservation.package.duration}
                    </h5>
                  </div>
                </div>
                <br />
                <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
                  <div className="my-auto flex items-center gap-60">
                    <p>Amount</p>
                    <h5 className="card-title">
                      $ {reservation.package.price}
                    </h5>
                  </div>
                  <div className="my-auto flex items-center gap-60 max-[832px]:justify-between">
                    <p>Duration (30 mins)</p>
                    <h5 className="card-title">
                      1 x $ {reservation.package.price}
                    </h5>
                  </div>
                  <br />
                  <hr />
                  <div className="my-auto flex items-center gap-60">
                    <p>Total</p>
                    <h5 className="card-title">
                      $ {reservation.package.price * 1}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body flex items-center justify-center">
              <button
                id="close"
                className="btn bg-emerald-500 hover:bg-emerald-700 rounded-full text-white w-52"
                onClick={() => navigate("/")}
              >
                Close
              </button>
            </div>
          </div>
          <br />
        </>
      )}
    </>
  );
}

export default ViewAppointment;
