"use client";

import React from "react";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center p-8 font-sans text-white">

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Sección Radmin VPN */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-sm shadow-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tighter text-blue-500">1. Conexión VPN</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Para poder acceder al servidor durante esta fase Beta, necesitas conectarte a nuestra red privada a través de <strong>Radmin VPN</strong>.
            </p>
            
            <div className="bg-black p-4 border-l-4 border-blue-600 mb-6">
              <p className="text-xs text-gray-500 uppercase font-bold mb-1">Datos de la Red:</p>
              <p className="text-sm font-mono text-blue-400">Red: <span className="text-white">PatagoniaMu</span></p>
              <p className="text-sm font-mono text-blue-400">Pass: <span className="text-white">PatagoniaMu</span></p>
            </div>
          </div>

          <a 
            href="https://www.radmin-vpn.com/es/" 
            target="_blank" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white text-center font-black py-4 uppercase transition-all shadow-lg"
          >
            Descargar Radmin
          </a>
        </div>

        {/* Sección Cliente del Juego */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-sm shadow-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tighter text-yellow-500">2. Cliente Full</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Descarga el cliente completo de <strong>Patagonia MU v0.99b</strong>. No requiere instalación, solo descomprimir y jugar.
            </p>
            
            <ul className="text-xs text-gray-500 space-y-2 mb-6 uppercase font-bold">
              <li>• Versión: 0.99b Classic</li>
              <li>• Tamaño: ~200 MB</li>
              <li>• Host: Mediafire</li>
            </ul>
          </div>

          <a 
            href="https://www.mediafire.com/file/v12nex7uodxl2tt/PatagoniaMu.rar/file" 
            target="_blank" 
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black text-center font-black py-4 uppercase transition-all shadow-lg"
          >
            Descargar Juego
          </a>
        </div>

      </div>

      <p className="mt-12 text-neutral-600 text-[10px] uppercase tracking-[0.2em]">
        Patagonia MU - Servidor Privado en Fase Beta
      </p>
    </div>
  );
}