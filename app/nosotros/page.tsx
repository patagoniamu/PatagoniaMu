"use client";

import React from "react";

export default function InfoPage() {
  const serverStats = [
    { label: "Versión", value: "0.99b Classic" },
    { label: "Experiencia", value: "9999x" },
    { label: "Drops", value: "80%" },
    { label: "Bug Bless", value: "On" },
    { label: "Reset Nivel", value: "350" },
    { label: "Puntos por Reset", value: "300" },
    { label: "Borra Stats", value: "Sí" },
    { label: "Máximo Stats", value: "32767" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-2 uppercase italic tracking-tighter">
          Información del <span className="text-yellow-500">Servidor</span>
        </h1>
        <p className="text-gray-500 mb-12 italic">Todo lo que necesitas saber sobre Patagonia MU.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna 1: Rates */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-widest border-l-4 border-yellow-600 pl-4 mb-6">
              ⚙️ Configuración General
            </h2>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-sm">
              {serverStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between p-4 ${index !== serverStats.length - 1 ? 'border-b border-neutral-800' : ''}`}
                >
                  <span className="text-gray-400 font-bold uppercase text-xs">{stat.label}</span>
                  <span className="text-yellow-500 font-black tracking-wider text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 2: Eventos y Comandos */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-widest border-l-4 border-yellow-600 pl-4 mb-6">
                🏆 Eventos Disponibles
              </h2>
              <ul className="grid grid-cols-2 gap-3 text-xs font-bold uppercase text-gray-300">
                <li className="bg-neutral-900 p-3 border border-neutral-800 italic">• Blood Castle</li>
                <li className="bg-neutral-900 p-3 border border-neutral-800 italic">• Devil Square</li>
                <li className="bg-neutral-900 p-3 border border-neutral-800 italic">• Chaos Castle</li>
                <li className="bg-neutral-900 p-3 border border-neutral-800 italic">• Invasión Dragones</li>
              </ul>
            </div>

            <div className="bg-yellow-600/10 border border-yellow-600/20 p-6 rounded-sm">
              <h2 className="text-sm font-black uppercase text-yellow-500 mb-4 tracking-tighter">
                Nota del Staff
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "Patagonia MU nace para revivir la época dorada de la versión 0.99b. 
                Buscamos un equilibrio entre la nostalgia y un servidor dinámico para que 
                puedas disfrutar con tus amigos."
              </p>
            </div>
          </div>
        </div>

        {/* Footer simple de la sección */}
        <div className="mt-20 text-center border-t border-neutral-900 pt-10">
          <p className="text-[10px] text-neutral-700 uppercase tracking-[0.5em]">
            Patagonia MU © 2026 - Pure Nostalgia
          </p>
        </div>
      </div>
    </div>
  );
}