
import Table from "../Table/TableVoters"
import PaslonCard from "../card/PaslonCard"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { userApi } from "../../services/api/userapi"



const DashboardAdminLayout = () => {

  const {data:resultCount} = useQuery('resultCount',async()=>{
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
  
   const newData = resultCount?.data?.map((item:any)=>{
    return {
      ...item,
      nomer_urut: item.nomer_urut
    }
  })
   const sortedBanner = newData?.sort((a:any,b:any)=>{
    return a.nomer_urut - b.nomer_urut
   })

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
               sortedBanner?.map((paslon:any, index:any) => (
                   <PaslonCard key={index} data={paslon} result={false}/>
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