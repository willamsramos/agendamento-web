import "./styles/global.css"
import { React } from "react"
import { createRoot } from "react-dom/client"

import Login from "./pages/login/login.jsx"
import Register from "./pages/register/register.jsx"

createRoot(document.getElementById('root')).render(
   <Register/>
  
)
