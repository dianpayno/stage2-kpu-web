

import { paslonPresiden } from "../../data"
import VoteBar from "./VoteBar"
import VoteModal from "./VoteModal"

const Vote: React.FC = () => {

const newData = paslonPresiden.map((item)=>{
  return {
    ...item,
    id: item.id
  }
})
const sortedData = newData.sort((a,b)=>{
  return b.vote - a.vote
})

  return (
    <div className="w-full flex flex-col justify-center items-center">
         <p className="uppercase text-2xl mb-3 font-bold text-[#5E0000]">info pemilu terupdate</p>
         <div className="flex justify-around items-center gap-3">
            <div>
                <img src="https://img.freepik.com/free-photo/still-life-with-scales-justice_23-2149776027.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=sph" alt="presiden" className="w-[200px]"/>
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
         <VoteModal />
    </div>
  )
}

export default Vote