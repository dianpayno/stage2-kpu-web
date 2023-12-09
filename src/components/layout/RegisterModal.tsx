import InputElement from "../login/InputElement";
import ButtonElement from "../login/ButtonElement";
import {IoCloseCircle} from "react-icons/io5";
import { userApi } from "../../services/api/userapi";
import axios from "axios";
import {useState, FormEvent} from "react"
import {useMutation} from "react-query"
import { useNavigate } from "react-router-dom";

type RegisterProps ={
  handleModal : () => void;
}

const RegisterModal = (props: RegisterProps) => {
  const {handleModal} = props
  
 const [dataUser, setDataUser] = useState({
   full_name: "",
   alamat: "",
   jenis_kelamin: "",
   username: "",
   password: "",
  
   
 })

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setDataUser({
      ...dataUser,
      [name]: value,
    })
  }
  
 const {mutate:addUser, }= useMutation(async (e: FormEvent<HTMLFormElement>): Promise<void> =>{
  try{
    e.preventDefault()
    const headers = {
      "Content-Type": "application/json"
    }
     const response = await userApi.post("/register", dataUser, {headers})
     console.log(response.data)
  }catch(err){
    console.log("erornya adalah ", err)
  }
   
 handleModal()
 })

  return (

<div className=" text-[#5C0303]  bg-white px-6 py-6 rounded relative z-20">
    <div>
        <p className="text-xl font-bold capitalize mb-5">register</p>
    </div>
       <form onSubmit={addUser}>
        <div className="">
              <InputElement type="text" name="full_name" 
              value={dataUser.full_name}
              onChange={handleChange}/>
              <label className="text-sm capitalize">jenis kelamin</label>
              <div className="flex items-center gap-2 mt-1 mb-3">
              <input type="radio" name="jenis_kelamin" value="male"
              onChange={handleChange}/>
              <label htmlFor="male" className="text-xs">Pria</label>
              <input type="radio" name="jenis_kelamin" value="female"
              onChange={handleChange}/>
              <label htmlFor="female" className="text-xs">Wanita</label>
              </div>      
              <InputElement 
              onChange={handleChange}
              value={dataUser.username}
              type="text" name="username"/>
              <InputElement
              onChange={handleChange}
              value={dataUser.password}
              type="password" name="password"/>
              <InputElement
              value={dataUser.alamat}
              onChange={handleChange} type="text" name="alamat" placeholder="no rumah, jalan/gang"/>
              <ButtonElement text="register" type="submit" style="secondary"/>
              </div>
          </form>
        
    <div className="flex justify-center items-center mt-2 relative">
    <p className="text-xs capitalize">
    Dengan mendaftar, saya menyetujui
    Syarat dan Ketentuan serta Kebijakan Privasi
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

export default RegisterModal


