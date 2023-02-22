import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { FormPage } from "../pages/FormPage";
import { Rechart } from "../pages/Rechart";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/viewer"
          element={
            <ProtectedRoute>
            <Home />
            {/* // </ProtectedRoute> */}
          }
        />
        <Route
          path="/formPage"
          element={
            <ProtectedRoute>
              <FormPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chart"
          element={
            <ProtectedRoute>
              <Rechart />
            </ProtectedRoute>
          }
        />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
