import { Navigate, Outlet } from "react-router-dom";
import { getFormValues } from "./useLocalStorage";

const isAuth = getFormValues();
console.log(Object.entries(isAuth))
const ProtectedRoutes = () => {
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;