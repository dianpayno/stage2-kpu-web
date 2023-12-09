
import ButtonElement from '../login/ButtonElement'
import { useState, useRef, useEffect, useContext } from 'react'
import InputElement from '../login/InputElement'
import { IoIosCloseCircle } from 'react-icons/io'
import { useMutation, useQuery } from 'react-query'
import { userApi } from '../../services/api/userapi'
import NewsCard from "../card/Newscard"
import { BeatLoader } from 'react-spinners'
import { UserContext } from '../../services/context/userContext'
import { useParams } from 'react-router-dom'

const AddNewsLayout = () => {

    const [isOpen, setIsOpen] = useState(false)
    // const imageRef=useRef<HTMLInputElement>(null)
    // const [image, setImage] = useState<string>("")
    const [state]= useContext(UserContext)!
    const {id} = useParams()
    const [news, setNews] = useState<any>([{
        title: "",
        author: "",
        description: "",
        image: ""
    }])
    
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);


    const handleOnChange = (e:any) => {
        const { name, value, files } = e.target
        setNews({
            ...news,
            [name]: files ? files[0] : value
        })
        // setImage(URL.createObjectURL(files![0]))
    }
    const {data:dataNews, refetch:refetchNews, isLoading:newsLoading} = useQuery('dataNews', async()=>{
        try{
            const token = localStorage.getItem("token")
            const headers = {
                "Authorization": `Bearer ${token}`
            }
            const response = await userApi.get("/pemilu-news", {headers})
            return response.data
        }catch(err){
            console.log("ini error",err)
        }
    })

    const {mutate:submitNews, isLoading:submitLoading} = useMutation(async (e:React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault()
            const token = localStorage.getItem("token")
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const response = await userApi.post("/pemilu-news", news, {headers})
            return response.data
        }catch(err){
            console.log("erronya adalah ", err)
        }},
        {
            onSuccess: ()=>{
                setNews({
                    title: "",
                    author: "",
                    image: "",
                    description: ""
                })
                refetchNews()
                setIsOpen(false)
            }
        }
    )
 const {mutate:deleteNews} = useMutation(async (id:string) => {
    try{
        const token = localStorage.getItem("token")
        const headers = {
            "Authorization": `Bearer ${token}`
        }
        const response = await userApi.delete(`/pemilu-news/delete/${id}`, {headers})
        return response.data
    }catch(err){
        console.log("erronya adalah ", err)
    }
 },
 {
    onSuccess: ()=>{
        refetchNews()
        setIsOpen(false)
    }
 })


 






  return (
    <div className='mt-20'>
        <div className='flex justify-end me-32'>
            {state.user.role === "admin" && (
            <ButtonElement type="button" text="add news" style="secondary" onGetEvent={()=>setIsOpen(true)}/>
            )}
            </div>
        {
        isOpen &&
        <div className='fixed z-50 flex justify-center items-center
         top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70'>
            <div className='bg-[#F8F7F3] p-5 rounded-md text-[#5E0000] w-1/3 relative'>
                <p className='text-xl font-bold capitalize mb-4'>tambahkan berita baru</p>
                <div>
                    <form onSubmit={submitNews}>
                        <InputElement 
                        onChange={handleOnChange}
                        value={news.title}
                        type="text" placeholder="Judul Berita" name='title'/>

                        <InputElement
                         onChange={handleOnChange}
                         value={news.author}
                        type="text" placeholder="author" name='author'/>

                        <label htmlFor="description" className='text-sm capitalize'>description</label>
                        <textarea
                        name='description'
                        onChange={handleOnChange}
                        value={news.description}
                        className='w-full h-20 p-2 border border-gray-300 rounded-md outline-none focus:border-[#5E0000]'
                        >{
                            news.description
                        }
                        </textarea>

                        <InputElement
                        onChange={handleOnChange}
                        value={news.image}
                        type='text' name='image' />

                        {/* <label 
                        onClick={()=> imageRef.current?.click()}
                        htmlFor="image" className='text-sm capitalize cursor-pointer'>upload image</label> */}
                        {/* {
                        image?<img className='w-[100px] py-2' src={image}/>:
                        <img 
                     
                        className="w-[100px] py-2" src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"/>
                        } */}
                        <ButtonElement type="submit" text="tambahkan" style="secondary"/>
                    </form>

                </div>
                <IoIosCloseCircle
                onClick={()=>setIsOpen(false)}
                className='absolute top-2 right-2 cursor-pointer text-3xl'/>            
            </div>
            </div>
        
        }
        <div className='flex justify-center mt-10'>
        <div className="w-[85%] grid grid-cols-3 gap-4 mb-7"> 
        {
            dataNews?.data.map((item:any, index:number)=>{ return(
            <NewsCard key={index} index={index} data={item} 
            deleteNews={deleteNews}/>)})
        }
        </div>

        </div>
        { submitLoading && newsLoading?<div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80
        flex justify-center items-center'>
            <BeatLoader color="white"/>
        </div>:null}

         </div>
  )
}

export default AddNewsLayout