"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    account: "",
    password: "",
    email: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Conectando con Patagonia MU..." });

    try {

const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`, {
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420"
  },
  body: JSON.stringify(formData),
});

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "¡CUENTA CREADA! BIENVENIDO." });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Error: El servidor local no responde." });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 font-sans text-white">
      <Link href="/" className="text-yellow-500 mb-8 hover:text-yellow-400 font-bold uppercase tracking-widest text-xs">
        ← Volver al Inicio
      </Link>

      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 p-10 rounded-sm shadow-2xl">
        <h2 className="text-4xl font-black mb-2 uppercase italic tracking-tighter">Registro</h2>
        <p className="text-gray-500 mb-8 text-sm italic">Crea tu cuenta para la versión 0.99b</p>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account ID (Máx 10)</label>
            <input 
              required
              type="text" 
              maxLength={10}
              className="w-full bg-black border border-neutral-800 p-4 rounded-sm focus:border-yellow-600 outline-none transition-all"
              onChange={(e) => setFormData({...formData, account: e.target.value})}
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password (Máx 10)</label>
            <input 
              required
              type="password" 
              maxLength={10}
              className="w-full bg-black border border-neutral-800 p-4 rounded-sm focus:border-yellow-600 outline-none transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full bg-black border border-neutral-800 p-4 rounded-sm focus:border-yellow-600 outline-none transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {status.message && (
            <div className={`p-4 text-xs font-bold uppercase border ${
              status.type === 'error' ? 'bg-red-900/20 text-red-500 border-red-900' : 
              status.type === 'loading' ? 'bg-blue-900/20 text-blue-400 border-blue-900' : 
              'bg-green-900/20 text-green-500 border-green-900'
            }`}>
              {status.message}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-black py-4 uppercase transition-all shadow-lg"
          >
            Finalizar Registro
          </button>
        </form>
      </div>
    </div>
  );
}