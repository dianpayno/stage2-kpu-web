import {
    Avatar,
    IconButton,
   
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
 type tablePropps = {
     dataPartai: any;
 }


const headpartai= ["no", "logo", "nama partai & ketua umum", "visi & misi", "alamat", ""];
const TablePartai = (props: tablePropps) => {
  const {dataPartai} = props
  return (
    <div className="flex justify-center items-center lg:px-20 mt-7">
        <table className="w-full table-auto text-left border border-1 border-[#5E0000] ">
        <thead className="bg-[#5E0000] text-white">
        <tr>
           {
            headpartai.map((head) => (
              <th key={head} className="cursor-pointer p-4 transition-colors hover:opacity-70">
                  <p className="text-center text-sm capitalize font-semibold leading-none ">{head}</p>
              </th>
             
            ))
            }
        </tr>
        </thead>
        <tbody>
          { dataPartai?.map(
        (item: any,index: number) => {
          const isLast = index === dataPartai?.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={item.id} className="transition-colors hover:bg-blue-gray-50/50 text-black">
               <td className={classes}>
                  <IconButton variant="text">
                   {index+1}
                  </IconButton>  
              </td>

              <td className={classes}>
                <div className="flex items-center gap-3 relative min-w-max">
                  <Avatar src={item.image} alt={item.nama} size="md" />
                </div>
              </td>

              <td className={classes}>
                  <div className="flex flex-col">
                    <p className="uppercase text-sm font-bold">{item.nama}</p>
                    <p className="capitalize text-sm font-bold text-gray-700">{item.ketua_umum}</p>
                  </div>
              </td>


              <td className={classes}>
                  <p className="capitalize text-sm text-start font-semibold">
                        {item.visi_misi}
                  </p>
              </td>

              <td className={classes}>
              <div className="flex items-center justify-start capitalize relative">
               <p className="capitalize text-xs font-base">{item.alamat}</p>
              </div>             
              </td> 
                <td className={classes}>
                  <div className="flex justify-start gap-3">
                  <Link to={""}>
                  <p className="text-xs capitalize text-blue-600">
                  edit
                  </p>
                  </Link>
                  <p 
                  className="text-xs capitalize text-red-600">
                  delete
                  </p>
                  </div>
              
                </td>
            </tr>

          );
        },
      )}

        </tbody>
     </table>
       {/* <div>
       <Typography variant="small" color="blue-gray" className="font-normal mt-3">Page {currentPage} of {totalPage}</Typography>
        <div className="flex gap-2 justify-end pb-4">
        {1 === currentPage ?null:<ButtonElement type="button" style="secondary"  text="Previous" onGetEvent={prevPage}/>}
        {currentPage === totalPage?null:<ButtonElement type="button" style="secondary"  text="Next" onGetEvent={nextPage}/>}
       
       
        </div>
       </div> */}

    </div>
  )
}

export default TablePartai