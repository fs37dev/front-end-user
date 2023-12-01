import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";

import BookDokter from "./pages/bookdokter";
import ServiceUser from "./pages/services";
import PilihPembayaran from "./pages/selectpayment";
import UserProfile from "./pages/profile";
import InputProfileUser from "./pages/inputprofileuser";
<<<<<<< HEAD
<<<<<<< HEAD
import PrivateRoute from "./utils/PrivateRoute";
import ReviewSummary from "./components/reviewsummery";
import SummaryReview from "./pages/summaryreview";
import Pin from "./pages/pin";
import Appointment from "./pages/appointment";
=======
>>>>>>> main
=======
import SummaryReview from "./pages/summaryreview";
import Pin from "./pages/pin";
import Appointment from "./pages/appointment";
import Reservations from "./pages/reservations";
import DetailArtikelPage from "./pages/detailartikel";
import DokterDetail from "./pages/detaildokter";
>>>>>>> aef60084a1183fb826c4bc38fbb5c42b1e0e7d16

function App() {
  const TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServiceUser />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/doctors" element={<BookDokter />} />
<<<<<<< HEAD
=======
        <Route path="/detaildokter" element={<DetailDokter />} />
        <Route path="/detailartikel" element={<DetailArtikelPage />} />
>>>>>>> main
        <Route path="/detaildokter/:id" element={<DetailDokter />} />
        <Route path="/selectpayment/:id" element={<PilihPembayaran />} />
        <Route path="/review-summary/:id" element={<SummaryReview />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/Myprofile" element={<InputProfileUser />} />
<<<<<<< HEAD
        <Route path="/inputpin" element={<Pin />} />
        <Route path="/viewappointment" element={<Appointment />} />
=======
>>>>>>> main
=======
        <Route path="/doctors/:id" element={<DokterDetail />} />
        <Route path="/detailartikel/:id" element={<DetailArtikelPage />} />
        <Route path="/reservations/:id/select-payment" element={<PilihPembayaran />} />
        <Route path="/reservations/:id/review-summary" element={<SummaryReview />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/myprofile" element={<InputProfileUser />} />
        <Route path="/reservations/:id/inputpin" element={<Pin />} />
        <Route path="/viewappointment/:id" element={<Appointment />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/:id" element={<Appointment />} />
>>>>>>> aef60084a1183fb826c4bc38fbb5c42b1e0e7d16
      </Routes>
    </>
  );
}

export default App;
