import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContext from './context/TaskContext.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(
       <BrowserRouter>
              <AuthProvider>
       <TaskContext>
             <App />
        </TaskContext>

       </AuthProvider>
       </BrowserRouter>


)
