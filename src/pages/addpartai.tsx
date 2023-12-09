import ButtonElement from "../components/login/ButtonElement"
import InputElement from "../components/login/InputElement"
import { useRef, useState, FormEvent, useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { userApi } from "../services/api/userapi"
import Navbarmenu from "../components/navbar/Navbar"
import TablePartai from "../components/Table/TablePartai"
import { BeatLoader } from "react-spinners"


const AddPartai = () => {
    const imageRef = useRef<HTMLInputElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [image, setImage] = useState<string>("")
    const [addPartai, setaddPartai] = useState<any>([
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
        setaddPartai({
            ...addPartai,
            [name]: files? files[0] : value
        })
        setImage(URL.createObjectURL(files![0]))
    }
    
    
        const {mutate:submitPartai, isLoading:dataLoading} = useMutation(async(e: FormEvent<HTMLFormElement>)=>{
            try{
                e.preventDefault()
                const token = localStorage.getItem("token")
                const headers = {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"}
                const formData = new FormData()
                formData.append("image", addPartai.image as File)
                formData.append("nama", addPartai.nama)
                formData.append("alamat", addPartai.alamat)
                formData.append("ketua_umum", addPartai.ketua_umum)
                formData.append("visi_misi", addPartai.visi_misi)
 
                const response =  await userApi.post("/partai/add", formData, {headers})
                return response.data             
            }catch(err){
                console.log("erronya adalah ", err)
            }
        },
        {
            onSuccess: ()=>{
                setaddPartai({
                    nama:"",
                    alamat:"",
                    ketua_umum:"",
                    visi_misi:"",
                    image:null 
                })
                refetchPartai()
                setIsOpen(false)
            }
        })
      
  
       
        
    
const {data: dataPartai, refetch:refetchPartai, } = useQuery("listPartai", async()=> {
  try{
    const token = localStorage.getItem("token")
    const headers = {
        Authorization: `Bearer ${token}`,
    }
    const response =  await userApi.get("/partai", {headers})
    return response.data
  }catch(err){
    console.log("erronya adalah ", err)
  }
})

console.log(dataPartai);
  return (
    <div className="relative">

    <Navbarmenu/>
    <div className="pt-24 flex justify-end mr-24">
    <ButtonElement
    onGetEvent={()=>setIsOpen(!isOpen)} 
     text="tambah partai" style="secondary"/>
    </div>
        
        <div className="mb-7">
        <TablePartai dataPartai={dataPartai?.data}/>
        </div>
            {dataLoading && <div className="fixed z-40 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80
            flex items-center justify-center">  
            <BeatLoader color="white"    />
            </div>}
           
        { isOpen && <div 
        
        className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 z-20 flex justify-center items-center ">
        <div 
        className="w-[400px] bg-[#f7f5f2] px-3 py-4 rounded-xl">
        <form onSubmit={submitPartai}>
                    <div className="grid grid-cols-3 px-3 pb-4">
                        <div className="col-span-2">
                        <InputElement
                        value={addPartai.nama}
                        onChange={handleChange}
                         type="text" placeholder="masukkan partai" name="nama" />

                        <InputElement 
                        value={addPartai.ketua_umum}
                        onChange={handleChange}
                        type="text" placeholder="masukkan nama ketua umum" name="ketua_umum" />

                        <InputElement 
                        onChange={handleChange}
                        value={addPartai.visi_misi}
                        type="text" name="visi_misi" />

                        <InputElement 
                        value={addPartai.alamat}
                        onChange={handleChange}
                        type="text" name="alamat" placeholder="masukan alamat" />
                        
                        
                        </div>
                        <div className="col-span-1 ps-4 mt-10 items-center">
                         {
                            image?<img className="w-[200px] py-2" src={image}/>:
                            <img className="w-[200px] py-2" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
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

    </div>
    </div>}
    </div>
  )
}

export default AddPartai