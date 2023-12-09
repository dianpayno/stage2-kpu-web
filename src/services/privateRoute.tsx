import { Navigate, Outlet, } from "react-router-dom"
import { UserContext } from "./context/userContext"
import { useContext } from "react"





export const PrivateRoute = () => {
const [state, dispatch] = useContext(UserContext)!
return state.isLogin?<Outlet />:<Navigate to="/" />
}
export const PrivateRouteAdminOnly = () => {
const [state, dispatch] = useContext(UserContext)!
 return  state.user.role === "admin"? <Outlet />:<Navigate to="/" />
 
}
// 
