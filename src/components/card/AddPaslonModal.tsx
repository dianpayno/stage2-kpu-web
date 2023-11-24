import ButtonElement from "../login/ButtonElement"
import InputElement from "../login/InputElement"
import { overlayModal } from "../vote/Vote"
import { IoCloseCircle } from "react-icons/io5"


type modalProps = {
    typeModal: boolean
    openModal: () => void
}

const AddPaslonModal = (props:modalProps) => {
    const {typeModal, openModal} = props
  return (
    <div style={overlayModal} className="flex justify-center items-center">
        <div className="modalVoteAnimate bg-white lg:w-[45%] p-6 rounded-md relative">
        <IoCloseCircle onClick={openModal} className="text-2xl text-[#5E0000] absolute top-5 right-5 cursor-pointer"/>
            {typeModal?  <p className="capitalize text-xl font-bold text-[#5E0000] mb-4">tambahkan paslon baru</p>:  
            <p className="capitalize text-xl font-bold text-[#5E0000] mb-4">tambahkan partai baru</p>}
            
            {
                typeModal?(
                    <form>
                    <div className="grid grid-cols-3 px-3 pb-4">
                        <div className="col-span-2">
                        <InputElement type="text" placeholder="masukkan nama capres" name="nama capres" />
                        <InputElement type="text" placeholder="masukkan nama cawapres" name="nama cawapres" />
                        <InputElement type="number" name="no urut" placeholder="no urut paslon"/>
                        <InputElement type="text" name="visi & misi" />
                        
                        </div>
                        <div className="col-span-1 ps-4 items-center">
                        <img className="w-[100px]" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
                            <InputElement type="file" name="upload foto capres"/>
                            <InputElement type="file" name="uploa foto cawapres" />      
                        </div>
                    </div>
                    <ButtonElement type="submit" text="tambahkan" style="secondary"/>
                </form>
                ):(
                    <form>
                    <div className="grid grid-cols-3 px-3 pb-4">
                        <div className="col-span-2">
                        <InputElement type="text" placeholder="masukkan partai" name="nama partai" />
                        <InputElement type="text" placeholder="masukkan nama ketua umum" name="nama ketum" />
                        <InputElement type="text" name="visi & misi" />
                        <InputElement type="text" name="alamat" placeholder="masukan alamat"/>
                        
                        </div>
                        <div className="col-span-1 ps-4 items-center">
                        <img className="w-[100px] mt-9" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
                            <InputElement type="file" name="upload logo partai"/>
                           
                        </div>
                    </div>
                    <ButtonElement type="submit" text="tambahkan" style="secondary"/>
                </form>
                )
            }
          
           
        </div>

    </div>
  )
}

export default AddPaslonModal