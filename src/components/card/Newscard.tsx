import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import {useState, useEffect} from "react";
import { useContext} from "react";
import { UserContext } from "../../services/context/userContext";
import {  useQuery } from "react-query";
import { userApi } from "../../services/api/userapi";

type Cardprops = {
    data:any
    deleteNews?:any
    index: number
  
}

const NewsCard = (props:Cardprops) => {
    const { index, data, deleteNews} = props
    const cardKondisi = index == 0 || index == 3;
    const bigCard = ` col-span-2 bg-cover bg-center`;
    const smallCrad=`col-span-1 `;
    // const longcard = `col-span-3 h-[300px]`;
    const text1 = data.title;
    const date = moment(data.posted_at).locale("id").format("dddd, DD MMMM YYYY");
    const [isOpen, setIsOpen] = useState(false)
    const [state] = useContext(UserContext)!
    const location = useLocation();

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleClick = () => {
        deleteNews(data.id);
        setIsOpen(!isOpen);
    }



  return (
    
    <>
    <div style={{backgroundImage: `url(${cardKondisi  ? data.image : null})`}}
    className={`bg-white h-[250px] ${ cardKondisi ? bigCard : smallCrad} shadow-lg overflow-hidden
     relative transition ease-in-out duration-150 hover:scale-95 hover:cursor-pointer rounded-md
    `}>  
    {
        cardKondisi&& (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black from-3% to-transparent "></div>
        )
    }
    {
        !cardKondisi&& (
            <div>
                <img className="w-full object-cover object-center h-[150px]"  
                src={data.image} alt="ini foto"/>
            </div>
        )
    }
    <div className={`${cardKondisi ? 'text-white' : 'text-black'} absolute top-[65%] left-2 px-2`}>
        <Link to={`/detailnews/${data.id}`}>
        <span className="uppercase text-white font-semibold bg-red-500 px-3 py-2 rounded-md">
        {date}
        </span>
        <p className={`text-lg font-bold uppercase mt-2`}>
        {
        cardKondisi ? text1 : text1.substring(0, 25)+"..."
        }
        </p>
        </Link>
        <div className="flex justify-start gap-3">
        <p className="text-xs capitalize">
         penulis berita : {data.author}
        </p>
        {
            location.pathname ==="/"? null : state.user.role === "admin" &&  (
        <>
        <Link to={`/edit-news/${data.id}`}>
        <p className="text-xs capitalize text-blue-600">
         edit berita
        </p>
        </Link>
        <p 
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs capitalize text-red-600">
         delete berita
        </p>
        </>        
                
            )
        }
        </div>
    </div>
    
    </div>
    {
        isOpen && (
            
        <div className='fixed flex justify-center items-center
        top-0 z-50 bottom-0 right-0 left-0 bg-black bg-opacity-75'>
            <div className="fixed bg-[#F8F7F3] p-5 rounded-md text-[#5E0000]">
                <p className="text-sm font-bold capitalize">are you sure want to delete this?</p>
                <p className="text-xs font-semibold capitalize text-center">this action can not be undone</p>
                <div className="flex justify-center gap-7 mt-5">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-xs font-bold capitalize bg-blue-600 rounded-md px-3 py-2 text-white" 
                >cancel</button>
                <button
                onClick={handleClick}
                 className="text-xs font-bold capitalize bg-red-600 rounded-md px-5 py-2 text-white" 
                >yes</button>
                
                </div>
            </div>
        </div>
        )
    }

   
   </>
  )
}

export default NewsCard