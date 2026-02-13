"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield, Sword, Users } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
     

      {/* 2. SECCIÓN HÉROE (ESTILO DARK MU) */}
      <section className="relative h-[80vh] flex items-center justify-center px-6 text-center overflow-hidden">
        {/* Overlay de gradiente para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-[#050505]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Version 0.99b - Hard Core Classic
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-tight tracking-tighter italic text-white drop-shadow-2xl">
            LA LEYENDA <br /> <span className="text-yellow-600">CONTINÚA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Vuelve a vivir la verdadera experiencia del MU Online. <br />
            Sin ítems custom, balance original y alojado en la Patagonia.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/register"
              className="px-12 py-5 text-xl bg-yellow-600 hover:bg-yellow-500 text-black font-black rounded-sm shadow-[0_0_20px_rgba(202,138,4,0.3)] transition-all transform hover:scale-105 uppercase italic"
            >
              Comenzar Aventura
            </Link>
            <Link
              href="/download"
              className="px-12 py-5 text-xl border border-gray-700 hover:border-gray-400 text-white font-bold rounded-sm transition-all uppercase italic"
            >
              Bajar Cliente
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SERVER INFO (LOS PILARES) */}
      <section className="py-24 bg-[#080808] px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-600/20 transition-colors">
                <Shield className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-white">Seguridad Total</h3>
              <p className="text-gray-500 leading-relaxed">Anti-Hack premium y estabilidad garantizada mediante Radmin VPN para testeos.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                <Sword className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-white">Classic Drop</h3>
              <p className="text-gray-500 leading-relaxed">Configuración Slow-Medium. El valor de los items vuelve a ser importante.</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <Users className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider text-white">Comunidad</h3>
              <p className="text-gray-500 leading-relaxed">Staff activo y eventos diarios. Un servidor pensado por y para jugadores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER COMPACTO */}
      <footer className="bg-black py-12 border-t border-white/5 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-sm mb-4 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Patagonia MU 99b. Desarrollado por el Staff.
          </p>
          <div className="flex justify-center space-x-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <Link href="/nosotros" className="hover:text-yellow-500 transition">Reglas</Link>
            <Link href="/terminos" className="hover:text-yellow-500 transition">Términos</Link>
            <Link href="/contacto" className="hover:text-yellow-500 transition">Soporte</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}