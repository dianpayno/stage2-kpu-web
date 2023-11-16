import {

    Dialog,  
  } from "@material-tailwind/react";

import{useEffect, useState} from "react";
import InputElement from "../login/InputElement";
import ButtonElement from "../login/ButtonElement";
import RegisterModal from "./RegisterModal";
import {IoCloseCircle} from "react-icons/io5";

const LoginModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen((cur: boolean) => !cur);
    
  return (
    <div>
        <ButtonElement onGetEvent={handleOpen} text="login" style="secondary"/>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <div className="mx-auto text-[#5C0303] w-full max-w-[24rem] bg-white px-6 py-8 rounded-lg">
            <div>
                <p className="text-2xl font-bold capitalize mb-3">login</p>
            </div>
            <form>
            <InputElement type="text" name="username" placeholder="masukan username"/>
            <InputElement type="password" name="password"/>
            <ButtonElement text="login" type="submit" style="primary"/>
            </form>
            <div className="flex justify-center items-center mt-2 relative">
            <button className="capitalize text-xs z-10 ">
                belum memiliki akun? 
            </button>
            <RegisterModal/>
            </div>
            <button onClick={handleOpen} className="absolute top-2 right-20">
                <IoCloseCircle/>
            </button>
            
        </div>
      </Dialog>

    </div>
  )
}

export default LoginModal