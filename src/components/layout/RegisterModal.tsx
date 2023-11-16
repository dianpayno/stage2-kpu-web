import {
    Dialog,  
  } from "@material-tailwind/react";

import{useState} from "react";
import InputElement from "../login/InputElement";
import ButtonElement from "../login/ButtonElement";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const RegisterModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen((cur: boolean) => !cur);

  return (
    <div>
        <ButtonElement onGetEvent={handleOpen} text="register" style="base"/>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <div className="mx-auto text-[#5C0303] w-full max-w-[24rem] bg-white px-6 py-8 rounded-lg relative">
            <div>
                <p className="text-2xl font-bold capitalize mb-3">register</p>
            </div>
            <form>

            <InputElement type="text" name="full name" placeholder="masukan nama"/>
            <InputElement type="text" name="alamat" placeholder="masukan alamat"/>
           
            <div className="mb-3">
              <label className="text-sm capitalize">Jenis kelamin</label>
              <div className="text-xs capitalize flex items-center gap-3">
                    <div className="flex items-center gap-1">
                    <input type="radio" name="gender" value="pria"/>
                    <label htmlFor="gender" >pria</label>
                    </div>
                    <div className="flex items-center gap-1">
                    <input type="radio" name="gender" value="wanita"/>
                    <label htmlFor="gender" >wanita</label>
                    </div>
              </div>
              </div>
            <InputElement type="text" name="username" placeholder="masukan username"/>
            <InputElement type="password" name="password"/>
            <ButtonElement text="register" type="submit" style="primary"/>
            </form>
            <p className="capitalize text-xs text-center mt-2">
                dengan mendaftar anda menyetujui syarat dan ketentuan yang berlaku
            </p>
            <button onClick={handleOpen} className="absolute top-2 right-2">
                <IoCloseCircle/>
            </button>
            
        </div>
      </Dialog>

    </div>
  )
}

export default RegisterModal