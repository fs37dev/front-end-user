import React from "react";

function ViewAppointment() {
  return (
    <>
      <div className="card bg-base-100 flex justify-content my-auto items-center">
        <div className="my-auto flex items-center gap-7 max-[832px]:flex-col">
          <div>
            <div className="card bg-base-100 flex justify-content my-auto items-center">
              <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen max-[832px]:flex max-[832px]:flex-row max-[832px]:items-center">
                <figure className="px-5 pt-5 max-[832px]:p-0">
                  <img
                    src="${data.image}"
                    alt="Shoes"
                    className="rounded-xl"
                    width="200"
                  />
                </figure>
                <div className="flex flex-col items-center max-[832px]:items-start max-[832px]:h-36">
                  <h2 className="card-title">${data.name}</h2>
                  <p>${data.specialis}</p>
                  <p>${data.hospital}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 flex justify-content my-auto items-center">
            <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
              <div className="my-auto flex items-center gap-20">
                <p>Date & Hour.</p>
                <h5 className="card-title">
                  October ${data.date}, 2023 | ${data.date}
                </h5>
              </div>
              <div className="my-auto flex items-center gap-20">
                <p>Package</p>
                <h5 className="card-title">Video Call</h5>
              </div>
              <div className="my-auto flex items-center gap-20">
                <p>Duration</p>
                <h5 className="card-title">30 minutes</h5>
              </div>
            </div>
            <br />
            <div className="card-body shadow-xl rounded-xl w-100 max-[832px]:w-screen">
              <div className="my-auto flex items-center gap-60">
                <p>Amount</p>
                <h5 className="card-title">$${data.price}</h5>
              </div>
              <div className="my-auto flex items-center gap-60 max-[832px]:justify-between">
                <p>Duration (30 mins)</p>
                <h5 className="card-title">1 x $${data.price}</h5>
              </div>
              <br />
              <hr />
              <div className="my-auto flex items-center gap-60">
                <p>Total</p>
                <h5 className="card-title">$${data.price}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body flex items-center justify-center">
          <button id="close" className="btn btn-success rounded-3xl w-52">
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ViewAppointment;