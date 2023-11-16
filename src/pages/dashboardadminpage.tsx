import Footer from "../components/footer/Footer"
import DashboardAdminLayout from "../components/layout/DashboardAdminLayout"
import Navbarmenu from "../components/navbar/Navbar"

const DashboardAdmin = () => {
  return (
    <div>
      <Navbarmenu/>
      <DashboardAdminLayout/>
      <Footer/>
    </div>
  )
}

export default DashboardAdmin