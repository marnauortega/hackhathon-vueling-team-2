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
  const [users, setUsers] = useState([])
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const roleKey = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"

  // useEffect(() => {
  //   async function login() {
  //     axios
  //       .post(" https://vuelingemployee-api.azurewebsites.net/User/login", {
  //         username: "VuelingEmployeeUser",
  //         password: "VuelingEmployeeUser$123",
  //       })
  //       .then(function (response) {
  //         console.log(response.data.result)
  //         setUsers(response)
  //         setToken(response.data.result)
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //   }
  //   login()
  // }, [])

  return (
    <UsersContext.Provider
      value={(token, email, setToken, setEmail, password, setPassword)}
    >
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
