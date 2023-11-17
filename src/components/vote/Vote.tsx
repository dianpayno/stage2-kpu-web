import { useState} from "react"
import VoteBar from "./VoteBar"
import { paslonPresiden } from "../../data"
import PaslonCard from "../card/PaslonCard"
import ButtonElement from "../login/ButtonElement"
import {IoCloseCircle} from "react-icons/io5"
import PieChart from "./Pie"




const Vote: React.FC = () => {
const [openModal, setOpenModal] = useState(true)
const [voteModal, setVoteModal] = useState(false)
const [vote, setVote] = useState(false)


  const handleVote = () => {
    setVote(true)
    setVoteModal(false)
  }

const newData = paslonPresiden.map((item)=>{
  return {
    ...item,
    id: item.id
  }
})
const sortedData = newData.sort((a,b)=>{
  return b.vote - a.vote
})

const overlayModal: React.CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: "900",
}



  return (
    <div className="w-full flex flex-col justify-center items-center">
         <p className="uppercase text-2xl font-bold text-[#5E0000]">info pemilu terupdate</p>
         {vote &&  <p className="uppercase text-xl font-bold text-[#5E0000]">terima kasih anda sudah memilih</p>}
        
         <div className="flex justify-around mt-3 items-center gap-3">
            <PieChart/> 
            <div className="w-full">
                 { sortedData.map((item)=>{ return(<VoteBar key={item.id} dataPaslon={item}/>)})}       
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
            <div  className="grid lg:grid-cols-3 gap-4 items-center lg:px-12 relative">
                {paslonPresiden.map((paslon, index) => (
                      <div key={index} className="flex flex-col gap-16">
                        <PaslonCard  paslonPresiden={paslon} result={openModal}/>
                        <ButtonElement  onGetEvent={handleVote}  type="button" text="Vote" style="primary"/>
                      </div>
                    ))}
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