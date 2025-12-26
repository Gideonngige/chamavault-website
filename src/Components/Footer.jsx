import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Copyright */}
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} ChamaVault. All rights reserved. <br className="md:hidden" />
          Designed by GuruCrafts Agency
        </p>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="/privacy-policy"
            className="text-gray-300 hover:text-white text-sm"
          >
            Privacy Policy
          </a>

          {/* Optional social icons */}
          <div className="flex gap-3 mt-2 md:mt-0">
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
