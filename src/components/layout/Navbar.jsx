import { useState } from "react"
import { AlignJustify, X } from "lucide-react"
import {Link} from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <>
     <nav className="sticky container mx-auto p-4 justify-between shadow-md">
      <div
        className="inline-block p-2 cursor-pointer"
        onClick={toggleSidebar}
      >
        <div className= "relative w-9 h-9">
          <AlignJustify
            size={35}
            className={`absolute transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
          />
        </div>
      </div>
    </nav>
    <div className={`fixed left-0 top-0 h-full w-64 p-4 pt-10 bg-background z-40 transform transition-transform duration-400 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}>
        <div className="relative w-full h-full">
        <X
            onClick={toggleSidebar}
            size={35}
            className={` absolute right-0 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
          <div className="pt-20"> 
            <ul className="space-y-6 text-2xl">
                <Link
                to="/"
                className="block p-4 hover:bg-"
                onClick={toggleSidebar}
                >
                Home
                </Link>
            </ul>
          </div>
        </div>
    </div>
    </>
  )
}
