import { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { userApi } from "../../services/api/userapi";


export const ListPaslonContex = createContext<any[]>([]);
type Props = {
    children: React.ReactNode;
}

export const useDataPaslon = () => {
    return useContext(ListPaslonContex)
}

export const ListPaslonContextProvider = ({ children }: Props) => {
    const [dataPaslon, setDataPaslon] = useState<any[]>([]);

    const {data:listPaslon} = useQuery('listpaslon',async()=>{
        try{
          const token = localStorage.getItem('token')
          const headers = {
            'Authorization': `Bearer ${token}`
          }
          const response = await userApi.get('/paslon', {headers})
          return response.data
        }catch(err){
          console.log(err)
        }
      } )

      useEffect (()=>{
          if(listPaslon){
              setDataPaslon(listPaslon?.data)
          }
      },[listPaslon])

    return (
        <ListPaslonContex.Provider value={[dataPaslon]}>
            {children}
        </ListPaslonContex.Provider>
    )
    
}



