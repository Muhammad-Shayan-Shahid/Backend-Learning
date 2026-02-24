import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import RecpieContext from './context/RecpieContext.jsx'

createRoot(document.getElementById('root')).render(
  <RecpieContext>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </RecpieContext>
)
