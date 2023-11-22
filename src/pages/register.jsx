import React from "react";
import registerimg from "../assets/registerimg.png";
import InputRegister from "../components/inputregister";

function Register() {
  return (
    <>
      <div
        className='relative w-full h-screen bg-zinc-900/90'
      >
        <figure>
          <img className='absolute w-full h-full object-cover mix-bland-overlay' src={registerimg} alt="register" />
        </figure>
          <InputRegister />
        </div>
    </>
  );
}

export default Register;
