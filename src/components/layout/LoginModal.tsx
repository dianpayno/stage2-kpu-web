
import InputElement from "../login/InputElement";
import ButtonElement from "../login/ButtonElement";
import {IoCloseCircle} from "react-icons/io5";


type loginProps = {
  handleModal : () => void;
}

const LoginModal = (props: loginProps) => {
  
  const {handleModal} = props

    
  return (
   
        <div className=" text-[#5C0303] lg:w-[30%] bg-white px-6 py-6 rounded relative">
            <div>
                <p className="text-xl font-bold capitalize mb-5">login</p>
            </div>
            <form>
            <InputElement type="text" name="username" placeholder="masukan username"/>
            <InputElement type="password" name="password"/>
            <ButtonElement text="login" type="button" style="secondary"/>
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