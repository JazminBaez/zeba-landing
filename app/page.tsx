"use client"

import { useState } from "react"
import Image from "next/image"

export default function FashionLanding() {
  const [currentBackground, setCurrentBackground] = useState("/images/model-1.png")

  const backgroundImages = {
    models: "/images/model-1.png",
    scouting: "/images/model-2.png",
    about: "/images/model-3.png",
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <Image
          src={currentBackground || "/placeholder.svg"}
          alt="Fashion background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 flex justify-end p-8">
        <div className="flex space-x-8 text-white">
          <a href="#" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300">
            Instagram
          </a>
          <a href="#" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex h-[calc(100vh-120px)] items-center">
        {/* Left Side - Navigation Buttons */}
        <div className="flex flex-col space-y-8 pl-12 md:pl-16 lg:pl-20">
          <button onMouseEnter={() => setCurrentBackground(backgroundImages.models)} className="group text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight transition-all duration-300 group-hover:opacity-80 group-hover:translate-x-2">
              Models
            </h2>
          </button>

          <button onMouseEnter={() => setCurrentBackground(backgroundImages.scouting)} className="group text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight transition-all duration-300 group-hover:opacity-80 group-hover:translate-x-2">
              Scouting
            </h2>
          </button>

          <button onMouseEnter={() => setCurrentBackground(backgroundImages.about)} className="group text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight transition-all duration-300 group-hover:opacity-80 group-hover:translate-x-2">
              About Us
            </h2>
          </button>
        </div>

        {/* Center-Right - Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 translate-x-8 md:translate-x-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.2em] mb-2">ZEBA</h1>
            <p className="text-sm md:text-base font-light text-white tracking-[0.3em] opacity-90">MANAGEMENT</p>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  )
}
