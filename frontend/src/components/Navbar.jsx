import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.css";

import logo from "../assets/img/logo-team.svg";
import logoDark from "../assets/img/logo-team-dark.svg";

function Navbar({ children }) {
  // Función para navegar a la página anterior
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const location = useLocation();

  return (
    <header className={`${styles.nav} ${location.pathname === "/login" ? "bg-[#181817]" : "bg-[#ffcc00]"} `}>
      <Link to="/viewer">
        <h3 className={`${styles.link} ${location.pathname === "/login" ? `${styles.light}` : `${styles.dark}`} `}>
          Viewer
        </h3>
      </Link>
      <Link to="/">
        {location.pathname === "/login" ? <img src={logo} alt="logo" /> : <img src={logoDark} alt="logo" />}
      </Link>
      <Link to="/formPage">
        <h3 className={`${styles.link} ${location.pathname === "/login" ? `${styles.light}` : `${styles.dark}`} `}>
          Editor
        </h3>
      </Link>
    </header>
  );
}

export default Navbar;
