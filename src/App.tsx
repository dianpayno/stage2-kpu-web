import Homepage from './pages/homepage'
import Detailnews from './pages/detailnews'
import VotingPage from './pages/votingpage'
import PaslonPage from './pages/paslonpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {PrivateRoute, PrivateRouteAdminOnly} from './services/privateRoute'
import DashboardAdmin from './pages/dashboardadminpage' 
import AddNews from './pages/addnewspage'


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detailnews/:id" element={<Detailnews />} />
        <Route path="/addnews" element={<AddNews />} />

        <Route element={<PrivateRoute />}>
        <Route path="/paslon" element={<PaslonPage />} />
        <Route path="/voting" element={<VotingPage />} />

            <Route element={<PrivateRouteAdminOnly />}>
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            </Route>

         </Route> 
      </Routes>
    </Router>
    </>
  )
}

export default App
