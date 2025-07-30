"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EliteFashionLanding() {
  type BackgroundKey = "default" | "models" | "scouting" | "about";

  const backgroundImages: Record<BackgroundKey, string> = {
    default: "/images/main/background-default.jpg",
    models: "/images/main/background-default.jpg", // Corregido: era background-default.jpg
    scouting: "/images/main/background-scouting.jpg",
    about: "/images/main/background-models.jpg",
  };

  const [currentBackground, setCurrentBackground] = useState<BackgroundKey>("default");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImages[currentBackground]}
          alt="Fondo"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navegación arriba derecha */}
      <nav className="relative z-10 flex justify-end items-center p-8 md:p-12">
        <div className="flex items-center space-x-8 text-white">
          <Link
            href="#"
            className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 font-sans"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 font-sans"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-between min-h-[calc(100vh-120px)] px-8 md:px-12 lg:px-16">
        {/* Botones */}
        <div className="flex flex-col space-y-8 md:space-y-12">
          {(["models", "scouting", "about"] as BackgroundKey[]).map((section) => (
            <button
              key={section}
              onMouseEnter={() => setCurrentBackground(section)}
              className="text-left group cursor-pointer"
              aria-label={`Ver sección ${section}`}
            >
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none transition-all duration-300 group-hover:opacity-80 group-hover:translate-x-2 drop-shadow-lg"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
            </button>
          ))}
        </div>

        {/* Logo Desktop */}
        <div className="hidden md:flex items-center justify-center flex-1 ml-16">
          <div className="text-center">
            <h1
              className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              ZEBA
            </h1>
            <p className="text-sm lg:text-base text-white/90 font-light tracking-[0.2em] mt-2 font-sans drop-shadow-md">
              MANAGEMENT
            </p>
          </div>
        </div>
      </div>

      {/* Logo Mobile */}
      <div className="md:hidden relative z-10 flex justify-center pb-8">
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-white tracking-tighter drop-shadow-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ZEBA
          </h1>
          <p className="text-xs text-white/90 font-light tracking-[0.2em] mt-1 font-sans drop-shadow-md">
            MANAGEMENT
          </p>
        </div>
      </div>

      {/* Indicador */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </div>
  );
}