import { Route, Routes } from "react-router-dom";
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

function App() {
  const TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServiceUser />} />
        <Route path="/doctors" element={<BookDokter />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detaildokter" element={<DetailDokter />} />
        <Route path="/detailartikel/:id" element={<DetailArtikelPage />} />
        <Route path="/detaildokter/:id" element={<DetailDokter />} />
        <Route path="/selectpayment" element={<PilihPembayaran />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/Myprofile" element={<InputProfileUser />} />
      </Routes>
    </>
  );
}

export default App;
