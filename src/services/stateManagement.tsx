import axios from "axios"
import {useState, useEffect, useContext} from "react"

const [data, setData] = useState([])

const getData = async()=>{
const response = await axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
 console.log(response)

}

useEffect(()=>{
  getData()
},[])