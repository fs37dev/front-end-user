import React from 'react'

function SelectDokter() {
  return (
    <>
      <form>
        <div className="card card-side bg-base-100 top-6 max-w-6xl mx-auto">
          <figure className="ml-10">
            <img src="img/timerss.png" alt="timer" />
          </figure>
          <div className="card-body">
            <p className="font-bold">Select Duration</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl top-1 bottom-2 max-w-6xl mx-auto w-full">
          <figure className="ml-12">
            <img src="" alt="timer" />
          </figure>
          <div className="card-body">
            <p id="duration" className="font-semibold">
              30 Minutes
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 top-10 bottom-2 max-w-6xl mx-auto">
          <figure className="ml-10">
            <img src="img/package.png" alt="package" />
          </figure>
          <div className="card-body">
            <p className="font-bold">Select Package</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl my-8 max-w-6xl mx-auto w-full">
          <img
            src="img/Messages.svg"
            alt="messages"
            className="w-20 absolute top-6 left-5"
            style="height: auto"
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
            />
            <p className="ml-2 mt-20 text-lg font-bold" style="color: #009781">
              $40
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl my-8 max-w-6xl mx-auto w-full">
          <img
            src="img/Video.svg"
            alt="video-call"
            className="w-20 absolute top-6 left-5"
            style="height: auto"
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
            />
            <p className="ml-2 mt-20 text-lg font-bold" style="color: #009781">
              $40
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body flex items-center justify-center">
            <input id="price" type="hidden" name="price" value="40" />
            <button
              className="btn btn-success w-full rounded-full"
              style={{ backgroundColor: "#009781", color: "#000" }}
            >
              <p className="text-white">Next</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SelectDokter