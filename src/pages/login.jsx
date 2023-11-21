import React from "react";
import InputLogin from "../components/inputlogin";
import loginimg from "/loginimg.png"

function Login() {
  return (
    <>
      <div
        className="card w-full image-full"
        style={{ backgroundColor: "#00bfa6" }}
      >
        <figure>
          <img src={loginimg} alt="register" />
        </figure>
        <div className="card-body">
          <InputLogin />
        </div>
      </div>
    </>
  );
}

export default Login;
