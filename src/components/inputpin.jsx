import React from 'react'

function InputPIN() {
  return (
    <>
    <div className="card bg-base-100 p-4 sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-30">
        <div className="card-body shadow-xl">
          <p className="font-bold text-center text-2xl">Enter your PIN to confirm appointment</p>
          <br />
          <div className="flex items-center justify-center gap-5 sm:gap-7">
            <div className="kode">
              <input type="text" id="pin" className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base" maxlength="1" inputmode="numeric" />
            </div>
            <div className="kode">
              <input type="text" id="pin" className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base" maxlength="1" inputmode="numeric" />
            </div>
            <div className="kode">
              <input type="text" id="pin" className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base" maxlength="1" inputmode="numeric" />
            </div>
            <div className="kode">
              <input type="text" id="pin" className="input input-bordered w-10 sm:w-20 text-center text-sm sm:text-base" maxlength="1" inputmode="numeric" />
            </div>
          </div>
          <br />
          <div className="">
            <div className="card-body flex items-center justify-center">
              <div className="btn btn-success w-full" id="btn-id">Continue</div>
            </div>
          </div>
          <div id="pin1_error" className="text-red-500"></div>
        </div>
      </div>

    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <figure className="flex flex-col my-auto items-center">
          <img src="./img/img-succes.png" width="200" />
        </figure>
        <h3 className="font-bold text-center text-success">Congratulations!</h3>
        <p className="py-2 text-sm text-center">Appointment successfully booked. You will receive a notification and the doctor you selected will contact you.</p>
        <div className="modal-action flex flex-col justify-center item-center">
          <form method="dialog">
            <a className="btn btn-success w-full" id="btn-id" href="./view-appointment.html">View Appointment</a>
          </form>
        </div>
      </div>
    </dialog>
    </>
  )
}

export default InputPIN