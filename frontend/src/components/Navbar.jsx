import React, { useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../../public/img/logo-team.svg"

function Navbar({ children }) {
  // Función para navegar a la página anterior
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="navbar bg-[#4d4d4d]">
      <div className="flex-1">
        <img src={logo} className="w-8" alt="logo" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Item 1</a>
          </li> */}
          <li tabIndex={0}>
            <a className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
            <ul className="p-2 bg-[#4d4d4d] right-0 text-white">
              <li>
                <a>Table</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    // <div className="fixed z-[100] flex w-full items-center justify-between  bg-[#4d4d4d] p-3 text-center text-white">
    //   <button className="text-white" onClick={handleBack}>
    //     {/* icono */}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M15.75 19.5L8.25 12l7.5-7.5"
    //       />
    //     </svg>
    //   </button>
    //   <div className="flex flex-grow justify-center">
    //     <img src={logo} className="w-6" alt="logo" />
    //   </div>
    // </div>
  )
}

export default Navbar
