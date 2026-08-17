import React from 'react';
import fotoBg from '../assets/foto.png'; // Sesuaikan jalur (path) import jika diperlukan

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-stone-950 overflow-hidden">
      
      {/* 1. Background Foto Full Menutupi Layar (Object Cover) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={fotoBg} 
          alt="Wedding Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. Overlay Gelap Elegan agar Teks Sangat Kontras & Terbaca */}
      <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[1px]"></div>

      {/* 3. Konten Teks Undangan */}
      <div className="relative z-10 max-w-xl px-6 animate-fade-in text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-yellow-400 font-bold mb-3">The Wedding Of</p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
          Mukhtasar <br />
          <span className="text-yellow-400 italic">&amp;</span> Rina
        </h1>

        <div className="w-20 h-[2px] bg-yellow-400 mx-auto my-6"></div>

        <div className="space-y-5 text-stone-100 leading-relaxed">
          <div className="space-y-1">
            <h3 className="font-bold text-lg sm:text-xl uppercase tracking-widest text-white">Mukhtasar Khalid</h3>
            <p className="text-[11px] sm:text-[12px] opacity-90 uppercase tracking-wider text-stone-300">Putra Kedua dari Bapak Ayobkhan &amp; Ibu Lenny Yuliana</p>
          </div>

          <p className="font-serif italic text-lg text-yellow-400">&amp;</p>

          <div className="space-y-1">
            <h3 className="font-bold text-lg sm:text-xl uppercase tracking-widest text-white">Rina Dessi Ariyanti</h3>
            <p className="text-[11px] sm:text-[12px] opacity-90 uppercase tracking-wider text-stone-300">Putri Kedua dari Alm. Bapak Muhammad Yusuf &amp; Almh. Ibu Musrati</p>
          </div>
        </div>
      </div>

      {/* Indikator Scroll */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <div className="w-[1px] h-10 bg-white/30 mx-auto mb-2"></div>
        <p className="text-[9px] uppercase tracking-widest text-white/70">Scroll</p>
      </div>
    </section>
  );
}