
import InputElement from "../login/InputElement";
import ButtonElement from "../login/ButtonElement";
import {IoCloseCircle} from "react-icons/io5";
import { useState, useContext } from "react";
import { userApi, setAuthToken } from "../../services/api/userapi";
import { UserContext } from "../../services/context/userContext";
import {JwtPayload, jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";



type loginProps = {
  handleModal : () => void;
}

type dataUser = {
  username: string
  password: string
}

const LoginModal = (props: loginProps) => {
  const {handleModal} = props
  const [, dispatch] = useContext(UserContext)!
  const [dataUser, setDataUser] = useState<dataUser>({
    username: "",
    password: "",
  })
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setDataUser({
      ...dataUser,
      [name]: value,
    })
  }

  async function loginUser(e: any){
    try{
     e.preventDefault()
     const headers = {
       "Content-Type": "application/json"
     }
     const response = await userApi.post("/login", dataUser, {headers})
     const payload = jwtDecode(response.data.token)
     payload.token = response.data.token
     dispatch({
      type:"LOGIN_SUCCES",
      payload
     })
    setAuthToken(localStorage.token)
    handleModal()
    
    }
  catch(error){
    console.log("erornya adalah ", error)
    setError(error.response.data.message);
    
  }
}

 
    
  return (
   
        <div className=" text-[#5C0303] lg:w-[30%] bg-white px-6 py-6 rounded relative">
            <div>
                <p className="text-xl font-bold capitalize mb-5">login</p>
                <p className="text-xs text-center capitalize text-red-500">{error}</p>
            </div>
            <form onSubmit={loginUser}>
            <InputElement 
            onChange={handleChange}
            type="text" name="username" placeholder="masukan username"/>
            <InputElement 
            onChange={handleChange}
            type="password" name="password"/>
            <ButtonElement text="login" type="submit" style="secondary"/>
            </form>
            <div className="flex justify-center items-center mt-2 relative">
            <p className="text-xs z-10 capitalize">
                Belum memiliki akun? klik register
            </p>
            </div>
            <IoCloseCircle
        onClick={handleModal}
        className="
        absolute
        top-1
        right-1
        text-3xl
        text-[#5C0303]
        "/>

            
           
            
       
        </div>
  )
}

export default LoginModal