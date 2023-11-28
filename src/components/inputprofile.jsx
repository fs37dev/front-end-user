import React from "react";
import bendera from "../assets/bendera.svg";

function InputProfile() {
//   const [image, setImage] = useState("");

//   const handleImageChange = (e) => {
//     setImage(URL.createObjectURL(e.target.files[0]));
//   };
  return (
    <>
      <div>
        <div className="lg:px-20 px-10 py-5">
          <div className="py-3">
            <div className="flex justify-center">
              <img
                src=""
                alt="gambar user"
                className="w-20 lg:w-40 rounded-full"
              />
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <p className="font-bold">Username</p>
                <p>email</p>
              </div>
            </div>
          </div>
          <div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <input
                    type="text"
                    placeholder="Input nama depan"
                    className="rounded-lg relative p-2"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <input
                    type="text"
                    placeholder="Input nama belakang"
                    className="rounded-lg relative p-2"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl px-7">
                <div className="flex items-center">
                  <img src={bendera} alt="" />
                </div>
                <div className="card-body text-center">
                  <input
                    type="text"
                    placeholder="Input nomer telepon"
                    className="rounded-lg relative p-2"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body text-center">
                  <select className="select w-full max-w-full">
                    <option>Pilih</option>
                    <option>Perempuan</option>
                    <option>Laki-laki</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-body flex items-center justify-center">
              <button id="payment" className="btn btn-success rounded-3xl w-52">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputProfile;
