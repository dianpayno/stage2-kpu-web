import {
    
    Typography,
    Avatar,
    IconButton,
   
  } from "@material-tailwind/react";
  import { listPartai, paslonPresiden } from "../../data";
  import { useState } from "react";
import ButtonElement from "../login/ButtonElement";

type tablePropps = {
  hoveredItem: boolean;
}


  const headcapres = ["No", "Nama", "visi & misi", "partai pengusung"];
  const headpartai= ["no", "logo", "nama partai & ketum", "visi & misi", "alamat"];
   
const TablePalon = (props: tablePropps) => {
const {hoveredItem} = props

const  [currentPage, setCurrentPage] = useState(1);




const rowPerPage = 3;
const lastIndex = currentPage * rowPerPage;
const firstIndex = lastIndex - rowPerPage;
const listPartaiSlice = listPartai.slice(firstIndex, lastIndex);

const totalPage = Math.ceil(listPartai.length / rowPerPage);

const nextPage = () => {
  if (currentPage < totalPage) {
    setCurrentPage((prev) => prev + 1);
  }
}
const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
  }
}


  return (
    <div>
    <table className="w-full table-auto text-left border border-1 border-[#5E0000] ">
        <thead className="bg-[#5E0000] text-white">
        <tr>
            {
            hoveredItem?headcapres.map((head) => (
            <th key={head} className="cursor-pointer p-4 transition-colors hover:opacity-70">
                <p className="text-center text-sm capitalize font-semibold leading-none ">{head}</p>
            </th>
            )):
            headpartai.map((head) => (
              <th key={head} className="cursor-pointer p-4 transition-colors hover:opacity-70">
                  <p className="text-center text-sm capitalize font-semibold leading-none ">{head}</p>
              </th>
            ))
            }
        </tr>
        </thead>

    <div>
      
    </div>
    <tbody>
      {
      hoveredItem?
      paslonPresiden.map(
        (item,index) => {
          const isLast = index === paslonPresiden.length - 1;
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
                <div className="flex items-center gap-5 relative">
                  <Avatar src={item.image} alt={item.nama} size="md" />
                  <Avatar className="absolute top-2 -left-5" 
                  src={item.image} alt={item.nama} size="md" />
                  <div className="flex flex-col min-w-max">
                    <p className="capitalize text-sm font-bold">{item.nama}</p>
                    <p className="capitalize text-sm text-gray-600">{item.wakil}</p>
                  </div>
                </div>
              </td>


              <td className={classes}>
                  <p className="capitalize text-sm text-start font-semibold">
                        {item.visi}
                  </p>
              </td>

              <td className={classes}>
              <div className="flex items-center justify-center">
                {
                  item.partai.map((item,index) => {
                    return (
                        
                      <Avatar key={index} src={item} alt={item} size="sm"/>
                      
                    )
                  })
                }
               

                </div>
              </td>

            
             
            </tr>
          );
        },
      ): listPartaiSlice.map(
        (item,index) => {
          const isLast = index === paslonPresiden.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";

          return (
            <tr key={item.id} className="transition-colors hover:bg-blue-gray-50/50 text-black">
               <td className={classes}>
                  <IconButton variant="text">
                   {item.id}
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
                    <p className="capitalize text-sm font-bold text-gray-700">{item.ketum}</p>
                  </div>
              </td>


              <td className={classes}>
                  <p className="capitalize text-sm text-start font-semibold">
                        {item.visi}
                  </p>
              </td>

              <td className={classes}>
              <div className="flex items-center justify-start capitalize relative">
               <p className="capitalize text-xs font-base">{item.alamat}</p>
              </div>
                                
              </td> 
            </tr>

          );
        },
      )}
    
    
    
    
        </tbody>
     </table>

       {!hoveredItem &&
       <div>
       <Typography variant="small" color="blue-gray" className="font-normal mt-3">Page {currentPage} of {totalPage}</Typography>
        <div className="flex gap-2 justify-end pb-4">
        {1 === currentPage ?null:<ButtonElement type="button" style="secondary"  text="Previous" onGetEvent={prevPage}/>}
        {currentPage === totalPage?null:<ButtonElement type="button" style="secondary"  text="Next" onGetEvent={nextPage}/>}
       
       
        </div>
       </div>
}


    </div>
  )
}

export default TablePalon