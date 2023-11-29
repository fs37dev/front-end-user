import React from "react";
import kalender from "../assets/calendar.png";
import time from "../assets/time.png";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import left from "../assets/left.png";
("../assets/timerss.png");
import timerss from "../assets/timerss.png";
import Time from "../assets/Time.svg";
import media from "../assets/package.png";
import messages from "../assets/messages.svg";
import video from "../assets/Video.svg";

function DetailDokter() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const doctor = location.state.doctor;

  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);

  React.useEffect(() => {
    console.log("Selected package:", selectedPackage);
  }, [selectedPackage]);

  return (
    <>
      <div
        className="navbar max-w-6xl py-5"
        onClick={() => navigate("/doctors")}
      >
        <div className="flex-none">
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <button className="btn btn-ghost normal-case text-2xl">
            Reservasi
          </button>
        </div>
      </div>
      <form>
        <div className="alert alert-warning fixed top-0 z-[1] hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            clasme="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Please check your data</span>
        </div>

        <div className="max-w-6xl mx-auto md:flex">
          <div className="md:w-3/5 max-w-2/3 bg-base-100 shadow-md rounded-tl-2xl md:rounded-l-2xl">
            <div className="card card-side">
              <div className="w-48">
                <img className="rounded-2xl w-40" src={doctor.image} alt="" />
              </div>
              <div className="card-body">
                <h2 className="card-title">{doctor.name}</h2>
                <p></p>
                <div className="card-actions justify-start items-center h-12">
                  <div className="rating">
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <input
                          type="radio"
                          name={`rating-${ratingValue}`}
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
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-slate-500">Biography</h2>
                <p className="text-slate-500">
                  {doctor.name}
                  is the top most isispecialist specialist in {
                    doctor.hospital
                  }{" "}
                  at {doctor.city}. She is available for private consultation.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 max-w-1/3 flex flex-col items-center bg-base-100 shadow-md md:rounded-r-2xl py-5">
            <div className="navbar flex">
              <div className="flex-none">
                <div className="flex-none py-3 px-2.5">
                  <img src={kalender} alt="" />
                </div>
              </div>
              <div className="flex-1">
                <div className="normal-case text-xl py-2.5 px-4 font-medium">
                  Date
                </div>
              </div>
              <div className="flex-none">
                <span className="badge border-none font-semibold">October</span>
              </div>
            </div>
            <div className="menu menu-horizontal bg-base-200 w-80 justify-around rounded-2xl">
              <input
                className="join-item btn"
                type="radio"
                name="date"
                value="21"
                aria-label="21"
                onChange={(e) => {
                  console.log("Date selected:", e.target.value);
                  setSelectedDate(e.target.value);
                }}
              />
              <input
                className="join-item btn"
                type="radio"
                name="date"
                value="22"
                aria-label="22"
                onChange={(e) => {
                  console.log("Date selected:", e.target.value);
                  setSelectedDate(e.target.value);
                }}
              />
              <input
                className="join-item btn"
                type="radio"
                name="date"
                value="23"
                aria-label="23"
                onChange={(e) => {
                  console.log("Date selected:", e.target.value);
                  setSelectedDate(e.target.value);
                }}
              />
            </div>
            <div className="navbar">
              <div className="flex-none py-3 px-2.5">
                <img src={time} alt="" />
              </div>
              <div className="flex-1">
                <div className="normal-case text-xl py-2.5 px-4 font-medium">
                  Time
                </div>
              </div>
            </div>
            <div className="menu menu-horizontal bg-base-200 w-80 justify-around grid grid-cols-3 rounded-2xl">
              <input
                className="join-item btn"
                type="radio"
                name="time"
                value="09.00 AM"
                aria-label="09.00 AM"
                onChange={(e) => {
                  console.log("Time selected:", e.target.value);
                  setSelectedTime(e.target.value);
                }}
              />
              <input
                className="join-item btn"
                type="radio"
                name="time"
                value="11.00 AM"
                aria-label="11.00 AM"
                onChange={(e) => {
                  console.log("Time selected:", e.target.value);
                  setSelectedTime(e.target.value);
                }}
              />
              <input
                className="join-item btn"
                type="radio"
                name="time"
                value="03.00 PM"
                aria-label="03.00 PM"
                onChange={(e) => {
                  console.log("Time selected:", e.target.value);
                  setSelectedTime(e.target.value);
                }}
              />
              <input
                className="join-item btn"
                type="radio"
                name="time"
                value="05.00 PM"
                aria-label="05.00 PM"
                onChange={(e) => {
                  console.log("Time selected:", e.target.value);
                  setSelectedTime(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 top-6 max-w-6xl mx-auto">
          <figure className="ml-10">
            <img src={timerss} alt="timer" />
          </figure>
          <div className="card-body">
            <p className="font-bold">Select Duration</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl top-1 bottom-2 max-w-6xl mx-auto w-full">
          <figure className="ml-12">
            <img src={Time} alt="timer" />
          </figure>
          <div className="card-body">
            <p id="duration" className="font-semibold">
              30 Minutes
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 top-10 bottom-2 max-w-6xl mx-auto">
          <figure className="ml-10">
            <img src={media} alt="package" />
          </figure>
          <div className="card-body">
            <p className="font-bold">Select Package</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl my-8 max-w-6xl mx-auto w-full">
          <img
            src={messages}
            alt="messages"
            className="w-20 absolute top-6 left-5"
          />

          <div className="card-body">
            <h2 className="text-2xl font-bold ml-20">Messaging</h2>
            <p className="text-sm ml-20 font-semibold">
              Chat messages with doctor
            </p>
          </div>

          <div className="flex items-center mb-5 mr-5">
            <input
              type="radio"
              name="package"
              value="Messaging"
              className="radio radio-success"
              onChange={(e) => {
                console.log("package selected:", e.target.value);
                setSelectedPackage(e.target.value);
              }}
            />
            <p className="ml-2 mt-20 text-lg font-bold">$40</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl my-8 max-w-6xl mx-auto w-full">
          <img
            src={video}
            alt="video-call"
            className="w-20 absolute top-6 left-5"
          />

          <div className="card-body">
            <h2 className="text-2xl font-bold ml-20">Video Call</h2>
            <p className="text-sm ml-20 font-semibold">
              Video call with doctor
            </p>
          </div>

          <div className="flex items-center mb-5 mr-5">
            <input
              type="radio"
              name="package"
              value="Video Call"
              className="radio radio-success font-bold"
              onChange={(e) => {
                console.log("package selected:", e.target.value);
                setSelectedPackage(e.target.value);
              }}
            />
            <p className="ml-2 mt-20 text-lg font-bold">$40</p>
          </div>
        </div>

        <div className="flex justify-center">
          <input type="hidden" name="id" value={doctor.id} />
          <input type="hidden" name="hospital" value={doctor.hospital} />
          <button
            type="submit"
            className="btn m-7 btn-active btn-accent rounded-full text-base-100"
            onClick={(e) => {
              e.preventDefault();
              console.log("Selected date:", selectedDate);
              console.log("Selected time:", selectedTime);
              console.log("Selected package:", selectedPackage);
              if (!selectedDate || !selectedTime || !selectedPackage) {
                alert("Please select a date, time, and package first");
              } else {
                navigate("/selectpackage");
              }
            }}
          >
            Book Appointment
          </button>
        </div>
      </form>
    </>
  );
}

export default DetailDokter;
