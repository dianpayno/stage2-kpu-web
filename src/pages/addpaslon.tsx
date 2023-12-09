import ButtonElement from "../components/login/ButtonElement"
import InputElement from "../components/login/InputElement"
import { useRef, useState, FormEvent, useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import { userApi } from "../services/api/userapi"
import Navbarmenu from "../components/navbar/Navbar"
import TableCapres from "../components/Table/TableCapres"
import { BeatLoader } from "react-spinners"
import { IoIosCloseCircle } from "react-icons/io";


const AddPaslon = () => {
    const imageRef = useRef<HTMLInputElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [image, setImage] = useState<string>("")
    const [addPaslon, setAddPaslon] = useState<any>([
        {
            nama:"",
            nomor_urut:"",
            visi_misi:"",
            image:null
        }
    ])

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value, files}= event.target
        setAddPaslon({
            ...addPaslon,
            [name]:files? files[0] : value
        }) 
        setImage(URL.createObjectURL(files![0]))      
    }

    const {mutate:submitPaslon, isLoading:dataLoading} = useMutation(async(e: FormEvent<HTMLFormElement>)=>{
        try{
            e.preventDefault()
            const token = localStorage.getItem("token")
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"}  

                const formData = new FormData()
                formData.append("nomor_urut", addPaslon.nomor_urut)
                formData.append("nama", addPaslon.nama)
                formData.append("visi_misi", addPaslon.visi_misi)
                formData.append("image", addPaslon.image as File)

                const response =  await userApi.post("/paslon/add", formData, {headers})
                return response.data
            }
            catch(err){
                console.log("erronya adalah ", err)
            }     
        },
        {
               onSuccess: ()=>{
                refetchData()
                setIsOpen(!isOpen)
                setAddPaslon({
                    nama:"",
                    nomor_urut:"",
                    visi_misi:"",
                    image:null
                })
               
                
            }
        }
    )

    const {data:dataPaslon, refetch:refetchData }= useQuery("dataPalson", async()=>{
        try{
            const token = localStorage.getItem("token")
            const headers ={
                Authorization: `Bearer ${token}`
            }
            const response = await userApi.get("/paslon", {headers})
            return response.data
        }catch(error){
            console.log("ERRORNYA ADALAH",error);
        }
    })

    const sortedDataPaslon = dataPaslon?.data.sort((a:any, b:any)=>{
        return a.nomor_urut - b.nomor_urut
    })
    
    
    
  



  return (
    <div className="relative">

    <Navbarmenu/>
    <div className="pt-24 flex justify-end mr-24 gap-3">
   
    <ButtonElement
    onGetEvent={()=>setIsOpen(!isOpen)} 
     text="tambah paslon" style="secondary"/>
      <ButtonElement
     text="partai pengusung" style="secondary"/>


    </div>
        
        <div className="mb-7">
        <TableCapres dataPaslon={sortedDataPaslon}/>
        </div>
            {dataLoading && <div className="absolute z-50 h-[100vh] top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80
            flex items-center justify-center">  
            <BeatLoader color="white"    />
            </div>}
           
        { isOpen && <div 
        className="absolute h-screen top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 z-20 flex justify-center items-center ">
        <div className="w-[400px] bg-[#f7f5f2] px-3 py-4 rounded-xl relative ">
            <div>
                <IoIosCloseCircle className="absolute top-0 right-0 cursor-pointer" size={25} onClick={()=>setIsOpen(!isOpen)}/>
            </div>
        <form onSubmit={submitPaslon}>
                    <div className="grid grid-cols-3 px-3 pb-4">
                        <div className="col-span-2">
                        <InputElement
                        onChange={handleOnchange}
                        value={addPaslon.nama}
                         type="text" placeholder="masukkan nama paslon" name="nama" />

                        <InputElement 
                        onChange={handleOnchange}
                        value={addPaslon.nomor_urut}
                        type="string" placeholder="masukkan nomor urut" name="nomor_urut" />

                        <InputElement 
                        onChange={handleOnchange}
                        value={addPaslon.visi_misi}
                        type="text" name="visi_misi" />
                        
                        
                        </div>
                        <div className="col-span-1 ps-4 mt-10 items-center">
                         {
                            image?<img className="w-[200px] py-2" src={image}/>:
                            <img className="w-[200px] py-2" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
                        } 
                            <input
                          onChange={handleOnchange}
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

export default AddPaslon