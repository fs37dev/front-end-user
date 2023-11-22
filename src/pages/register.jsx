import React from "react";
import registerimg from "../assets/registerimg.png";
import InputRegister from "../components/inputregister";

function Register() {
  return (
    <div className="card w-full image-full" style={{backgroundColor: "#00bfa6"}}>
      <figure>
        <img src={registerimg} alt="register" />
      </figure>
      <div className="card-body">
        <InputRegister />
      </div>
    </div>
  );
}

export default Register;
