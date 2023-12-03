import React, { useEffect } from "react";

import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getReservationDetail } from "../redux/actions/reservasi-action";
import Footer from "./footer";
import { getUserDetail } from "../redux/actions/user-action";

function ViewAppointment() {
  const { data } = useSelector((state) => state.reservasi);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getReservationDetail(params.id));
  }, []);

  return (
    <>
      <div className="navbar max-w-6xl lg:px-20 px-15 py-10 flex flex-row">
        <div className="flex-none" onClick={() => navigate(-1)}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <a className="btn btn-ghost normal-case text-2xl">Appointment</a>
        </div>
      </div>

      {data && (
        <>
          <div className="card bg-base-100 flex justify-content my-auto items-center">
            <div className="my-auto flex items-center gap-7 max-[832px]:flex-col">
              <div>
                <div className="card bg-base-100 flex justify-content my-auto items-center">
                  <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen max-[832px]:flex max-[832px]:flex-row max-[832px]:items-center">
                    <figure className="px-5 pt-5 max-[832px]:p-0">
                      <img src={data.doctor.image} alt="Shoes" className="rounded-xl" width="200" />
                    </figure>
                    <div className="flex flex-col items-a max-[832px]:items-start max-[832px]:h-36">
                      <h2 className="card-title">{data.doctor.name}</h2>
                      <p>{data.doctor.specialist.name}</p>
                      <p>{data.doctor.hospital}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 flex justify-content my-auto items-center">
                <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
                  <div className="my-auto flex items-center gap-20">
                    <p>Date & Hour.</p>
                    <h5 className="card-title">
                      {moment(data.date).format("LL")} | {data.time}{" "}
                    </h5>
                  </div>
                  <div className="my-auto flex items-center gap-20">
                    <p>Package</p>
                    <h5 className="card-title"> {data.package.name} </h5>
                  </div>
                  <div className="my-auto flex items-center gap-20">
                    <p>Duration</p>
                    <h5 className="card-title">{data.package.duration}</h5>
                  </div>
                </div>
                <br />
                <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
                  <div className="my-auto flex items-center gap-60">
                    <p>Amount</p>
                    <h5 className="card-title">$ {data.package.price}</h5>
                  </div>
                  <div className="my-auto flex items-center gap-60 max-[832px]:justify-between">
                    <p>Duration (30 mins)</p>
                    <h5 className="card-title">1 x $ {data.package.price}</h5>
                  </div>
                  <br />
                  <hr />
                  <div className="my-auto flex items-center gap-60">
                    <p>Total</p>
                    <h5 className="card-title">$ {1 * data.package.price}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body flex items-center justify-center">
              <button onClick={() => navigate("/reservations")} id="close" className="btn bg-emerald-500 hover:bg-emerald-700 rounded-full text-white w-52">
                Close
              </button>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default ViewAppointment;
