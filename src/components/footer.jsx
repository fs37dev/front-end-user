import React from "react";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="lg:flex flex-row justify-between lg:px-40 px-10 py-8">
          <div>
            <h1 className="font-bold text-md lg:py-3 py-5 text-center">
              Follow Us
            </h1>
            <div className="flex flex-row gap-2 justify-center">
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
            <h1 className="font-bold text-md lg:py-3 py-5 text-center">
              Information
            </h1>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left pv-1">Home</p>
            </a>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left py-1">Services</p>
            </a>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left py-1">Docters</p>
            </a>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left py-1">About Us</p>
            </a>
          </div>
          <div>
            <h1 className="font-bold text-md lg:py-3 py-5 text-center">
              Contact Us
            </h1>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left py-1">
                Monday - Saturday
              </p>
            </a>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left py-1">
                +123 456 789
              </p>
            </a>
            <a href="#">
              <p className="lg:py-2 text-center lg:text-left py-1">
                klinikheula@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className="lg:px-40 px-10 py-10">
          <p>© 2023. KlinikHeula</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
