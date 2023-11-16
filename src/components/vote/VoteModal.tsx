import { Dialog } from "@material-tailwind/react"
import { useState } from "react"
import ButtonElement from "../login/ButtonElement"
import PaslonCard from "../card/PaslonCard"
import { paslonPresiden } from "../../data"
import { IoCloseCircle } from "react-icons/io5"

const VoteModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen((cur: boolean) => !cur);
  return (
    <div>
        <ButtonElement onGetEvent={handleOpen} text="masukan suaramu" style="primary"/>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <div className="mx-auto text-white w-full  px-6 py-8 rounded-lg">
            <div>
            <div>
                <p className="text-2xl font-bold capitalize">masukan pilihanmu</p>
                <p className="text-sm mb-2">Silahkan klik foto salah satu paslon untuk memilih</p>
            </div>
            <div  className="grid lg:grid-cols-3 gap-2 items-center lg:px-5 relative">
                {
                    paslonPresiden.map((paslon, index) => (
                        <PaslonCard key={index} paslonPresiden={paslon}/>
                    ))
                }

            </div>
            </div>

            <button onClick={handleOpen} className="absolute top-2 right-0">
                <IoCloseCircle className="text-3xl"/>
            </button>
           
        </div>
       
      </Dialog>

    </div>
  )


}

export default VoteModal