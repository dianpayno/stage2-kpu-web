import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserContextProvider } from './services/context/userContext'
import { ListPaslonContextProvider } from './services/context/listPaslonContex'
import { BrowserRouter as Router} from 'react-router-dom'
import { NewsContextProvider } from './services/context/newscontex'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <UserContextProvider>
    <NewsContextProvider>
    <ListPaslonContextProvider>
      <Router>
    <App/>
      </Router>
  </ListPaslonContextProvider>
  </NewsContextProvider>
    </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
