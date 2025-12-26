import { Download } from "lucide-react"
import videoSrc from "../assets/hero-video.mp4" // place your video in public/assets or import it

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      
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
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
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
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          <Download size={20} />
          Get it on Play Store
        </a>

        {/* Optional text below */}
        <p className="mt-6 text-sm text-blue-200">
          Available on Android • Fast • Secure • Trusted
        </p>
      </div>
    </section>
  )
}
