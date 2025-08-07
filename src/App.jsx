import { Button } from "@/components/ui/button"
import Navbar from "./components/layout/Navbar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
export default function App(){
  return(
    <div >
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}