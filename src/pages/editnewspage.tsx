
import Navbarmenu from '../components/navbar/Navbar'
import InputElement from '../components/login/InputElement'
import ButtonElement from '../components/login/ButtonElement'
import { useQuery, useMutation } from 'react-query'
import { userApi } from '../services/api/userapi'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {IoIosCloseCircle} from 'react-icons/io'


const EditNewsPage = () => {
    const [selectedNews, setSelectedNews]= useState<any>({
        title: "",
        author: "",
        description: "",
        image: ""
    })
    const id = Number(useParams().id)
    const navigate = useNavigate()
    const {data:dataNews, refetch:refetchNews} = useQuery('dataNews', async()=>{
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


    const {mutate:editNews} = useMutation(async (e:React.FormEvent<HTMLFormElement>) => {
        try{
            e.preventDefault()
            const token = localStorage.getItem("token")
            const headers = {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
            const response = await userApi.put(`/pemilu-news/update/${id}`, selectedNews, {headers})
            return response.data
        }catch(err){
            console.log("erronya adalah ", err)
        }
     },
     {
        onSuccess: () => {
            setSelectedNews({
                title: "",
                author: "",
                description: "",
                image: ""
            })
            refetchNews()
            navigate("/add-news")

        }
     })

     const handleOnChange = (e:any) => {
        const { name, value, files } = e.target
        setSelectedNews({
            ...selectedNews,
            [name]: files ? files[0] : value
        })
    }

    useEffect(() =>{
        const getNewsById = dataNews?.data.find((item: any) => item.id === id);
        setSelectedNews(getNewsById)
    },[id])

    console.log(selectedNews);
    
    
    
  return (
    <div>
        <Navbarmenu/>
         <div className='fixed flex justify-center items-center
        top-0 z-50 bottom-0 right-0 left-0 bg-black bg-opacity-80'>
             <div className='bg-[#F8F7F3] p-5 rounded-md text-[#5E0000] w-1/3 relative'>
                <p className='text-xl font-bold capitalize mb-4'>Edit berita</p>
                <div>
                    <form onSubmit={editNews} >
                        <InputElement 
                        onChange={handleOnChange}
                        value={selectedNews.title}
                        type="text" placeholder="Judul Berita" name='title'/>

                        <InputElement
                         onChange={handleOnChange}
                         value={selectedNews.author}
                        type="text" placeholder="author" name='author'/>

                        <label htmlFor="description" className='text-sm capitalize'>description</label>
                        <textarea
                        name='description'
                        onChange={handleOnChange}
                        value={selectedNews.description}
                        className='w-full h-20 p-2 border border-gray-300 rounded-md outline-none focus:border-[#5E0000]'
                        >
                        </textarea>

                        <InputElement
                        onChange={handleOnChange}
                        value={selectedNews.image}
                        type='text' name='image' />
                        <ButtonElement type="submit" text="tambahkan" style="secondary"/>
                    </form>

                </div>
                <Link to="/add-news">
                <IoIosCloseCircle
                className='absolute top-2 right-2 cursor-pointer text-3xl'/>   
                </Link>         
            </div>

        </div>
    </div>
  )
}

export default EditNewsPage