
import Footer from "../components/footer/Footer"
import PaslonLayout from "../components/layout/PaslonLayout"
import Navbarmenu from "../components/navbar/Navbar"


const PaslonPage = () => {
  return (
    <div>
        <Navbarmenu/>
        <PaslonLayout/>
        <div className="mt-10">

        <Footer/>
        </div>
      
    </div>
  )
}

export default PaslonPage