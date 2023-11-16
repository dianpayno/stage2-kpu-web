import { paslonPresiden } from "../../data"
import Table from "../Table/Table"
import PaslonCard from "../card/PaslonCard"
import { useEffect } from "react"


const DashboardAdminLayout = () => {
  useEffect(() => {
   document.title = "Dashboard Admin | KPU Dumbways"
  }, [])
  return (
    <div>
        <div className="w-full flex items-center justify-center mt-28">
            <p className="text-center uppercase text-2xl font-bold">jumlah suara masing-masing kandidat</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-4 items-center mt-8 lg:px-20">
           {
               paslonPresiden.map((paslon, index) => (
                   <PaslonCard key={index} paslonPresiden={paslon}/>
               ))
           } 
        </div>

        <div className="flex justify-center item center mt-36">
          <Table/>
        </div>

    </div>
  )
}

export default DashboardAdminLayout