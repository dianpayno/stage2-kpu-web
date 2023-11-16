import { Navigate, Outlet, } from "react-router-dom"
import { dataLogin } from "../data/index"





export const PrivateRoute = () => {
return dataLogin.isLogin?<Outlet />:<Navigate to="/" />
}
export const PrivateRouteAdminOnly = () => {
 return dataLogin.isLogin && dataLogin.role == "admin"? <Outlet />:<Navigate to="/" />
 
}

