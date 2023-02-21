import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import "./index.css";

// Create a new context
export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/result");
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    }
    fetchData();
  }, []);

  const allUsers = {
    users,
    filteredUsers,
    setFilteredUsers,
  };

  return (
    <UsersContext.Provider value={allUsers}>
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
