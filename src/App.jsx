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
import SummaryReview from "./pages/summaryreview";
import Pin from "./pages/pin";
import Appointment from "./pages/appointment";
import Reservations from "./pages/reservations";
import DetailArtikelPage from "./pages/detailartikel";
import DokterDetail from "./pages/detaildokter";
import Navbar from "./components/navbar";
import FAQ from "./pages/faq";


function App() {
  const TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServiceUser />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detailartikel/:id" element={<DetailArtikelPage />} />
        <Route path="/faqs" element={<FAQ />} />

        <Route path="/doctors" element={<BookDokter />} />
        <Route path="/doctors/:id" element={<DokterDetail />} />

        <Route path="/profile" element={<UserProfile />} />

        <Route path="/reservations/:id/select-payment" element={<PilihPembayaran />} />
        <Route path="/reservations/:id/review-summary" element={<SummaryReview />} />

        <Route path="/reservations/:id/inputpin" element={<Pin />} />
        <Route path="/reservations/:id" element={<Appointment />} />
        <Route path="/reservations" element={<Reservations />} />
        
        {/* <Route path="/myprofile" element={<InputProfileUser />} /> */}
      </Routes>
    </>
  );
}

export default App;
