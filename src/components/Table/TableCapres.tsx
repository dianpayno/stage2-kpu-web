import {
    
    Avatar,
    IconButton,
   
  } from "@material-tailwind/react";

  const headcapres = ["No Urut", "Nama paslon", "visi & misi", "partai pengusung"];
type tablePropps = {
  dataPaslon?: any
}
   
const TableCapres = (props: tablePropps) => {
const {dataPaslon } = props
  return (
    <div className="flex justify-center items-center lg:px-20 mt-7">
    <table className="w-full table-auto text-left border border-1 border-[#5E0000] ">
        <thead className="bg-[#5E0000] text-white">
        <tr>
           { headcapres.map((head) => (
            <th key={head} className="cursor-pointer p-4 transition-colors hover:opacity-70">
                <p className="text-sm capitalize font-semibold leading-none ">{head}</p>
            </th>
          ))} 
        </tr>
        </thead>
    <tbody>
      
     
      { dataPaslon?.map(
        (item:any,index:  number) => {
          const isLast = index === dataPaslon.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={item.id} className="transition-colors hover:bg-blue-gray-50/50 text-black">
               <td className={classes}>
                  <IconButton variant="text">
                   {item.nomor_urut}
                  </IconButton>  
              </td>

              <td className={classes}>
                <div className="flex items-center gap-5 relative">
                  <img src={item.image} alt={item.nama}
                  className="w-[70px] h-[70px] object-cover rounded-full"/>
                  <div className="flex flex-col min-w-max">
                    <p className="capitalize text-sm font-bold">{item.nama}</p>
                   
                  </div>
                </div>
              </td>


              <td className={classes}>
                  <p className="capitalize text-sm text-start font-semibold">
                        {item.visi_misi}
                  </p>
              </td>

              <td className={classes}>
                <div>
                 
                </div>
                      <ul
                      className="text-xs font-base capitalize">
                        {
                          item.partai_pengusung.map((item:any,index:number)=>{
                            return (
                              <div className="flex items-center gap-2 mt-1">
                                <Avatar size="xs" src={item.partai_data.image_partai}/>
                                <li key={index}>{item.partai_data.nama_partai}</li>

                              </div>
                            )
                          })}
                      </ul>
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

export default TableCapres