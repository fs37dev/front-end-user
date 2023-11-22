import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import HomeService from "./components/homeservice";
import BookDoctor from "./pages/bookdoctor";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<HomeService />} />
        <Route path="/doctors" element={<BookDoctor />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
