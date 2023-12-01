import React from "react";
import { useNavigate } from "react-router-dom";
import person from "../assets/person.png";
import right from "../assets/right.svg";
import left from "../assets/left.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetail } from "../redux/actions/user-action";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const menuItems = [
    // { title: "My Profile", emoji: "😊", path: "/Myprofile" },
    { title: "Reservasi", emoji: "📅", path: "/reservations" },
    { title: "Logout", emoji: "🚪", path: "/" },
  ];

  const handleItemClick = (item) => {
    if (item.title == "Reservasi") {
      navigate(item.path);
    } else if (item.title == "Logout") {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    dispatch(getUserDetail());
  }, []);

  return (
    <>
      <div className="navbar max-w-6xl py-5">
        <div className="flex-none" onClick={() => navigate("/")}>
          <a className="btn btn-ghost normal-case text-xl shadow-xl">
            <img src={left} alt="" />
          </a>
        </div>
        <div className="flex-1 justify-center">
          <a className="btn btn-ghost normal-case text-2xl">My Profile</a>
        </div>
      </div>
      {user && (
        <div className="lg:px-20 px-10 py-5">
          <div className="py-3 flex justify-center items-center"></div>
          <div className="card card-side bg-gradient-to-r from-emerald-500 to-blue-500 shadow-xl transform hover:scale-105 transition-transform duration-300 mt-4">
            <div className="card-body text-center text-white">
              <img src={user.image ? user.image : person} alt="" className="w-20 lg:w-40 mx-auto mb-4 rounded-full" />
              <h2 className="text-xl font-extrabold mb-2">{user.name}</h2>
              <p className="mt-1 text-md opacity-80">{user.email}</p>
            </div>
          </div>
          <div className="mt-4">
            {menuItems.map((item, index) => (
              <div key={index} className="relative" onClick={() => handleItemClick(item)}>
                <div className="card card-side bg-white shadow-xl flex flex-row items-center rounded-xl transition-transform transform hover:scale-105">
                  <div className="card-body">
                    <h2 className="text-md font-bold">
                      {item.title} {item.emoji}
                    </h2>
                  </div>
                  <div>
                    <img src={right} alt="" className="p-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
