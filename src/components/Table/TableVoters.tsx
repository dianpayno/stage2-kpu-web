
  import {
    
    Typography,
    Button,
    CardBody,
    Avatar,
    IconButton,
   
  } from "@material-tailwind/react";
 import {useQuery} from "react-query"
 import {userApi} from "../../services/api/userapi"


const TABLE_HEAD = ["Nomor", "Nama", "alamat", "jenis kelamin", "pilihan"];
  
const Table = () => {
 const {data:dataVoters} = useQuery('dataVoters',async()=>{
   try{
    const token = localStorage.getItem('token')
    const headers = {
      "Authorization": `Bearer ${token}`
    }
    const response = await userApi.get('/voters', {headers})
    return  response.data
   } catch(err){
     console.log(err)
   }
 })

 console.log(dataVoters);
 


  return (
    <div className="container px-10 mb-7 shadow bg-[ #F8F7F3] rounded">
    
     
          <div className="pt-9">
            <p className="uppercase text-xl font-bold">daftar nama pemilih pemilu presiden dumbways.id 2024-2029</p>
            <p className="text-xs font-bold capitalize">total suara terkumpul : {dataVoters?.data?.length} suara</p> 
          </div> 
      

        
    
    
        <table className="mt-4 w-full min-w-max table-auto text-left">

          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="cursor-pointer text-white border-y  bg-[#5E0000] p-4">
                  <p className="flex text-sm items-center capitalize font-semibold justify-center gap-2 leading-none">{head}</p>
                </th>
              ))}
            </tr>
          </thead>


          <tbody>
            {dataVoters?.data.map(
              (item: any, index: number) => {
                const isLast = index === dataVoters?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={index} className="transition-colors hover:bg-blue-gray-50/50 text-black">
                     <td className={classes}>
                        <IconButton variant="text">
                         {index+1}
                        </IconButton>  
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais"
                         alt={item.nama} size="sm" />
                        <div className="flex flex-col">
                          <p
                            className="text-sm font-bold capitalize"
                          >{item.nama}</p>
                         <p className="text-xs text-gray-500 capitalize">{item.role}</p>
                        </div>
                      </div>
                    </td>


                    <td className={classes}>
                        <p className="capitalize text-sm text-center font-base">
                          {item.alamat}
                        </p>
                    </td>

                    <td className={classes}>
                      <p className="capitalize text-sm text-center font-base">
                        {item.jenis_kelamin}
                      </p>
                    </td>

                    <td className={classes}>
                      <p className={`capitalize text-center text-sm
                      ${item.paslon_name === "prabowo subianto" ? "text-[#FFCD56]" :
                        item.paslon_name === "anis baswedan" ? "text-[#36A2EB]":"text-[#FF6384]"
                    }
                      font-bold`}>
                        {item.paslon_name}
                      </p>
                    </td>
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>

      
   
    </div>
  )
}

export default Table