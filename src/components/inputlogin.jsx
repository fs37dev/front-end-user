import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/user-action";

function InputLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [error, setError] = useState("");

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth.isAuthenticated, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email dan password harus diisi!");
      hideErrorAfterTimeout();
    } else {
      dispatch(loginUser(email, password));
      hideErrorAfterTimeout();
    }
  };

  const hideErrorAfterTimeout = () => {
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  useEffect(() => {
    setError(auth.error);
  }, [auth]);

  return (
    <div className="relative w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <form className="rounded-lg shadow-2xl lg:w-full max-w-[900px] w-80 mx-auto bg-white p-8" onSubmit={handleSignIn}>
          <h2 className="text-4xl font-bold text-center py-4">Login.</h2>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              placeholder="Input Email Anda"
              className="border rounded-lg input-bordered relative bg-gray-100 p-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              placeholder="Input Password Anda"
              className="border rounded-lg input-bordered relative bg-gray-100 p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full py-3 mt-8 rounded-full bg-emerald-500 hover:bg-emerald-700 relative text-white">
            Sign In
          </button>
          {error && <p className="text-center text-red-500 mt-2">{error}</p>}
          {auth.error && <p className="text-center text-red-500 mt-2">{auth.error}</p>}
          <p className="text-center mt-8">
            Tidak Punya Tidak Punya Akun?{" "}
            <button type="button" onClick={() => navigate("/register")} className="text-emerald-500 font-bold bg-transparent border-none">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default InputLogin;
