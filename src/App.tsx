import Homepage from './pages/homepage'
import Detailnews from './pages/detailnews'
import VotingPage from './pages/votingpage'
import PaslonPage from './pages/paslonpage'
import { Routes, Route } from 'react-router-dom'
import {PrivateRoute, PrivateRouteAdminOnly} from './services/privateRoute'
import DashboardAdmin from './pages/dashboardadminpage' 
import AddNews from './pages/addnewspage'
import { useContext, useEffect,useState } from 'react'
import { UserContext } from './services/context/userContext'
import { jwtDecode } from 'jwt-decode'
import { setAuthToken,userApi } from './services/api/userapi'
import AddPartai from './pages/addpartai'
import AddPaslon from './pages/addpaslon'
import EditNewsPage from './pages/editnewspage'


function App() {
  const[state, dispatch] = useContext(UserContext)!
  const[isLoading, setIsLoading] = useState(false)
const token = localStorage.getItem('token')
console.log(token);


useEffect(() => {
  if(token)
  {setAuthToken(token)
  saveDataToken(token)
 }else{
  setIsLoading(false)
 }
  
},[])

console.log(state);

const saveDataToken = (token:string)=>{
  const payload = jwtDecode(token)
  payload.token = token
  dispatch({
    type: 'LOGIN_SUCCES',
    payload
  })
}

  return (
    <>
    {
      isLoading ? <h1>Loading...</h1> : 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detailnews/:id" element={<Detailnews />} />
        <Route path="/edit-news/:id" element={<EditNewsPage />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/add-partai" element={<AddPartai />} />
       <Route path="/add-paslon" element={<AddPaslon />} />
        <Route path="/voting" element={<VotingPage />} />

           
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
           
       
      </Routes>
   
    }
      
      
    </>
  )
}

export default App
