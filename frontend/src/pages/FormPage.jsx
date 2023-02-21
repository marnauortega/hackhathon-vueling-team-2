import React, { useState } from "react";

export const FormPage = () => {
  // Full Time states
  const [fullTimeJardinera, setFullTimeJardinera] = useState(6);
  const [fullTimeEquipaje, setFullTimeEquipaje] = useState(7.25);
  const [fullTimeCoordinacion, setFullTimeCoordinacion] = useState(10);

  // Part Time states

  const [partTimeJardinera, setPartTimeJardinera] = useState(7.5);
  const [partTimeEquipaje, setpartTimeEquipaje] = useState(7);
  const [partTimeCoordinacion, setPartTimeCoordinacion] = useState(8.5);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex align-center h-full justify-center px-4 text-[#4d4d4d]">
        <form className="">
          <div className=" sm:overflow-hidden sm:rounded-md ">
            <div className="space-y-6 px-4 py-5 sm:p-6 bg-[#ffcc00]">
              <h1 className="flex text-gray-700 justify-center items-center font-semibold text-2xl">
                Edit logistic data
              </h1>
              {/* JARDINERA */}
              <h3 className="flex text-gray-700 justify-center items-center font-semibold">
                Jardinera {`${'€/h'}`}
              </h3>
              <div className="flex gap-6">
                <div className="">
                  <label
                    htmlFor="fullTimeJardinera"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Time
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step='any'
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
                  <label
                    htmlFor="partTimeJardinera"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Part Time
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step='any'
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
              <h3 className="flex text-gray-700 justify-center items-center font-semibold">
                Equipaje {`${'€/h'}`}
              </h3>
              <div className="flex gap-6">
                <div className="">
                  <label
                    htmlFor="fullTimeEquipaje"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Time
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step='any'
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
                  <label
                    htmlFor="partTimeEquipaje"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Part Time
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step='any'
                      name="partTimeEquipaje"
                      min={0}
                      onChange={(e) => setpartTimeEquipaje(e.target.value)}
                      value={partTimeEquipaje}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
              </div>
              {/* Coordinacion */}
              <h3 className="flex text-gray-700 justify-center items-center font-semibold">
                Coordinación {`${'€/h'}`}
              </h3>
              <div className="flex gap-6">
                <div className="">
                  <label
                    htmlFor="fullTimeCoordinacion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Time
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step='any'
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
                  <label
                    htmlFor="partTimeCoordinacion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Part Time
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700 ">
                    <input
                      type="number"
                      step='any'
                      name="partTimeCoordinacion"
                      min={0}
                      onChange={(e) => setPartTimeCoordinacion(e)}
                      value={partTimeCoordinacion}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="€/h"
                    />
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="px-4 py-3 text-right sm:px-6">
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
