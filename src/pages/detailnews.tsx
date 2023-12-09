import Navbarmenu from "../components/navbar/Navbar"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams} from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { userApi } from "../services/api/userapi";
import moment from "moment"



const Detailnews = () => {

  const id = Number(useParams().id);
  const [selectedNews, setSelectedNews]= useState<any>({})

  const {data:dataNews} = useQuery('dataNews', async()=>{
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

  useEffect(() =>  () => {
    const getNews = dataNews?.data.find((item: any) => item.id === id);
    setSelectedNews(getNews)
 
  }, [id]);

 useEffect(() => {
  const text = "Berita | "
   document.title = text + selectedNews.title
 },[selectedNews.title])

 const date = moment(selectedNews.posted_at).locale("id").format("dddd, DD MMMM YYYY")

 


  return (
    <div>
        <Navbarmenu/>
        <div className="mt-14 w-full flex justify-center items-center relative">
            <div className="w-[60%] bg-white pt-10 pb-5 flex flex-col">
                <Link to={"/"}>
                <p className="font-semibold capitalize flex items-center gap-2 ml-3">
                <FaArrowAltCircleLeft/><span>beranda</span>
                </p>
                </Link>
                <div className="flex justify-center items-center">
                
                <p className="uppercase text-center font-semibold text-md ">berita hari ini</p> 
                </div>

                <div className="flex flex-col justify-center items-center mt-3 px-4">
                
                <p className="text-2xl uppercase font-bold py-3 text-center">{selectedNews.title}</p>
                <p className="text-sm capitalize">{selectedNews.author}</p>
                <p className="text-sm capitalize">{date}</p>
                <img className="w-[90%] h-[300px] object-cover mt-5" src={selectedNews.image} alt="" />
                <p className="text-sm mt-5 px-7 text-justify">{selectedNews.description}</p>
                </div>
            </div>
           
        </div>
        <Footer />
    </div>
  )
}

export default Detailnews