import ButtonElement from "../login/ButtonElement"
import InputElement from "../login/InputElement"
import { overlayModal } from "../vote/Vote"
import { IoCloseCircle, IoHandLeft } from "react-icons/io5"
import { useRef, useState, FormEvent } from "react"
import { useMutation } from "react-query"
import { userApi } from "../../services/api/userapi"


type modalProps = {
    typeModal: boolean
    openModal: () => void
}

const AddPaslonModal = (props:modalProps) => {
    const imageRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<string>("")
    const {typeModal, openModal} = props
    const [dataPartai, setDataPartai] = useState<any>([
        {
            nama:"",
            alamat:"",
            ketua_umum:"",
            visi_misi:"",
            image:null
        }
    ])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, files} = event.target
        setDataPartai({
            ...dataPartai,
            [name]: files? files[0] : value
        })
        setImage(URL.createObjectURL(files![0]))
    }
    
    const handleSubmit = ()=>{
        const {mutate:submitPartai } = useMutation(async(e: FormEvent<HTMLFormElement>)=>{
            try{
                e.preventDefault()
                const headers = {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data"}
                const formData = new FormData()
                formData.append("image", dataPartai.image as File)
                formData.append("nama", dataPartai.nama)
                formData.append("alamat", dataPartai.alamat)
                formData.append("ketua_umum", dataPartai.ketua_umum)
                formData.append("visi_misi", dataPartai.visi_misi)
 
                const response =  await userApi.post("/partai/add", formData, {headers})
                return response.data             
            }catch(err){
                console.log("erronya adalah ", err)
            }
        },
        {
            onSuccess: ()=>{
                openModal()
            }
        })
    }
    console.log(dataPartai);
    
    

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
                        <InputElement type="text" placeholder="masukkan nama paslon" name="name" />
                        <InputElement type="number" name="no urut" placeholder="no_urut"/>
                        <InputElement type="text" name="visi_misi" />
                        
                        </div>
                        <div className="col-span-1 ps-4 items-center ">
                           {
                            image?<img className="w-[200px] py-2" src={image}/>:
                            <img className="w-[200px]" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
                           } 
                            <input
                            onChange={handleChange}
                            className="hidden"
                            ref={imageRef} type="file" name="image"/>
                            <ButtonElement type="button" text="upload" style="secondary" onGetEvent={() => imageRef.current?.click()}/>

                            
                                
                        </div>
                    </div>
                    <ButtonElement 
               
                    type="submit" text="tambahkan" style="secondary"/>
                </form>
                ):(
                    <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 px-3 pb-4">
                        <div className="col-span-2">
                        <InputElement
                        onChange={handleChange}
                         type="text" placeholder="masukkan partai" name="nama" />

                        <InputElement 
                        onChange={handleChange}
                        type="text" placeholder="masukkan nama ketua umum" name="ketua_umum" />

                        <InputElement 
                        onChange={handleChange}
                        type="text" name="visi_misi" />

                        <InputElement 
                        onChange={handleChange}
                        type="text" name="alamat" placeholder="masukan alamat" />
                        
                        
                        </div>
                        <div className="col-span-1 ps-4 items-center">
                         {
                            image?<img className="w-[200px] py-2" src={image}/>:
                            <img className="w-[200px]" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
                           } 
                            <input
                            onChange={handleChange}
                            className="hidden"
                            ref={imageRef} type="file" name="image"/>
                            <ButtonElement type="button" text="upload" style="secondary" onGetEvent={() => imageRef.current?.click()}/>
                           
                        </div>
                    </div>
                    <ButtonElement 
                 
                    type="submit" text="tambahkan" style="secondary"/>
                </form>
                )
            }
          
           
        </div>

    </div>
  )
}

export default AddPaslonModal