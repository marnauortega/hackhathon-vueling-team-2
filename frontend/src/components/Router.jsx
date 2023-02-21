import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "../pages/Home"
import Login from "../pages/Login"
import { FormPage } from "../pages/FormPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/formPage" element={<FormPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
