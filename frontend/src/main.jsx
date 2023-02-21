import React, { useState, useEffect, createContext } from "react"
import ReactDOM from "react-dom/client"
import Router from "./components/Router"
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
    const login = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setToken(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    login()
  }, [])

  return (
    <UsersContext.Provider value={token}>
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
