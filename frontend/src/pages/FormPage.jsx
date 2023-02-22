import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../main";
import styles from "../styles/Form.module.css";

export const FormPage = () => {
  // const url ='https://vuelingemployee-api.azurewebsites.net/Handling'

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState({});

  // Full Time states
  const [fullTimeJardinera, setFullTimeJardinera] = useState(6);
  const [fullTimeEquipaje, setFullTimeEquipaje] = useState(7.25);
  const [fullTimeCoordinacion, setFullTimeCoordinacion] = useState(10);

  // Part Time states

  const [partTimeJardinera, setPartTimeJardinera] = useState(7.5);
  const [partTimeEquipaje, setPartTimeEquipaje] = useState(7);
  const [partTimeCoordinacion, setPartTimeCoordinacion] = useState(8.5);

  const fetchUrl = async () => {
    const url = "https://vuelingemployee-api.azurewebsites.net/Costs";
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data.result[0].fullTimeCost);

      setFullTimeJardinera(data.result[0].fullTimeCost);
      setPartTimeJardinera(data.result[0].partTimeCost);

      setFullTimeCoordinacion(data.result[1].fullTimeCost);
      setPartTimeCoordinacion(data.result[1].partTimeCost);

      setFullTimeEquipaje(data.result[2].fullTimeCost);
      setPartTimeEquipaje(data.result[2].partTimeCost);

      if (data.isOk === "true") {
        setData(data.result);
        console.log(data.result);
        setError({ show: false, msg: "" });
        setIsLoading(false);
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchUrl();
  };

  return (
    <>
      <div className="flex align-center justify-center px-4 pt-10 text-[#4d4d4d] h-screen">
        <form className="flex justify-center mt-10">
          <div className="sm:overflow-hidden sm:rounded-md ">
            <div className={`${styles.card} px-6 py-6 sm:p-6 bg-[#ffcc00]`}>
              <h1
                className={`${styles.heading} flex text-gray-700 justify-center items-center font-bold tracking-tight text-3xl`}
              >
                Edit Employee Data
              </h1>
              <lord-icon
                src="https://cdn.lordicon.com/puvaffet.json"
                trigger="hover"
                colors="primary:#262525,secondary:#c55252"
                className={styles.icon}
                style={{
                  width: "60px",
                  height: "60px",
                  display: "block",
                  margin: "auto",
                }}
              ></lord-icon>
              {/* JARDINERA */}
              <h3 className="flex text-gray-700 justify-center items-center font-bold  mt-6 mb-2">Jardinera</h3>
              <div className="flex gap-6">
                <div className="">
                  <label htmlFor="fullTimeJardinera" className="block text-sm font-medium text-gray-700">
                    Full Time {`${"€/h"}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step="any"
                      name="fullTimeJardinera"
                      min={0}
                      onChange={(e) => setFullTimeJardinera(e.target.value)}
                      value={fullTimeJardinera}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="partTimeJardinera" className="block text-sm font-medium text-gray-700">
                    Part Time {`${"€/h"}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step="any"
                      name="partTimeJardinera"
                      min={0}
                      onChange={(e) => setPartTimeJardinera(e.target.value)}
                      value={partTimeJardinera}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
              </div>

              {/* EQUIPAJE */}
              <h3 className="flex text-gray-700 justify-center items-center font-bold mt-6 mb-2">Equipaje</h3>
              <div className="flex gap-6">
                <div className="">
                  <label htmlFor="fullTimeEquipaje" className="block text-sm font-medium text-gray-700">
                    Full Time {`${"€/h"}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step="any"
                      name="fullTimeEquipaje"
                      min={0}
                      onChange={(e) => setFullTimeEquipaje(e.target.value)}
                      value={fullTimeEquipaje}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="partTimeEquipaje" className="block text-sm font-medium text-gray-700">
                    Part Time {`${"€/h"}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step="any"
                      name="partTimeEquipaje"
                      min={0}
                      onChange={(e) => setPartTimeEquipaje(e.target.value)}
                      value={partTimeEquipaje}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
              </div>
              {/* Coordinacion */}
              <h3 className="flex text-gray-700 justify-center items-center font-bold mt-6 mb-2">Coordinación</h3>
              <div className="flex gap-6">
                <div className="">
                  <label htmlFor="fullTimeCoordinacion" className="block text-sm font-medium text-gray-700">
                    Full Time {`${"€/h"}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step="any"
                      name="fullTimeCoordinacion"
                      min={0}
                      onChange={(e) => setFullTimeCoordinacion(e.target.value)}
                      value={fullTimeCoordinacion}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="partTimeCoordinacion" className="block text-sm font-medium text-gray-700">
                    Part Time {`${"€/h"}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step="any"
                      name="partTimeCoordinacion"
                      min={0}
                      onChange={(e) => setPartTimeCoordinacion(e.target.value)}
                      value={partTimeCoordinacion}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="px-4 py-3 text-right sm:px-6 mt-4">
                <button
                  onClick={(e) => handleFormSubmit}
                  className="inline-flex justify-center items-center text-sm font-medium   hover:bg-slate-600 rounded-full bg-[#4d4d4d] text-white px-8 py-2"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
