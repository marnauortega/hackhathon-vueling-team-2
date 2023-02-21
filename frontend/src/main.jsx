import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import "./index.css";

// Create a new context
export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://vuelingemployee-api.azurewebsites.net/User/login");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <UsersContext.Provider value={users}>
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
