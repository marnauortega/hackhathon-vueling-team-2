import React, { useState, useEffect, createContext } from "react"
import ReactDOM from "react-dom/client"
import Router from "./components/Router"
import axios from "axios"
import "./index.css"

// Create a new context
export const UsersContext = createContext()

function App() {
  const url = "https://vuelingemployee-api.azurewebsites.net/User/login"
  const [token, setToken] = useState("")

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //     setUsers(data)
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    async function fetchData() {
      axios
        .post(" https://vuelingemployee-api.azurewebsites.net/User/login", {
          username: "VuelingEmployeeUser",
          password: "VuelingEmployeeUser$123",
        })
        .then(function (response) {
          console.log(response)
          setUsers(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    fetchData()
  }, [])

  const userData = { users, setUsers }

  return (
    <UsersContext.Provider value={userData}>
      <Router />
    </UsersContext.Provider>
  )
}

export default App

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
