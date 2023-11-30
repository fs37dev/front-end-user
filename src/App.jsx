import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import DetailDokter from "./components/detaildokter";
import BookDokter from "./pages/bookdokter";
import DetailArtikelPage from "./pages/detailartikel";
import ServiceUser from "./pages/services";
import PilihPembayaran from "./pages/selectpayment";
import UserProfile from "./pages/profile";
import InputProfileUser from "./pages/inputprofileuser";
import PrivateRoute from "./utils/PrivateRoute";
import ReviewSummary from "./components/reviewsummery";
import SummaryReview from "./pages/summaryreview";
import Pin from "./pages/pin";
import Appointment from "./pages/appointment";

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
        <Route path="/doctors" element={<BookDokter />} />
        <Route path="/detaildokter/:id" element={<DetailDokter />} />
        <Route path="/selectpayment/:id" element={<PilihPembayaran />} />
        <Route path="/review-summary/:id" element={<SummaryReview />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/myprofile" element={<InputProfileUser />} />
        <Route path="/inputpin/:id" element={<Pin />} />
        <Route path="/view-appointment/:id" element={<Appointment />} />
      </Routes>
    </>
  );
}

export default App;
