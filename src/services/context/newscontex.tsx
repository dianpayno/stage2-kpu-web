import { createContext, useContext, useState, useEffect } from "react";
import { userApi} from "../api/userapi";
import { useQuery } from "react-query";


export const newsContext = createContext<any>([]);

export const useNews = () => {
    return useContext(newsContext);
}


export const NewsContextProvider = ({children}:any) => {
    const [news, setNews] = useState<any>([])
    const {data:dataNews} = useQuery('dataNews', async()=>{
        try{
            const token = localStorage.getItem("token")
            const headers = {
                "Authorization": `Bearer ${token}`
            }
            const response = await userApi.get("/pemilu-news", {headers})
            return response.data
        }catch(err){
            console.log("ini error",err)
        }
    })

    useEffect(() => {
        if(dataNews ){
            setNews(dataNews?.data)
            
        }
    }, [dataNews]);

    return (
        <newsContext.Provider value={[news]}>
            {children}
        </newsContext.Provider>
    )
}
