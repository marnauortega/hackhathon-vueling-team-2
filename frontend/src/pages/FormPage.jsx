import React, { useState } from 'react'

export const FormPage = () => {
  const [data, setdata] = useState({})
  return (
    <>

        <div className="flex justify-center items-center bg-white ">
          <form className=''>
            <div className=" sm:overflow-hidden sm:rounded-md ">
              <div className="space-y-6 px-4 py-5 sm:p-6 bg-[#ffcc00]">
              
              <h2 className='text-gray-700 justify-center items-center font-semibold'>Edit logistic data</h2>
               
                {/* Date */}
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date:
                  </label>
                  
                  <div className="mt-1 flex rounded-md shadow-sm text-gray-700">
                    <input
                      type="date"
                      name="date"
                      // value={data.date}
                      // onChange={(e) => handleInputChange(e)}
                      className="block w-full flex-1  sm:text-sm bg-white p-1 rounded-sm text-gray-700"
                      placeholder="Product name"
                    />
                  </div>
                </div>
                
                {/* Product Price */}
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Price:
                  </label>
                  <div className="mt-1 flex  shadow-sm">
                    <input
                      type="number"
                      name="price"
                      // onChange={(e) => handleInputChange(e)}
                      // value={product.price}
                      className="block w-full flex-1 sm:text-sm bg-white p-1 rounded-sm text-gray-700 "
                      placeholder="Product price"
                    />
                  </div>
                </div>
                
                {/* Product description */}
               
              
              {/* button */}
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
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
  )
}
