import React from "react";
import { useNavigate } from "react-router-dom";

function InputRegister() {
  const navigate = useNavigate()
  return (
    <>
      <form action="">
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl my-6 text-black">
            <div className="card-body">
              <h1 className="font-bold text-center text-xl">
                Register Dengan Kami!
              </h1>
              <h2 className="font-bold text-center text-base">
                Informasi Anda aman bersama kami
              </h2>
              <div className="py-1">
                <p>Nama</p>
                <input
                  type="text"
                  placeholder="Input Nama Anda"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="py-1">
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Input Email Anda"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="py-1">
                <p>Password</p>
                <input
                  type="text"
                  placeholder="Input Password Anda"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="py-1">
                <p>Konfirmasi Password</p>
                <input
                  type="text"
                  placeholder="Input Password Anda Sekali lagi"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="py-1">
                <button
                  className="btn btn-success w-full rounded-full"
                  style={{ backgroundColor: "#009781", color: "#000" }}
                  onClick={() => navigate("/")}
                >
                  <p className="text-white">Sign Up</p>
                </button>
              </div>
              <p>
                Sudah punya akun?
                <a
                  className="font-bold"
                  style={{ color: "#009494" }}
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default InputRegister;
