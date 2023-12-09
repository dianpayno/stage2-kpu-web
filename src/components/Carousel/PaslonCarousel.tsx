import { Avatar } from '@material-tailwind/react'
import { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useQuery } from 'react-query';
import { userApi } from "../../services/api/userapi";



    

const PaslonCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide]= useState(1)
    const [onhover, setOnhover] = useState(false)

     
   
    const { data: listPaslon, isLoading } = useQuery("listPaslon", async () =>
    {
        try{
            const token = localStorage.getItem("token")
            const headers = {
                "Authorization": `Bearer ${token}`
            }
            const response = await userApi.get("/paslon", {headers})
            return response.data
        }catch(err){
            console.log("erronya adalah ", err)
        }
})
const sortedDataPaslon = listPaslon?.data.sort((a:any, b:any)=>{
    return a.nomor_urut - b.nomor_urut
})

const slidePerPage = 1
const lastIndex = currentSlide * slidePerPage
const firstIndex = lastIndex - slidePerPage
const listPaslonSlice = sortedDataPaslon?.slice(firstIndex, lastIndex)
const totalSlide = Math.ceil(sortedDataPaslon?.length / slidePerPage)
    const nextSlide = () => {
        if (currentSlide < totalSlide) {
            setCurrentSlide((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 1) {
            setCurrentSlide((prev) => prev - 1)
        }
    }
    return (
      <div>
        
       <div className='flex justify-center flex-col items-center'>
        <p className='text-[#F8F7F3] text-xl font-bold uppercase mb-5'>info paslon</p>
         <div className='w-[50%]'>
         
         <div className='relative'
         onMouseEnter={() => setOnhover(true)}
         onMouseLeave={() => setOnhover(false)}>
          { listPaslonSlice?.map((item:any) => {
              return(
              <div key={item.id} 
              className='sm:w-full modalVoteAnimate lg:grid lg:grid-cols-3  items-center bg-[#F8F7F3] lg:px-5 py-7 mb-2 rounded'>
              <div className='lg:col-span-1 ps-6'>
                  <img className='lg:w-[120px] lg:h-[120px] rounded-full object-cover ' src={item.image} alt='image upload' />
                  
              </div> 
              <div className='lg:col-span-2 text-[#5E0000]'>
                      <p className='capitalize text-sm font-semibold'>no urut : {item.nomor_urut}</p>
                      <p className='uppercase text-xl font-bold'>{item.nama}</p>
                      <p className='text-xs capitalize'>capres dan cawapres DUMBWAYS.ID 2024-2029</p>
                      <p className='uppercase text-xs font-bold'>{item.visi_misi}</p>
                      
                      <p className='capitalize text-xs font-semibold mt-3'>partai pengusung :</p>
                      <div className='flex justify-start'>
                        {
                            item.partai_pengusung.map((item:any,index:number) => {
                                return (
                                    <Avatar className='me-1' key={index} src={item.partai_data.image_partai} alt={item.partai_data.nama_partai} size="xs"/>
                                )
                                
                            })
                        }
                        
                          
                    
                          
                      </div>
              </div>
          </div>
              )})}
           {
            onhover && (
                <>
                {
                    currentSlide===1?null: 
                    <BsArrowLeftSquareFill onClick={prevSlide} 
                    className={`
                    
                    animateCarouselLeft
                    absolute -left-2 top-1/2  z-10
                    text-3xl text-white `}/>
                }
                {
                    currentSlide===totalSlide?null:<BsArrowRightSquareFill 
                    onClick={nextSlide} 
                    className='
                    animateCarouselRight
                    absolute -right-2 top-1/2  z-10
                    text-3xl text-white shadow-xl'/>
                }
                </>
            )
                
           }
        </div>
         
         </div>
       </div>


       
          
          
         
      </div>
    )
  }
  
  export default PaslonCarousel


