import React from "react";
import { useNavigate } from "react-router-dom";

function InputLogin() {
  const navigate = useNavigate();
  return (
    <>
      <form action="">
        <div className="flex justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl my-6 text-black">
            <div className="card-body">
              <h2 className="font-bold text-center text-base">
                Silakan Masuk ke akun Anda untuk melanjutkan:
              </h2>
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
                <button
                  className="btn btn-success w-full rounded-full"
                  style={{ backgroundColor: "#009781", color: "#000" }}
                  onClick={() => navigate("/")}
                >
                  <p className="text-white">Sign In</p>
                </button>
              </div>
              <p>
                Tidak punya akun?
                <a
                  className="font-bold"
                  style={{ color: "#009494" }}
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default InputLogin;
