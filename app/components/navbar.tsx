"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para detectar la página actual

export default function Navbar() {
  const pathname = usePathname(); // Guardamos la ruta actual (ej: "/register")

  // Función para definir el estilo del link
  const linkStyle = (path: string) => {
    const isActive = pathname === path;
    return `transition-all duration-300 uppercase tracking-widest text-sm font-black ${
      isActive 
        ? "text-yellow-500 underline underline-offset-8 decoration-2" 
        : "text-white hover:text-yellow-500"
    }`;
  };

  return (
    <header className="bg-black/90 backdrop-blur-md border-b border-yellow-900/30 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black text-white tracking-tighter">
          PATAGONIA<span className="text-yellow-500">MU</span>
        </Link>

        {/* Menú Desktop Dinámico */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={linkStyle("/")}>
            Inicio
          </Link>
          <Link href="/register" className={linkStyle("/register")}>
            Registro
          </Link>
          <Link href="/download" className={linkStyle("/download")}>
            Descargas
          </Link>
          <Link href="/nosotros" className={linkStyle("/nosotros")}>
            Info
          </Link>
        </nav>

        {/* Botón Acción rápida */}
        <div className="hidden md:block">
          <Link
            href="/register"
            className="px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-black font-black rounded-sm transition duration-300 uppercase italic text-sm shadow-[0_0_15px_rgba(202,138,4,0.3)]"
          >
            ¡Crear Cuenta!
          </Link>
        </div>
      </div>
    </header>
  );
}