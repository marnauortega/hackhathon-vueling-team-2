import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { FormPage } from "../pages/FormPage";
// import { Rechart } from "../pages/Rechart"

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/viewer" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formPage" element={<FormPage />} />
        {/* <Route path="/chart" element={<Rechart />} /> */}
        <Route index element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
