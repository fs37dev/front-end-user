import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import HomeService from "./components/homeservice";
import Login from "./pages/login";
import Register from "./pages/register";
import DetailDokter from "./components/detaildokter";
import BookDokter from "./pages/bookdokter";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<HomeService />} />
        <Route path="/doctors" element={<BookDokter />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detaildokter" element={<DetailDokter />} />
      </Routes>
    </>
  );
}

export default App;
