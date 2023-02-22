import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../main";

function ProtectedRoute({ redirectPath = "/", children }) {
  const { logged } = useContext(UsersContext);

  console.log(logged);
  if (!logged) return <Navigate to={redirectPath} replace />;

  return children;
}

export default ProtectedRoute;
