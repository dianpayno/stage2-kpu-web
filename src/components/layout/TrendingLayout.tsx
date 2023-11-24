import BigCard from "../card/Newscard"
import { dataTrending } from "../../data"
import {useState, useEffect} from "react"
import CountDown from "../Banner/CountDown"
import { countDownDuration } from "../../data"




const CardLayout = () => {
    const [scrolled500, setScrolled500] = useState(false)
    const [scrolled800, setScrolled800]= useState(false)
    
    
    useEffect(() => {
        const handleScroll = () => {

            const position = window.scrollY
            if (position > 500) {
                setScrolled500(true)
            } else {
                setScrolled500(false)
            }

            if (position > 1100) {
                setScrolled800(true)
            } else {
                setScrolled800(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    

    const trendingBarStyle:any ={
        top:scrolled500 ? "61px" : "0px",
        position:scrolled500 ? "fixed" : null ,
        zIndex:scrolled500 ? "1" : null,
        backgroundColor:scrolled500 ? "white" : "transparent",
        shadow:scrolled500 ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
        // display:scrolled800 ? "none" : scrolled500 ? "flex" : null,

    }
    
  return (
    <div>

    <div className=" bg-gradient-to-r from-[#fff] from-30% to-[#7506068A] pt-5 pb-7 rounded-t-xl">
        <div style={trendingBarStyle} className="w-full flex justify-between items-center mb-10 px-14 py-3"> 
            <div>
                <div className={`${scrolled800?"hidden": scrolled500?"flex items-center":null}`}>
                <p className="text-2xl font-bold capitalize text-[#5C0303]">trending minggu ini</p>
                </div>
            </div>
           
            <div className="flex items-center">
                <div className="flex flex-col items-center">
                <span className="uppercase text-[#5C0303] text-sm font-bold me-4">menuju pemilu serentak tahun 2024</span>
                <span className="capitalize text-[#5C0303] text-xs font-bold me-4">ingat..!! pemilu sarana intergrasi bangsa</span>
                </div>
            
            <CountDown duration={countDownDuration}/>
            </div>
        </div>
    <div className="flex justify-around">
            <div className="w-[85%] grid grid-cols-3 gap-4 mb-7"> 
            {
                dataTrending.map((item, index) => (
                
                    <BigCard key={item.id} dataTrending={item} index={index}/>
                    
                ))
            }
            </div>      
    </div>
    </div>
    </div>
   
    
  )
}

export default CardLayout