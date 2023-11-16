import BannerHome from "../components/Banner/BannerHome"
import Jumbotron from "../components/jumbotron/Jumbotron"
import CardLayout from "../components/layout/TrendingLayout"
import Navbarmenu from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { useEffect } from "react"

const Homepage = () => {
  useEffect(()=>{
    document.title = "KPU - Homepage"
  })
 
  return (
    <div>
        <Navbarmenu/>
        <Jumbotron/>
        <CardLayout/>
        <BannerHome/>
        <Footer/>
    </div>
  )
}

export default Homepage