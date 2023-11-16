import Navbarmenu from "../components/navbar/Navbar"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams} from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useState, useEffect } from "react";
import { dataTrending } from "../data";


const Detailnews = () => {
  const [show, setShow] = useState<boolean>(false)
  const id = Number(useParams().id);
  const [selectedNews, setSelectedNews]= useState<any>({})

  useEffect(() =>  () => {
 
    const getNews = dataTrending.find((item) => item.id === id);
    setSelectedNews(getNews)
 
  }, [id]);

 useEffect(() => {
  const text = "Berita | "
   document.title = text + selectedNews.title
 },[selectedNews.title])



  useEffect (() => {
    const showHandling = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 790) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', showHandling)
  }, [])


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
                <p className="text-sm capitalize">{selectedNews.tanggal}</p>
                <img className="w-[90%] h-[300px] object-cover mt-5" src={selectedNews.image} alt="" />
                <p className="text-sm mt-5 px-7 text-justify">{selectedNews.text}</p>
                </div>
            </div>
            <img className={`${show ? 'hidden' : null} fixed w-[250px]  bottom-0 left-[45px] z-[-10]`} src="../../public/3d-female-character-reading-book.png" alt="kpu"/>
            {/* <img className="fixed w-[250px]  bottom-0 right-[50px] z-[-10] transform scale-x-[-1]" src="../../public/3d-girl-character-reading-book_23-2149086093-removebg-preview.png" alt="kpu"/> */}
        </div>
        <Footer />
    </div>
  )
}

export default Detailnews