import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Why from "../Components/Why"
import HowItWorks from "../Components/HowItWorks"
import Features from "../Components/Features"
import Team from "../Components/Team"
import Footer from "../Components/Footer"


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Why />
      <HowItWorks />
      <Features />
      <Team />
      <Footer />
    </div>
  )
}
