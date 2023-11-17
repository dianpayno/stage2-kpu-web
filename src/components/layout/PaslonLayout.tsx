import TablePalon from "../Table/TableCapres"
import { useState } from "react";
import ButtonElement from "../login/ButtonElement";


const PaslonLayout = () => {
    const [hoveredItem, setHoveredItem] = useState(false);
  return (
    <div>
        <div className="flex justify-center items-center mt-20">
        <div className="container px-4 pb-6 mb-20 shadow bg-[#F8F7F3] rounded">
        <div className="pt-9 flex items-center justify-between">
        <p className="uppercase text-2xl font-bold text-[#5E0000]">daftar list peserta pemilu 2024-2029</p>
        {
            hoveredItem?<ButtonElement text="add paslon" style="secondary" />:<ButtonElement text="add partai" style="secondary"/>
        }
        
        
        </div> 

        <div className="flex justify-start gap-3 mt-2 ">
            <button className={`${hoveredItem? "bg-[#5E0000] text-white" :null} text-[#5E0000]  py-2 px-3 rounded-t capitalize text-sm font-semibold`}
        onClick={() => setHoveredItem(true)}
        >capres</button>
        <button className={`${!hoveredItem? "bg-[#5E0000] text-white" :null} text-[#5E0000]  py-2 px-3 rounded-t capitalize text-sm font-semibold`}
        onClick={() => setHoveredItem(false)}
      
        >partai</button>
 
        </div>
          <TablePalon hoveredItem={hoveredItem}/>
          </div>
         
        </div>
    </div>
  )
}

export default PaslonLayout