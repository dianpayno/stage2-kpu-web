import BannerHome from "../components/Banner/BannerHome"
import Jumbotron from "../components/jumbotron/Jumbotron"
import CardLayout from "../components/layout/TrendingLayout"
import Navbarmenu from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { useEffect, useState } from "react"
import LoadingPage from "../components/Loading/LoadingPage"

const Homepage = () => {
  const [isLoading, setISloading]= useState<boolean>(true)
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setISloading(false)
    },1000)
    document.title = "KPU - Homepage"
    return () => clearTimeout(timeOut)
  },[])

  return (
    <div>
     
       
        {
        isLoading?<LoadingPage/>:(
          <>
          <Navbarmenu/>
          <Jumbotron/>
          <CardLayout/>
          <BannerHome/>
          <Footer/>
          </>
        )
      }
       
    </div>
  )
}

export default Homepage