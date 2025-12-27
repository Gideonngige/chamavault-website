import { Download } from "lucide-react"
import videoSrc from "../assets/hero-video.mp4" // place your video in public/assets or import it
import { NavLink } from "react-router-dom";
import playstoreBadge from "../assets/playstore.png" 

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* App Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-10">
          ChamaVault
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Smart Group Savings & Investments
        </h2>

        {/* Description */}
        <p className="text-lg text-blue-100 mb-10">
          Manage your chama with ease. Save, invest, issue loans, and track
          everything securely in one powerful mobile app.
        </p>

        {/* CTA Button */}
        <NavLink
  to="https://play.google.com/store/apps/details?id=dev.expo.Chamavault"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center hover:scale-105 transition"
>
  <img
    src={playstoreBadge}
    alt="Get it on Google Play"
    className="h-16 md:h-20 lg:h-20"
  />
</NavLink>

        {/* Optional text below */}
        <p className="mt-6 text-sm text-blue-200">
          Available on Android • Fast • Secure • Trusted
        </p>
      </div>
    </section>
  )
}
