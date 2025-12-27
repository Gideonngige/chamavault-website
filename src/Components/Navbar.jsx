import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/splash.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-yellow-500 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="ChamaVault Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          <li><a href="#home" className="hover:text-gray-200">Home</a></li>
          <li><a href="#why" className="hover:text-gray-200">Why ChamaVault</a></li>
          <li><a href="#how" className="hover:text-gray-200">How It Works</a></li>
          {/* <li><a href="#team" className="hover:text-gray-200">Our Team</a></li> */}
          <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-yellow-500 px-6 pb-4">
          <ul className="space-y-4 font-medium text-white">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#why" onClick={() => setOpen(false)}>Why ChamaVault</a></li>
            <li><a href="#how" onClick={() => setOpen(false)}>How It Works</a></li>
            <li><a href="#team" onClick={() => setOpen(false)}>Our Team</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
