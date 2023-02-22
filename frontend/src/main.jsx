import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import axios from "axios";
import "./index.css";
import usersFake from "./data/db";

// Create a new context
export const UsersContext = createContext();

function App() {
  const url = "https://vuelingemployee-api.azurewebsites.net/User/login";
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const roleKey = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

  // Hardcodeado para poderlo presentar mañana
  const [users, setUsers] = useState(usersFake);
  const [logged, setLogged] = useState(false);

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

  const contextData = { token, email, setToken, setEmail, password, setPassword, users, setUsers, logged, setLogged };

  return (
    <UsersContext.Provider value={contextData}>
      <Router />
    </UsersContext.Provider>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
