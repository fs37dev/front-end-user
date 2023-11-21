import React from "react";
import google from "/google.png";
import twitter from "/twitter.png";
import instagram from "/instagram.png";
import linkedin from "/linkedin.png";

function Footer() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex flex-row justify-between px-40 py-8">
          <div>
            <h1 className="font-bold text-md py-3">Follow Us</h1>
            <div className="flex flex-row gap-2">
              <button className="btn rounded-full">
                <img src={google} alt="" className="w-5" />
              </button>
              <button className="btn rounded-full">
                <img src={twitter} alt="" className="w-5" />
              </button>
              <button className="btn rounded-full">
                <img src={instagram} alt="" className="w-5" />
              </button>
              <button className="btn rounded-full">
                <img src={linkedin} alt="" className="w-5" />
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-md py-3">Information</h1>
            <a href="#">
              <p className="py-2">Home</p>
            </a>
            <a href="#">
              <p className="py-2">Services</p>
            </a>
            <a href="#">
              <p className="py-2">Docters</p>
            </a>
            <a href="#">
              <p className="py-2">About Us</p>
            </a>
          </div>
          <div>
            <h1 className="font-bold text-md py-3">Contact Us</h1>
            <a href="#"><p className="py-2">Monday - Saturday</p></a>
            <a href="#"><p className="py-2">+123 456 789</p></a>
            <a href="#"><p className="py-2">klinikheula@gmail.com</p></a>
          </div>
        </div>
        <div className="px-40 py-10">
          <p>© 2023. KlinikHeula</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
