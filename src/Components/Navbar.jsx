import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full z-50 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center rounded-full">
          <img
            src={logo}
            alt="ChamaVault Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Why ChamaVault</a></li>
          <li><a href="#" className="hover:text-blue-600">How It Works</a></li>
          <li><a href="#" className="hover:text-blue-600">Team</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
