import React from "react";
import ReservationList from "../components/reservationlist";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Reservations() {
  return (
    <>
      <Navbar />
      <ReservationList />
      <Footer />
    </>
  );
}

export default Reservations;
