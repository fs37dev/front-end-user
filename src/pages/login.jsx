import React from "react";
import InputLogin from "../components/inputlogin";
import loginimg from "../assets/loginimg.png";

function Login() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <figure>
          <img className="absolute w-full h-full object-cover mix-bland-overlay" src={loginimg} alt="login" />
        </figure>
        <InputLogin />
      </div>
    </>
  );
}

export default Login;
