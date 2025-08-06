import { useState } from "react"
import { AlignJustify, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky container mx-auto p-4 justify-between shadow-md">
      <div
        className="inline-block p-2 cursor-pointer"
        onClick={toggleSidebar}
      >
        <div className="relative w-9 h-9">
          <AlignJustify
            size={35}
            className={`absolute transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
          />
          <X
            size={35}
            className={`absolute transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
        </div>
      </div>
    </nav>
  )
}
