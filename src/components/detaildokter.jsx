import React from 'react'
import dokter from "../assets/dokter.svg";
import kalender from "../assets/calendar.png"
import time from "../assets/time.png"

function DetailDokter() {
  return (
  <>
  <form>
    <div className="alert alert-warning fixed top-0 z-[1] hidden">
      <svg xmlns="http://www.w3.org/2000/svg" clasme="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <span>Warning: Please check your data</span>
    </div>

    <div className="max-w-6xl mx-auto md:flex">
      <div className="md:w-3/5 max-w-2/3 bg-base-100 shadow-md rounded-tl-2xl md:rounded-l-2xl">
        <div className="card card-side">
          <div className="w-48"><img className="rounded-2xl" src={dokter} alt="" /></div>
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
            <div className="card-actions justify-start items-center h-12">
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/> 
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/> 
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/> 
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/> 
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-slate-500">Biography</h2>
            <p className="text-slate-500">
               is the top most  specialist in  at . She is available for private
              consultation.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-2/5 max-w-1/3 flex flex-col items-center bg-base-100 shadow-md md:rounded-r-2xl">
        <div className="navbar flex">
          <div className="flex-none">
            <div className="flex-none py-3 px-2.5">
              <img src={kalender} alt="" />
            </div>
          </div>
          <div className="flex-1">
            <div className="normal-case text-xl py-2.5 px-4 font-medium">Date</div>
          </div>
          <div className="flex-none">
            <span className="badge border-none font-semibold">October</span>
          </div>
        </div>
        <div className="menu menu-horizontal bg-base-200 w-80 justify-around rounded-2xl">
          <input className="join-item btn" type="radio" name="date" value="21" aria-label="21" />
          <input className="join-item btn" type="radio" name="date" value="22" aria-label="22" />
          <input className="join-item btn" type="radio" name="date" value="23" aria-label="23" />
        </div>
        <div className="navbar">
          <div className="flex-none py-3 px-2.5">
            <img src={time} alt="" />
          </div>
          <div className="flex-1">
            <div className="normal-case text-xl py-2.5 px-4 font-medium">Time</div>
          </div>
        </div>
        <div className="menu menu-horizontal bg-base-200 w-80 justify-around grid grid-cols-3 rounded-2xl">
          <input className="join-item btn" type="radio" name="time" value="09.00 AM" aria-label="09.00 AM" />
          <input className="join-item btn" type="radio" name="time" value="11.00 AM" aria-label="11.00 AM" />
          <input className="join-item btn" type="radio" name="time" value="03.00 PM" aria-label="03.00 PM" />
          <input className="join-item btn" type="radio" name="time" value="05.00 PM" aria-label="05.00 PM" />
        </div>
        <div className="flex justify-center">
          <input type="hidden" name="id" value="" />
          <input type="hidden" name="hospital" value=""/>
          <button type="submit" className="btn m-7 btn-active btn-accent rounded-full text-base-100">Book Appointment</button>
        </div>
      </div>
    </div>
  </form>
  </>
  )
}

export default DetailDokter