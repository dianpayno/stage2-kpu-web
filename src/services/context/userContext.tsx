import { createContext, useReducer, Dispatch, ReactNode } from "react";

interface State {
    isLogin: boolean,
    user: {} | any
}

interface Action {
    type: "USER_SUCCES" | "LOGIN_SUCCES" | "AUTH_ERROR" | "LOGOUT",
    payload: any
    }



const initialState: State = {
    isLogin: false,
    user:{}
   
}


const reducer = (state: State, action: Action) => {
    const { type, payload } = action
    switch (type) {
        case "USER_SUCCES":
        case "LOGIN_SUCCES":
            localStorage.setItem("token", payload.token || "");
            return {
               isLogin: true,
               user: payload
            }
        case "AUTH_ERROR":
        case "LOGOUT":
            localStorage.removeItem("token");
            return {
                isLogin: false,
                user: {}
            }
        default:
            return state
    }       
}

export const UserContext = createContext<[State, Dispatch<Action>] | undefined>(undefined);
 interface UserContextProviderProps {
    children: ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}