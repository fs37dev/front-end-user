import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState, registerUser } from "../redux/actions/user-action";

function InputRegister() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [error, setError] = useState("");
  const { errorMessage, isAuthenticatedRegister } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!nama || !email || !password || !konfirmasiPassword) {
      setError("Input data anda!");
    } else if (password !== konfirmasiPassword) {
      setError("Password dan Konfirmasi Password tidak cocok!");
    } else {
      dispatch(registerUser(nama, email, password));
    }
  };

  const hideErrorAfterTimeout = () => {
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  useEffect(() => {
    if (isAuthenticatedRegister) navigate("/login");
    dispatch(clearState());
  }, [isAuthenticatedRegister]);

  useEffect(() => {
    if (errorMessage) setError(errorMessage);
    dispatch(clearState());
  }, [errorMessage]);

  if (error) hideErrorAfterTimeout();

  return (
    <div className="relative w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <form className="rounded-lg shadow-2xl lg:w-full max-w-[900px] w-100 mx-auto bg-white " onSubmit={handleSignUp}>
          <div className="card-body">
            <h1 className="font-bold text-center text-xl">Register Dengan Kami!</h1>
            <h2 className="font-bold text-center text-base">Informasi Anda aman bersama kami</h2>
            <div className="flex flex-col py-1">
              <label>Nama</label>
              <input
                placeholder="Input Nama"
                className="border rounded-lg input-bordered relative bg-gray-100 p-2"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Email</label>
              <input
                placeholder="Input Email"
                className="border rounded-lg input-bordered relative bg-gray-100 p-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Password</label>
              <input
                placeholder="Input Password"
                className="border rounded-lg input-bordered relative bg-gray-100 p-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Konfirmasi Password</label>
              <input
                placeholder="Konfirmasi Password"
                className="border rounded-lg input-bordered relative bg-gray-100 p-2"
                type="password"
                value={konfirmasiPassword}
                onChange={(e) => setKonfirmasiPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-50 py-3 mt-3 rounded-full bg-emerald-500 hover:bg-emerald-700 relative text-white">
              Sign Up
            </button>
            {error && <p className="text-center text-red-500 mt-2">{error}</p>}
            <p className="text-center mt-3">
              Sudah Punya Akun?{" "}
              <button type="button" onClick={() => navigate("/login")} className="text-emerald-500 font-bold">
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputRegister;
