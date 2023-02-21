import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";

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
    <header className={`${location.pathname === "/login" ? "bg-[#181817]" : "bg-[#ffcc00]"} fixed z-10 navbar`}>
      <div className="flex-1">
        <Link to="/">
          {location.pathname === "/login" ? (
            <img src={logo} className="w-8" alt="logo" />
          ) : (
            <img src={logoDark} className="w-8" alt="logo" />
          )}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={`${location.pathname === "/login" ? "white" : "black"} `}
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </a>
            <ul className="p-2 bg-[#4d4d4d] right-0 text-white">
              <li>
                <Link to="/viewer">Viewer</Link>
              </li>
              <li>
                <Link to="/formPage">Editor</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
