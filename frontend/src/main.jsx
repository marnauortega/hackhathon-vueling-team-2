import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router/Router";
import "./index.css";

function App() {
  return <Router />;
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
