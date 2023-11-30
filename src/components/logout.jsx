import React from "react";
import logout from "../assets/logoutimg.svg";

function Logout() {
  return (
    <>
      {/* The button to open modal */}
      <a href="#my_modal_8" className="btn">
        Logout
      </a>
      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box">
          <div className="py-10 flex justify-center">
            <img src={logout} alt="Logout" className="icon" />{" "}
          </div>
          <h3 className="py-1 font-bold text-lg flex justify-center">
            Peringatan Logout!
          </h3>
          <p className="py-2 flex justify-center">
            Apakah Anda yakin ingin keluar?
          </p>
          <div className="modal-action flex flex-col items-center justify-center">
            <a
              href="#"
              className="w-full md:w-64 px-6 py-3 mb-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition duration-300 ease-in-out transform hover:scale-105 text-center shadow-md"
            >
              Logout
            </a>

            <a
              href="#"
              className="w-full md:w-64 px-6 py-3 mb-4 rounded-full bg-white hover:bg-gray-300 text-emerald-500 transition duration-300 ease-in-out transform hover:scale-105 text-center border-2 border-gray-300"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
