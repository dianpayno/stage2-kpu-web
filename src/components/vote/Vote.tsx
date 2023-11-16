import { useState } from "react"
import VoteBar from "./VoteBar"
import { paslonPresiden } from "../../data"
import PaslonCard from "../card/PaslonCard"
import ButtonElement from "../login/ButtonElement"
import {IoCloseCircle} from "react-icons/io5"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"


const Vote: React.FC = () => {
const [openModal, setOpenModal] = useState(true)
const [voteModal, setVoteModal] = useState(false)

ChartJS.register(ArcElement, Tooltip, Legend);
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

const data = {
  labels: ["Anis", "Prabowo", "Ganjar"],
  datasets: [
    {
      data: [paslonPresiden[0].akumulasi, paslonPresiden[1].akumulasi, paslonPresiden[2].akumulasi],
      backgroundColor: ['#FF6384', '#FFCD56', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#FFCD56', '#36A2EB'],
    
    }
  ],
 
}


  return (
    <div className="w-full flex flex-col justify-center items-center">
         <p className="uppercase text-2xl mb-3 font-bold text-[#5E0000]">info pemilu terupdate</p>
         <div className="flex justify-around items-center gap-3">
            
         <div className="w-full">
          <Pie data={data} />
          </div>

            <div className="w-full">
                 {  
                    sortedData.map((item)=>{
                        return (
                            <VoteBar key={item.id} dataPaslon={item}/>
                        )
                    })
                 }       
                
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
                {
                    paslonPresiden.map((paslon, index) => (
                      <div className="flex flex-col gap-16">
                        <PaslonCard key={index} paslonPresiden={paslon} result={openModal}/>
                        <ButtonElement  type="button" text="Vote" style="primary"/>
                      </div>
                      
                    ))
                }
            </div>
          </div>
         </div>
            )
         }
         <ButtonElement type="button" text="masukan suaramu" style="primary" onGetEvent={()=>setVoteModal(true)}/>
    </div>
  )
}



export default Vote