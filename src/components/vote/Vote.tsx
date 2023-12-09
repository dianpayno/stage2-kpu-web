import { useState, useRef} from "react"
import VoteBar from "./VoteBar"
import { paslonPresiden } from "../../data"
import PaslonCard from "../card/PaslonCard"
import ButtonElement from "../login/ButtonElement"
import {IoCloseCircle} from "react-icons/io5"
import PieChart from "./Pie"
import { useQuery, useMutation } from "react-query"
import { userApi } from "../../services/api/userapi"
import { useDataPaslon } from "../../services/context/listPaslonContex"


const Vote: React.FC = () => {
const [openModal, setOpenModal] = useState(true)
const [voteModal, setVoteModal] = useState(false)
const [vote, setVote] = useState(false)
const [voteCount, setVoteCount] = useState({})
const [dataPaslon] = useDataPaslon()
const radioRef = useRef<HTMLInputElement>(null)





 const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
   const {name, value} = e.target
   setVoteCount ({
     [name]:Number(value)
   })
 }

 const {data:resultCount, refetch:refetchVote} = useQuery('resultCount',async()=>{
  try{
   const token = localStorage.getItem('token')
   const headers = {
     "Authorization": `Bearer ${token}`
   }
   const response = await userApi.get('/count', {headers})
   return  response.data
  } catch(err){
    console.log(err)
  }
 })

 const {mutate:addVote } = useMutation(async(e:React.FormEvent)=>{
  try{
    e.preventDefault()
    const token = localStorage.getItem('token')
    const headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
    const response = await userApi.post('/vote', voteCount, {headers})
    return response.data
  }catch(err){
    console.log("ini error mutate addVote",err)
  }},{
    onSuccess:()=>{
      handleVote()  
      refetchVote()
    }
  })
  const getDataResult = resultCount?.data?.map((item:any)=>{
    return {
      ...item,
      jml_pemilih: item.jml_pemilih
  }})


  
  const sortedResult = getDataResult?.sort((a:any,b:any)=>{
    return b.jml_pemilih - a.jml_pemilih
  })

  console.log(sortedResult);

  const newData = resultCount?.data?.map((item:any)=>{
    return {
      ...item,
      nomer_urut: item.nomer_urut
    }
  })
   const sortedBanner = newData?.sort((a:any,b:any)=>{
    return a.nomer_urut - b.nomer_urut
   })

   console.log(sortedBanner);
   



 
 
 
  const handleVote = () => {
    setVote(true)
    setVoteModal(false)
  }



  return (
    <div className="w-full flex flex-col justify-center items-center">
         <p className="uppercase text-2xl font-bold text-[#5E0000]">info pemilu terupdate</p>
         {vote &&  <p className="uppercase text-xl font-bold text-[#5E0000]">terima kasih anda sudah memilih</p>}
        
         <div className="flex justify-around mt-3 items-center gap-3">
            <PieChart dataResult={sortedResult}/> 
            <div className="w-full">
                 { sortedResult?.map((item:any, index:number)=>{ return(<VoteBar key={index} dataPaslon={item}/>)})}       
            </div>
         </div>
         {
            voteModal &&(
         <div style={overlayModal} className="flex justify-center items-center ">
          <div className="modalVoteAnimate bg-[#F8F7F3] px-5 pt-6 pb-10 rounded-md relative">
          <IoCloseCircle className="text-4xl text-[#5E0000] absolute top-5 right-5 cursor-pointer" onClick={() => setVoteModal(false)} />
            <div className="flex justify-start flex-col pb-2 text-[#5E0000]">
                <p className="text-2xl font-bold capitalize">Satu suara untuk masa depan bangsa</p>
                <p className="text-sm mb-2">Silahkan klik vote untuk memilih</p>
            </div>
            <div  className="relative">
              <form onSubmit={addVote}>
                <div className=" flex justify-center items-center gap-1 mb-20">
                {sortedBanner.map((paslon:any, index:number) => {
                return (
                      <div key={index} className="flex gap-1">
                       
                        <PaslonCard data={paslon} result={true}/>
                        <input 
                       onChange={handleChange}
                        type="radio" name="paslonId" id={paslon.name} value={paslon.id}/>
                        <label htmlFor={paslon.name}>{paslon.name}
                        </label>
                      </div>
                    )})} </div>
                    <div className="px-48">
                      <ButtonElement type="submit" text="Vote" style="primary"/>
                    </div>
              </form>
            </div>
          </div>
         </div>
      
            )
         }
         {!vote &&<ButtonElement type="button" text="masukan suaramu" style="primary" onGetEvent={()=>setVoteModal(true)}/>}

         
          
    </div>
  )
}



export default Vote

export const overlayModal: React.CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: "900",
}